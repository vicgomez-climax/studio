import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Thermometer, ShieldCheck, Construction } from 'lucide-react';

const advantages = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Self-Performed Low Voltage',
    description: "We own our conduit and wiring. We control the schedule.",
  },
  {
    icon: <Thermometer className="h-8 w-8 text-accent" />,
    title: 'Mechanical Physics (CMC)',
    description: "We program for thermodynamics, not just data points. We speak the language of your Mechanical Prime.",
  },
  {
    icon: <Construction className="h-8 w-8 text-accent" />,
    title: 'Automated Logic',
    description: 'Factory-authorized WebCTRL deployment.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Institutional NEBB',
    description: 'Certified validation for Government & Healthcare portfolios.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Single-Source Accountability.
            </h2>
            <p className="text-lg text-muted-foreground">
              We eliminate the scope gaps between trades. As a Licensed Low Voltage & Mechanical Contractor, we self-perform the critical path of your project:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage) => (
              <Card key={advantage.title} className="bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4">
                    {advantage.icon}
                  <div>
                    <CardTitle className="text-xl text-primary">{advantage.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {advantage.description}
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
