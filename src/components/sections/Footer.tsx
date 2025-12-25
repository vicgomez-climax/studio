import { Separator } from '@/components/ui/separator';
import { AutomatedLogicLogo } from '../logos/AutomatedLogicLogo';
import { CarrierLogo } from '../logos/CarrierLogo';
import { NEBBLogo } from '../logos/NEBBLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                Partners & Certifications
            </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-muted-foreground">
          <div className="flex items-center gap-3">
             <NEBBLogo className="h-16" />
             <span className='font-semibold'>NEBB Certified Agency</span>
          </div>
          <AutomatedLogicLogo className="h-12" />
          <CarrierLogo className="h-12" />
        </div>
        <Separator className="my-8 bg-border/50" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} MAConcepts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
