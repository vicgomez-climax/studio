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
    title: 'Building Automation',
    description:
      'WebCTRL experts. We design, install, and service open protocol, future-proof building automation systems.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: 'System Rescue',
    description:
      'Breaking proprietary lock-ins. We specialize in integrating and upgrading legacy Siemens/JCI systems.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'NEBB TAB',
    description:
      'Certified Testing, Adjusting, and Balancing for both air and hydronic systems. Unbiased, precise, and repeatable.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Specialized solutions for complex building challenges.
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
                <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="flex-grow text-muted-foreground mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
