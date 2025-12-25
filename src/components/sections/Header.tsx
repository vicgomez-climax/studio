'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#methodology', label: 'Methodology' },
  { href: '/#services', label: 'Services' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/videos', label: 'Videos' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary-foreground font-bold text-xl"
          >
            <Building className="h-6 w-6 text-accent" />
            <span>MAConcepts</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:text-primary-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-16 left-0 w-full bg-card shadow-lg transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'
        )}
      >
        <nav className="flex flex-col items-center gap-6 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-primary-foreground/80 hover:text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
