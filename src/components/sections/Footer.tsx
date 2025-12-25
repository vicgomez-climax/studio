import { Building, Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-primary font-bold text-xl mb-4">
              <Building className="h-6 w-6 text-accent" />
              <span className="font-extrabold">
                MechanicalAir<span className="font-semibold text-accent/80">Concepts</span>
              </span>
            </div>
            <p className="text-sm">
              Creating optimal and efficient building environments that enable people and businesses to achieve their highest potential.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
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
              <h3 className="text-lg font-semibold text-primary mb-4">Our Offices</h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Miami, USA</p>
                <p className="font-semibold">Monterrey, Mexico</p>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} MAConcepts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
