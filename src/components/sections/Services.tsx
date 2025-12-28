import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wrench, Cog, Activity } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  {
    icon: <Cog className="h-8 w-8 text-accent" />,
    title: 'Building Automation (WebCTRL)',
    headline: 'Precision Control with Automated Logic',
    description: "As a factory-authorized Automated Logic dealer, we deploy WebCTRL—the gold standard in healthcare intelligence. We deliver native BACnet solutions with intuitive 3D floor plans and thermographic reporting. No proprietary 'black boxes.' You own your data.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: 'Retro-Commissioning & Rescue',
    headline: "We Fix What Others Can't",
    description: "50% of 'controls problems' are actually mechanical issues. Because we hold a State Mechanical License (CMC), we diagnose the chiller, the dampers, and the physics—not just the code. We rescue 'orphaned' systems to restore peak efficiency.",
  },
  {
    icon: <Activity className="h-8 w-8 text-accent" />,
    title: 'NEBB Testing, Adjusting & Balancing',
    headline: 'Certified Testing & Compliance (DNV/AHCA)',
    description: 'In critical environments, airflow is a liability. We provide NEBB-Certified reporting tailored for DNV (NIAHO), ISO 9001, and AHCA audits. From negative pressure isolation rooms to surgical suites, we verify the invisible to ensure you pass surveys without findings.',
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
                    <CardTitle className="text-xl text-primary">{service.headline}</CardTitle>
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
