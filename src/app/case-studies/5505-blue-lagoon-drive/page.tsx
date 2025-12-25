import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const webCtrlFeatures = [
  'Optimum start',
  'Thermal graphics',
  'Comfort index',
  'Email alarming',
  'Built in reporting',
  'Unlimited user logins and advanced security',
  'Elimination of pneumatics in tenant space and adoption of DDC open BACnet controls',
  'Complete graphics, engineering and system software fully owned by owner',
];

const projectSpecs = [
  { label: 'Project Type', value: 'Retrofit/Vendor Change/System Integration' },
  { label: 'Installation Type', value: 'Energy Management Routers, Trane Integration' },
  { label: 'Software Installed', value: 'WebCTRL Premium' },
  { label: 'Network', value: 'BACnet/IP, Arcnet, MSTP, BACnet/Ethernet' },
  { label: 'Integration', value: 'Trane Tracer Mapping and Integration' },
  { label: 'Total System Points', value: '8,000 points' },
];

const strategies = [
  'Static Pressure Optimization',
  'Morning Cool Down',
  'Alarming',
  'Trending',
  'Reporting',
  'VAV Dashboard',
  'Environmental Index',
  'FDD',
];

export default function CaseStudyPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'case-study-1');

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
                Pneumatic To Modern
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                5505 Blue Lagoon Drive, formerly the Burger King World Headquarters
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4 text-accent">
                    Project Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    5505 Blue Lagoon Drive is a prominent building facing Miami International Airport, built in the late 90s with outdated pneumatic technology. Formerly occupied by Burger King Corporation, the building required modernization to attract new tenants seeking modern interiors and advanced technologies. Colliers International engaged Mechanical Air Concepts (MAC) to upgrade the unsupported Trane Tracer Summit system, which combined DDC and Electro-Pneumatic Controls. MAC's winning solution involved retro-commissioning the old pneumatic system for smoke evacuation while modernizing the VAV, Unit, and Condenser Water System controls to a fully native BACnet DDC System from Automated Logic.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Challenges & Requirements
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Colliers required a web-based building automation solution that would free them from a single-source vendor for parts and service. The key challenge was preserving the essential pneumatic smoke evacuation system while upgrading the tenant-facing controls. Upon inspection, MAC discovered several failed pneumatic devices and legacy Trane equipment requiring proprietary communication (COMM4) integration.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    MAC engineered and installed Automated Logic’s WebCTRL software, successfully integrating with the legacy Trane equipment. The pneumatic systems were repaired, and new DDC-controlled VAV boxes with spring-return actuators were installed, preserving the critical smoke evacuation interlocks. The entire system was balanced and retro-commissioned, providing the engineering team with the flexibility to modify heat loads for new tenants. The new system modernized the interface with new AHU and VAV graphics, dynamic data visualization, and interactive floorplans with thermal graphics and time-lapse playback.
                  </p>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    WebCTRL System Benefits
                  </h3>
                   <ul className="space-y-3">
                    {webCtrlFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                        <p className="font-semibold text-primary-foreground">{spec.label}</p>
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
