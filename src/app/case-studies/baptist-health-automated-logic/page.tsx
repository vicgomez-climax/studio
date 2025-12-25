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
  { label: 'Project Type', value: 'Vendor Transition / System Support' },
  { label: 'Building Count', value: '35 Buildings' },
  { label: 'Mission Critical Facilities', value: '17' },
  { label: 'System', value: 'Automated Logic WebCTRL' },
  { label: 'Key Benefit', value: 'Vendor independence, investment preservation' },
];

const strategies = [
  'Standardized Open Protocol',
  'Seamless Vendor Transition',
  '24/7 Mission-Critical Monitoring',
  'Long-Term Hardware Compatibility',
  'Unlimited Multi-User Web Access',
  'Investment Preservation',
];

export default function CaseStudyPage() {
  const heroImage = getPlaceholderImages().find((p) => p.id === 'baptist-health');

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
                Baptist Health: Freedom Through Open Systems
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Demonstrating the power of vendor independence with Automated Logic.
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
                    In 2020, Baptist Health decided to change their building automation service vendor. Because their campus of 35 buildings ran on an open-protocol Automated Logic system, they were able to make the change without difficulty, preserving their entire building automation system investment and avoiding the costly "rip-and-replace" scenario common with proprietary systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    The Challenge: Ensuring a Smooth Transition
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The primary challenge was not technical, but operational: to ensure a seamless handover of service and support for a large, mission-critical portfolio of healthcare facilities. With 17 mission-critical buildings monitored 24/7, there was no room for error or downtime. The owner needed assurance that a new vendor could step in and provide support without any learning curve or interruption of service.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">The Solution: The Power of a Standardized System</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Because the Automated Logic system is standardized and non-proprietary, Mechanical Air Concepts was able to continue supporting the entire campus without any additional training. The system, running an older version of WebCTRL with controllers dating from 2006 to 2022, continued to function flawlessly under a single user interface. This allowed the owner's team and MAC's on-call engineers to maintain constant monitoring of critical conditions and dispatch teams immediately.
                  </p>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Conclusion
                  </h3>
                   <p className="text-muted-foreground leading-relaxed">
                    This case study is a powerful testament to our core philosophy. By initially choosing an open system, Baptist Health empowered themselves. They were not locked to a single vendor and could choose the service provider that offered the best value. This project highlights the long-term financial and operational benefits of untrapping the owner from proprietary ecosystems.
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
                    <CardTitle>Key Principles Demonstrated</CardTitle>
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
