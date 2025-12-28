import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        
        <div className="mb-4">
          <span className="text-sm font-bold tracking-widest text-primary/60 uppercase">
            Commercial, Industrial & Healthcare Only
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary leading-tight">
          Mission-Critical Building Intelligence for South Florida.
        </h1>
        
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          The precision of a Tier 1 Integrator. The grit of a Licensed Mechanical Contractor. Factory-authorized Automated Logic Partner & NEBB Certified.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="accent">
            <Link href="#contact">Schedule a Site Audit</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/case-studies/baptist-health-automated-logic">View Healthcare Projects</Link>
          </Button>
        </div>
        
        <div className="mt-16">
          <p className="text-sm text-muted-foreground">
            Authorized Dealer of Automated Logic | NEBB Certified
          </p>
        </div>
      </div>
    </section>
  );
}
