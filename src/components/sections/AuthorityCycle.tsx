
import { ClipboardCheck, Award, FileSearch, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
    title: 'Data-Driven Assessment',
    description: 'We live our value of integrity by verifying actual building physics through rigorous NEBB testing before recommending any solutions.',
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Open-Protocol Systems',
    description: 'As an Authorized Dealer of Automated Logic, we design vendor-neutral BACnet solutions that give you control and flexibility.',
  },
  {
    icon: <FileSearch className="h-8 w-8 text-accent" />,
    title: 'Forensic Commissioning',
    description: 'NEBB-certified Testing, Adjusting, and Balancing reveals hidden performance issues and validates proper system operation.',
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-accent" />,
    title: 'Continuous Improvement',
    description: 'We enable lifecycle optimization through daily improvement of our people, processes, and products to ensure your environment is always optimal.',
  },
];

export function AuthorityCycle() {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Methodology
          </h2>
          <p className="mt-4 text-lg font-semibold text-accent/90">
            If You Can't Measure It, You Can't Control It
          </p>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            Our NEBB-certified methodology ensures measurable performance and continuous optimization, creating building environments that help people and businesses achieve their highest potential.
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
