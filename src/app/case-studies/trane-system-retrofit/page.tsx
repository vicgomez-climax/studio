
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
  { label: 'Project Type', value: 'Retrofit' },
  { label: 'Installation Type', value: 'Condenser Water System, Trane System Integration, Front End Development Using Niagara 4' },
  { label: 'Area', value: '80,000 SqFT (Three 4-story buildings)' },
  { label: 'Equipment Installed', value: 'LGR100 / Automated Logic Webctrl, Tridium Niagara 4, Trane Comm4 Drivers' },
  { label: 'Integration', value: 'BACnet® /Proprietary Trane Comm4' },
  { label: 'Network', value: 'EIA-485, BACnet' },
  { label: 'Controllers/Equipment Integrated', value: 'Trane VAV 4 UCM, Commercial Self Contained (CSC), Building Control Unit (BCU)' },
];

const strategies = [
  'Supply Air Optimization',
  'Static Pressure Optimization',
  'Morning Cool Down',
  'Alarming',
  'Trending',
  'Reporting',
];

export default function CaseStudyPage() {
  const heroImage = getPlaceholderImages().find((p) => p.id === 'case-study-4');

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
                Westside Plaza
              </h1>
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
                    Mechanical Air Concepts, teamed up with Copasetic mechanical to perform this retrofit of the existing Trane control system to a new state of the art Automated Logic WebCtrl System across three four-story buildings at Westside Plaza.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Challenges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                   The existing Trane system was obsolete, with steadily climbing prices for parts. The client wanted a modern web-based solution that would free them from being locked into a single-source vendor for service and parts, but a full-scale replacement was not immediately feasible.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Solution: A Phased Approach to Modernization
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Initially, Mechanical Air Concepts provided a Tridium-based solution. This first phase integrated the existing Trane VAV boxes and commercial self-contained units using a Trane Comm4 driver, successfully replacing obsolete panels and delivering immediate value. The new condenser water system controller was retrofit with a programmable BACnet controller, bringing the system onto a modern platform.
                  </p>
                   <p className="text-muted-foreground leading-relaxed mt-4">
                    A few years later, after seeing the power and forward-thinking direction of our Automated Logic solutions, the client chose to take the next step. They asked us to perform a full migration, unifying all three towers under a single, powerful Automated Logic WebCTRL front-end.
                  </p>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Conclusion
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This project highlights the trust our clients place in our long-term vision. The final, unified WebCTRL system provides the client with ultimate flexibility, allowing them to add new BACnet VAV boxes from any vendor alongside their existing Trane controllers. The building is no longer locked into a single-source solution, and the engineering team can now manage the entire property through a single, intuitive HTML5 interface, accessible from any device. This phased approach allowed the client to modernize at their own pace while achieving a truly open and future-proof system.
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
