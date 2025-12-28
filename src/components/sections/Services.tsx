import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wrench, Cog, Activity, Server } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Cog className="h-8 w-8 text-accent" />,
    title: 'Building Automation (WebCTRL)',
    description: 'As factory-authorized Automated Logic partners, we deliver scalable, open-protocol automation systems that you own and control.',
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: 'Retro-Commissioning & BAS Rescue',
    description: 'We identify and fix root-cause issues in existing systems to optimize performance, not just patch code.',
  },
  {
    icon: <Activity className="h-8 w-8 text-accent" />,
    title: 'NEBB Testing, Adjusting & Balancing',
    description: 'NEBB-certified air and hydronic balancing to ensure your systems perform to design specifications.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Inherited a Broken System?
            </h2>
            <p className="text-lg text-muted-foreground">
              You're not alone. Many facilities are trapped by proprietary code, failing controllers, and underperforming systems. We don't just apply temporary fixes—we perform a <strong className="text-primary">"BAS Rescue."</strong> Our mechanical and controls expertise allows us to diagnose the root cause, whether it's in the code or the coils.
            </p>
             <p className="text-lg text-muted-foreground">
              Our goal is to untrap the owner, providing a clear path to an open, efficient, and reliable building automation system.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4">
                    {service.icon}
                  <div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
