'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { ReactElement } from 'react';

/**
 * Authentication hook to protect routes
 * Redirects to sign-in page if user is not authenticated
 */
export function useAuth() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is authenticated
    const isUserAuthenticated = () => {
      // Check session storage first
      const sessionUser = sessionStorage.getItem('user');
      if (sessionUser) {
        try {
          const user = JSON.parse(sessionUser);
          return user && user.email;
        } catch {
          return false;
        }
      }

      // Check local storage
      const localUser = localStorage.getItem('user');
      if (localUser) {
        try {
          const user = JSON.parse(localUser);
          return user && user.email;
        } catch {
          return false;
        }
      }

      return false;
    };

    // List of protected routes
    const protectedRoutes = [
      '/my-account',
      '/my-account/orders',
      '/my-account/profile',
      '/my-account/settings'
    ];

    // Check if current route is protected
    const isProtectedRoute = protectedRoutes.some(route => 
      pathname === route || pathname.startsWith(route + '/')
    );

    // If route is protected and user is not authenticated, redirect to sign-in
    if (isProtectedRoute && !isUserAuthenticated()) {
      // Store the intended destination for redirect after sign-in
      sessionStorage.setItem('redirectAfterSignIn', pathname);
      router.push('/sign-in');
    }
  }, [router, pathname]);
}

/**
 * Server-side authentication check utility
 * This can be used in API routes or server components
 */
export function isAuthenticated(request?: Request): boolean {
  // For client-side usage, we rely on storage
  if (typeof window !== 'undefined') {
    const sessionUser = sessionStorage.getItem('user');
    const localUser = localStorage.getItem('user');
    
    if (sessionUser || localUser) {
      try {
        const user = JSON.parse(sessionUser || localUser || '{}');
        return !!(user && user.email);
      } catch {
        return false;
      }
    }
    return false;
  }

  // For server-side usage, check cookies or headers
  if (request) {
    // Check for authentication cookie or header
    const authCookie = request.headers.get('cookie')?.includes('auth-token=true');
    const authHeader = request.headers.get('authorization');
    
    return !!(authCookie || authHeader);
  }

  return false;
}

/**
 * Sign in utility function
 */
export function signIn(email: string, name?: string) {
  const userData = {
    id: Date.now().toString(),
    email,
    name: name || email.split('@')[0],
    signInTime: new Date().toISOString()
  };

  // Store in both session and local storage
  sessionStorage.setItem('user', JSON.stringify(userData));
  localStorage.setItem('user', JSON.stringify(userData));

  return userData;
}

/**
 * Sign out utility function
 */
export function signOut() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  sessionStorage.removeItem('redirectAfterSignIn');
}

/**
 * Get current user data
 */
export function getCurrentUser() {
  const sessionUser = sessionStorage.getItem('user');
  const localUser = localStorage.getItem('user');
  
  try {
    const user = JSON.parse(sessionUser || localUser || '{}');
    return user.email ? user : null;
  } catch {
    return null;
  }
}

/**
 * Authentication wrapper component for protected routes
 */
export function AuthGuard({ children }: { children: any }) {
  useAuth();
  return children as any;
}
