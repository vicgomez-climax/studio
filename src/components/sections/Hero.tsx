import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-card text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          We Put Your Building In Cruise Control.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
          Precision Engineering, Carrier-Backed Power, and NEBB-Certified
          Verification.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="#methodology">Our Methodology</Link>
          </Button>
          <Button asChild size="lg" variant="accent">
            <Link href="#audit">Request Smart Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
