import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import Image from 'next/image';
import { getPlaceholderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const projectSpecs = [
  { label: 'Project Type', value: 'Campus-Wide System Integration' },
  { label: 'Building Count', value: '35 Buildings' },
  { label: 'Original System', value: 'Siemens Apogee' },
  { label: 'New System', value: 'Automated Logic WebCTRL' },
  { label: 'Key Benefit', value: 'Unified campus control, unlimited web users, preserved infrastructure' },
];

const strategies = [
  'Legacy System Integration',
  'Centralized Plant Management',
  'Multi-User Web Access',
  'NEBB-Certified Retro-commissioning',
  'Phased & Budget-Conscious Upgrade',
  'Enhanced Graphical Interface',
];

export default function CaseStudyPage() {
  const heroImage = getPlaceholderImages().find((p) => p.id === 'case-study-2');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-96">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Florida Memorial University: Campus-Wide Integration
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Integrating a 35-building Siemens Apogee system into a single, powerful WebCTRL interface.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-accent">
                    Project Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Florida Memorial University (FMU), a campus with 35 buildings, was operating on an aging Siemens Apogee system that limited access to a single user workstation and required costly licenses for additional users. Mechanical Air Concepts was tasked with modernizing their building automation system while retaining their significant existing infrastructure investment.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    The Challenge: A Fractured & Limited System
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                   The university's primary challenge was the lack of centralized, web-accessible control. The single-user limitation of the Siemens Apogee system created operational bottlenecks and prevented collaborative facilities management. They needed a solution that could unify the entire campus, from dormitories to the central energy plant, under a single, easy-to-use interface without discarding their existing hardware.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">The Solution: Unified Control with WebCTRL</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    MAC implemented Automated Logic's WebCTRL, integrating the large portfolio of Siemens hardware, including dormitory systems, with minimal new investment. The new system provided unlimited user access via the university's intranet, immediately improving operational efficiency. The central energy plant, with its chillers and meters, was integrated into a rich, comprehensive graphic with enhanced reporting and alarming. The entire transition was performed gradually, allowing the owner to manage the upgrade within their budget. As part of the process, our NEBB-certified technicians retro-commissioned each building, improving operation and the owner's bottom line.
                  </p>
                </div>
              </div>

              <aside className="space-y-8">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Project Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    {projectSpecs.map((spec) => (
                      <div key={spec.label}>
                        <p className="font-semibold">{spec.label}</p>
                        <p className="text-muted-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                 <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Strategies Implemented</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {strategies.map((strategy) => (
                         <li key={strategy} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
