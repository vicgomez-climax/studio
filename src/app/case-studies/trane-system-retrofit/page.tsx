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
  const heroImage = PlaceHolderImages.find((p) => p.id === 'case-study-4');

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
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Mechanical Air Concepts & Copasetic Mechanical
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
                    Mechanical Air Concepts, teamed up with Copasetic mechanical to perform this retrofit of the existing Trane control system to a new state of the art Automated Logic WebCtrl System across three four-story buildings at Westside Plaza.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Challenges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                   The existing Trane system is obsolete and prices for parts have been climbing steadily. In addition, some features wanted by the customer could not be achieved by the system.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Customer Desires
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The customer asked for a Web Solution and also the ability to buy parts and services from multiple sources if desired. The existing system was proprietary and single source which meant that the customer was locked when it came down to service and parts.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mechanical Air Concepts worked with Copasetic mechanical in analyzing the existing system and replacing obsolete panels. For example the condenser water system controller was retrofit with a programmable BACnet controller. The existing VAV boxes were integrated into the Tridium Platform and consecuently to ALC Webctrl system via a Trane Comm4 driver. The commercial self contained units were tied into the system as well with the driver.
                  </p>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Conclusion
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The current system with the Webctrl front end allows the customer the flexibility to add VAV boxes using the old Trane controllers or new BACnet vav boxes from any vendor. This flexibility is a major advantage as the building is no longer locked in to a single source solution. The owner is also able to look at all of the information in the system via phone via the HTML5 graphics provided.
                  </p>
                   <p className="text-muted-foreground leading-relaxed">
                    Since the original work was performed, we have now retrofitted the three buildings using the Automated Logic front-end and have united all buildings that used to be Trane into one unified front-end from ALC.
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
