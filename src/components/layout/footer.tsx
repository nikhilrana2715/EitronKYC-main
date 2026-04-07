'use client';

import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-lg border-t border-border/50 py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            EitronKYC
          </span>
        </div>
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} EitronKYC. All rights reserved. | Developed by{' '}
          <a 
            href="https://nabilaminhridoy.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Nabil Amin Hridoy
          </a>
        </p>
      </div>
    </footer>
  );
}
