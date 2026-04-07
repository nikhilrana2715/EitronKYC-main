'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Globe, Shield, CheckCircle, Sparkles, Zap, Star } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Another Name of KYC Expertise</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-primary/70 bg-clip-text text-transparent">
                Empowering Trust Through
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Smarter KYC Solutions
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From digital onboarding to identity verification — Eitron combines innovation, precision, and compliance to make customer verification 
              <span className="text-primary font-semibold"> seamless, secure, and smart</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button size="lg" asChild className="text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 h-auto group min-w-[200px] sm:min-w-[250px]">
                <Link href="/documents">
                  <FileText className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                  Order Documents
                  <Sparkles className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 h-auto hover:bg-primary/10 transition-all duration-300 min-w-[200px] sm:min-w-[250px]">
                <Link href="#how-it-works">
                  How It Works
                  <Star className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Why Choose EitronKYC
              </span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of KYC verification with cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm animate-slide-in-left">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Globe className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Global Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  KYC solutions compliant with international regulations including AML, GDPR, and local requirements.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm animate-slide-up">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Shield className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">AI-Powered Verification</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Advanced artificial intelligence and machine learning for accurate, real-time identity verification.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm animate-slide-in-right">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <CheckCircle className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Easy integration with existing systems through APIs and SDKs for smooth customer onboarding.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                How It Works
              </span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete KYC verification in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group animate-slide-in-left">
              <div className="relative mx-auto mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Submit Information</h4>
              <p className="text-muted-foreground text-sm">Provide customer details and documents</p>
            </div>
            
            <div className="text-center group animate-slide-in-left" style={{animationDelay: '0.1s'}}>
              <div className="relative mx-auto mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-lg">AI Verification</h4>
              <p className="text-muted-foreground text-sm">Automated identity verification process</p>
            </div>
            
            <div className="text-center group animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="relative mx-auto mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Compliance Check</h4>
              <p className="text-muted-foreground text-sm">Regulatory compliance and risk assessment</p>
            </div>
            
            <div className="text-center group animate-slide-in-right" style={{animationDelay: '0.3s'}}>
              <div className="relative mx-auto mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Get Results</h4>
              <p className="text-muted-foreground text-sm">Receive verification results instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our KYC solutions today and experience the future of identity verification
            </p>
            <Button size="lg" variant="default" asChild className="text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 h-auto group min-w-[200px] sm:min-w-[250px]">
              <Link href="/documents">
                Order Documents Now
                <Sparkles className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
