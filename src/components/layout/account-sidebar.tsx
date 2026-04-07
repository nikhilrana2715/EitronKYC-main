'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  User, 
  Settings,
  ChevronRight,
  LogOut
} from 'lucide-react';

const sidebarItems = [
  {
    href: '/my-account',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/my-account/orders',
    label: 'Orders',
    icon: Package,
  },
  {
    href: '/my-account/profile',
    label: 'Profile',
    icon: User,
  },
  {
    href: '/my-account/settings',
    label: 'Settings',
    icon: Settings,
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    // Clear authentication data
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    // Redirect to sign-in page
    router.push('/sign-in');
  };

  return (
    <aside className="w-full lg:w-64 space-y-6">
      {/* Navigation Card */}
      <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 animate-slide-in-left">
        <h3 className="font-semibold text-foreground mb-4">Account Navigation</h3>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/my-account' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 group ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'hover:bg-primary/10 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight 
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`} 
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Quick Actions Card */}
      <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
        <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <Link 
            href="/documents"
            className="block w-full text-left p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
          >
            <span className="font-medium">New Document Order</span>
          </Link>
          <Link 
            href="/contact-us"
            className="block w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300"
          >
            <span className="font-medium">Get Support</span>
          </Link>
        </div>
      </div>

      {/* Account Status Card */}
      <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
        <h3 className="font-semibold text-foreground mb-4">Account Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Account Type</span>
            <span className="text-sm font-medium">Premium</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Member Since</span>
            <span className="text-sm font-medium">Jan 2024</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Verification</span>
            <span className="text-sm font-medium text-green-600">Verified</span>
          </div>
        </div>
        
        {/* Sign Out Button */}
        <div className="mt-4 pt-4 border-t">
          <button
            onClick={handleSignOut}
            className="flex items-center justify-between w-full p-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3">
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Sign Out</span>
            </div>
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </aside>
  );
}
