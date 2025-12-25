import { ClipboardCheck, Award, FileSearch, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
    title: 'Reality Strategy',
    description: 'We verify physics before buying hardware.',
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'The Gold Standard',
    description: 'Automated Logic (WebCTRL) + Carrier Industrial Power.',
  },
  {
    icon: <FileSearch className="h-8 w-8 text-accent" />,
    title: 'Forensic Audit',
    description: 'NEBB-Certified unbiased verification (We sit on the Board).',
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-accent" />,
    title: 'Lifecycle Commissioning',
    description: 'Resilient, healthy buildings that stay optimized.',
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
          <p className="mt-4 text-lg text-muted-foreground">
            Our 4-step process to guarantee building performance.
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
