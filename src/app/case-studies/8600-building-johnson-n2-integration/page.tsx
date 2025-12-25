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
  { label: 'Project Type', value: 'System Integration' },
  { label: 'Original System', value: 'Johnson Controls N2' },
  { label: 'New System', value: 'Automated Logic WebCTRL' },
  { label: 'Equipment Integrated', value: '63 VAVs, 4 RTUs, 3 AC Units' },
  { label: 'Key Benefit', value: 'Preserved all existing N2 controllers, enabling a gradual upgrade path' },
];

const strategies = [
  'Legacy Protocol Integration (N2)',
  'Investment Preservation',
  'Modern Web Interface',
  'Thermographic Floor Plans',
  'Time-Lapse™ System Replay',
  'Phased Upgrade Path',
];

export default function CaseStudyPage() {
  const heroImage = getPlaceholderImages().find((p) => p.id === 'johnson-controls-integration');

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
                8600 Building: Johnson Controls N2 Integration
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Giving a modern web interface and new life to a legacy Johnson N2 system.
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
                    The owner of the 8600 building was looking to replace their aging Johnson Controls N2 system, assuming a full hardware replacement was necessary. Mechanical Air Concepts provided an alternative strategy that preserved their entire investment in existing N2 controllers while delivering the modern features of a new system.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    The Challenge: Obsolete but Functional Hardware
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Johnson N2 protocol is a legacy, proprietary communication standard. While the controllers were still functional, the front-end was outdated and lacked modern features for efficient building management. The owner wanted to avoid the high cost of replacing dozens of controllers and units throughout the building.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">The Solution: Integration, Not Replacement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mechanical Air Concepts provided a solution to integrate the entire Johnson N2 system—comprising 63 VAVs, 4 RTUs, and 3 AC units—into the Automated Logic WebCTRL platform. All existing hardware in the AC equipment was maintained. This approach instantly provided a modern, web-based interface with advanced WebCTRL features like color thermographic floor plans and the Time-Lapse™ tool, which allows operators to replay system data like a video to diagnose issues. Most importantly, it gave the owner the flexibility to upgrade their N2 controllers to a modern BACnet standard gradually, as their budget allows, without any upfront pressure.
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
