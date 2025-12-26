'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroRef.current;
        const xPos = (clientX / offsetWidth - 0.5) * 2;
        const yPos = (clientY / offsetHeight - 0.5) * 2;
        heroRef.current.style.setProperty('--x', xPos.toFixed(3));
        heroRef.current.style.setProperty('--y', yPos.toFixed(3));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-city-section">
      <div className="city-bg">
        <div className="skyscraper-group">
          {[...Array(15)].map((_, i) => (
            <div key={`fg-${i}`} className={`skyscraper-fg part-${i}`}></div>
          ))}
        </div>
        <div className="skyscraper-group">
          {[...Array(15)].map((_, i) => (
            <div key={`bg-${i}`} className={`skyscraper-bg part-${i}`}></div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white animate-fade-in-down">
            Put Your Building in Cruise Control.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 animate-fade-in-up-slow">
            Our mission is to create optimal and efficient building environments that enable people and businesses to achieve their highest potential.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4 animate-fade-in-up-slower">
            <Button asChild size="lg" variant="secondary">
              <Link href="#methodology">Our Methodology</Link>
            </Button>
            <Button asChild size="lg" variant="accent">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
          <div className="mt-12 animate-fade-in-up-slower">
            <Image
              src="/images/AutomatedLogic_logo_AD_wr_300.png"
              alt="Automated Logic Authorized Dealer"
              width={300}
              height={85}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
