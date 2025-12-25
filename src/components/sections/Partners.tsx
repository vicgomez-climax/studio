import { AutomatedLogicLogo } from '@/components/logos/AutomatedLogicLogo';
import { CarrierLogo } from '../logos/CarrierLogo';

export function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Authorized Dealer
          </h2>
        </div>
        <div className="flex justify-center items-center gap-12 md:gap-16 flex-wrap">
          <AutomatedLogicLogo className="h-12 md:h-16 text-primary-foreground" />
          <CarrierLogo className="h-12 md:h-14" />
        </div>
        <div className="text-center mt-8">
          <p className="text-base text-muted-foreground">
            Certified Automated Logic and Carrier i-Vu dealer serving South
            Florida
          </p>
        </div>
      </div>
    </section>
  );
}
