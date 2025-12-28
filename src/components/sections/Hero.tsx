import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        
        <div className="mb-4">
          <span className="text-sm font-bold tracking-widest text-primary/60 uppercase">
            COMMERCIAL, INDUSTRIAL & HEALTHCARE
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary leading-tight">
          Mission-Critical Building Intelligence for South Florida.
        </h1>
        
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          The precision of a Tier 1 Integrator. The physics-based expertise of a Licensed Mechanical Contractor. Self-performing installs with zero reliance on subcontractors.
        </p>

        <div className="mt-8">
            <p className="font-semibold text-primary/80">24/7 Rapid Response for Critical Environments</p>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="accent">
            <Link href="#contact">Schedule a Site Audit</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/case-studies/baptist-health-automated-logic">View Healthcare Projects</Link>
          </Button>
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Authorized Dealer of</p>
            <div className="flex justify-center items-center gap-x-8 md:gap-x-12 gap-y-4 flex-wrap">
                <Link href="https://www.automatedlogic.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                    <Image 
                      src="/images/Authorized AutomatedLogic-for-white.png"
                      alt="Automated Logic Authorized Dealer"
                      width={220}
                      height={60}
                      className="h-16 w-auto object-contain mix-blend-multiply"
                    />
                </Link>
                <Link href="https://www.nebb.org" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                    <Image
                      src="/images/NEBB.png"
                      alt="NEBB Certified Firm"
                      width={110}
                      height={110}
                      className="h-24 w-auto object-contain"
                    />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
