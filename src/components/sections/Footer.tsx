import { Building, Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-primary-foreground/80">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-primary-foreground font-bold text-xl mb-2">
              <Building className="h-6 w-6 text-accent" />
              <span className="font-extrabold">
                MA<span className="font-semibold text-accent/80">Concepts</span>
              </span>
            </div>
            <p className="text-sm">
             Mechanical Air Concepts | Est. 2002
            </p>
            <p className="text-sm mt-2">
              Headquartered in Miami, serving South Florida.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-4">Service Department</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>info@maconcepts.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>786-264-6082</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-4">Our Offices</h3>
              <div className="space-y-2 text-sm">
                <p>Our offices: Miami, Florida, USA; Monterrey, Nuevo León, Mexico</p>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-primary-foreground/20" />
        <p className="text-center text-sm text-primary-foreground/60">
          &copy; 2026 MAConcepts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
