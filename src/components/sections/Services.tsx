import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Cog, Wrench, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Cog className="h-10 w-10 text-accent" />,
    title: 'Open-Protocol Automation',
    description:
      'We design, install, and service future-proof building automation systems using Automated Logic, giving you full ownership and control.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: 'Legacy System Rescue',
    description:
      'We break proprietary lock-ins by integrating and upgrading legacy systems (Siemens, JCI, Trane) without forcing a full "rip and replace."',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'NEBB-Certified TAB',
    description:
      'Unbiased, precise, and repeatable Testing, Adjusting, and Balancing for air and hydronic systems to guarantee performance.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            A Radically Different Approach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just sell controls. We solve complex integration challenges to maximize the value of your building.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background/50 border-border/50 rounded-lg text-card-foreground flex flex-col text-center items-center p-6 hover:border-accent transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="pt-0">
                {service.icon}
                <h3 className="mt-4 text-2xl font-semibold text-primary">{service.title}</h3>
              </div>
              <p className="flex-grow text-muted-foreground mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
