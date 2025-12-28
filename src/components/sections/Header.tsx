'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#about-us', label: 'About' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/videos', label: 'Videos' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary font-bold text-xl"
          >
            <Building className="h-6 w-6 text-accent" />
            <span className="font-extrabold text-primary">
              MA<span className="font-semibold text-primary/80">Concepts</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className='flex items-center gap-2'>
            <Button asChild variant="ghost" className='hidden sm:inline-flex'>
              <Link href="#contact">Service Dept</Link>
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-16 left-0 w-full bg-background shadow-lg transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'
        )}
      >
        <div className="border-t border-border">
          <nav className="flex flex-col items-start gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/80 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <Button asChild variant="outline" className='w-full'>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Service Dept</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
