'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Shield, Sparkles, LogOut, LayoutDashboard, Menu, X } from 'lucide-react';
import { getCurrentUser } from '@/lib/auth';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/documents', label: 'Documents' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if user is logged in using the auth utility
  useEffect(() => {
    const checkAuthStatus = () => {
      const currentUser = getCurrentUser();
      setIsLoggedIn(currentUser !== null);
    };

    // Check on mount
    checkAuthStatus();

    // Listen for storage changes (for multi-tab sync)
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleStorageChange);
    };
  }, [pathname]); // Re-check when route changes

  const handleSignOut = () => {
    // Clear authentication data
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    // Update state immediately
    setIsLoggedIn(false);
    
    // Redirect to home page
    router.push('/');
  };

  return (
    <header className="relative bg-background/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="relative">
              <Shield className="h-10 w-10 text-primary" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-primary animate-pulse" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              EitronKYC
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 animate-slide-in-right">
            {isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Link href="/my-account">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleSignOut}
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300 border-red-200 hover:border-red-300 text-red-600 hover:text-red-700"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="border border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild className="transition-all duration-300 hover:scale-105">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 mt-4 pt-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col items-center space-y-3 pt-4 border-t border-border/50">
                {isLoggedIn ? (
                  <>
                    <Button 
                      variant="outline" 
                      asChild
                      className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full w-32 justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/my-account">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="hover:bg-primary/10 hover:text-primary transition-all duration-300 border-red-200 hover:border-red-300 text-red-600 hover:text-red-700 rounded-full w-32 justify-center"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      asChild 
                      className="border border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full w-32 justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button 
                      asChild 
                      className="transition-all duration-300 hover:scale-105 rounded-full w-32 justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/sign-up">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
