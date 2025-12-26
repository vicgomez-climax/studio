import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative hero-section bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e] text-primary-foreground overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="animated-bg">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="shape shape6"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white animate-fade-in-down">
            Put Your Building in Cruise Control.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80 animate-fade-in-up-slow">
            Our mission is to create optimal and efficient building environments that enable people and businesses to achieve their highest potential.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-slower">
            <Button asChild size="lg" variant="secondary">
              <Link href="#methodology">Our Methodology</Link>
            </Button>
            <Button asChild size="lg" variant="accent">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
          <div className="flex justify-center mt-12 animate-fade-in-up-slower">
            <Image
              src="/images/AutomatedLogic_logo_AD_wr_300.png"
              alt="Automated Logic Authorized Dealer"
              width={300}
              height={85}
              priority
            />
          </div>
      </div>
    </section>
  );
}
