import { ClipboardCheck, Award, FileSearch, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
    title: 'Reality Strategy',
    description: 'We verify the physics of your building before you ever buy new hardware, ensuring a data-driven approach.',
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'The Gold Standard',
    description: 'We install future-proof, open-protocol systems powered by Automated Logic and backed by Carrier.',
  },
  {
    icon: <FileSearch className="h-8 w-8 text-accent" />,
    title: 'Forensic Audit',
    description: 'As NEBB board members, we provide unbiased, certified verification to find and fix hidden issues.',
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-accent" />,
    title: 'Lifecycle Commissioning',
    description: 'We ensure your building stays optimized for the long haul, protecting your investment and guaranteeing performance.',
  },
];

export function AuthorityCycle() {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The "Authority Cycle"
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe building owners should be in control of their assets. Our 4-step process is designed to maximize your financial investment and untrap you from proprietary systems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-card mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
