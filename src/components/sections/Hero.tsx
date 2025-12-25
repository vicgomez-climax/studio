import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-card text-primary-foreground overflow-hidden">
       <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            Intelligent Buildings for Optimal Environments.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Our mission is to create optimal and efficient building environments that enable people and businesses to achieve their highest potential.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="#methodology">Our Methodology</Link>
            </Button>
            <Button asChild size="lg" variant="accent">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
      </div>
    </section>
  );
}
