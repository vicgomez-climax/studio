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
  { label: 'Project Type', value: 'Retrofit / System Integration' },
  { label: 'Original System', value: 'Siemens Insight' },
  { label: 'New System', value: 'Automated Logic WebCTRL' },
  { label: 'Integration Method', value: 'Phased transition preserving existing field controllers' },
  { label: 'Key Benefit', value: 'Preserved 95% of hardware investment' },
];

const strategies = [
  'Vendor Decoupling',
  'Phased Modernization',
  'Rich Graphical User Interface',
  'Investment Preservation',
  'Enhanced Operational Visibility',
];

export default function CaseStudyPage() {
  const heroImage = getPlaceholderImages().find((p) => p.id === 'siemens-integration');

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
                355 Alhambra: Siemens System Rescue
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Breaking the cycle of forced upgrades by integrating a legacy Siemens system with WebCTRL.
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
                    The owner of 355 Alhambra Circle was facing a costly, full-system upgrade from their existing Siemens Insight system to Desigo, under the impression that it was their only option. Mechanical Air Concepts presented an alternative solution that focused on preserving their current investment while delivering the modern features they needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    The Challenge: A Forced Upgrade
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The primary challenge was the client's belief that they were trapped in a proprietary ecosystem, requiring them to discard perfectly functional hardware. They needed a path to modernize their building automation system without a massive capital outlay and to free themselves from vendor lock-in for future service and expansions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">The Solution: Phased Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Instead of a "rip and replace" approach, MAC engineered a phased transition. We integrated the existing Siemens field controllers with a new Automated Logic WebCTRL front-end. This strategy immediately provided a rich, consistent graphical user interface and powerful web-based tools while preserving 95% of the owner's original hardware investment. This change unlocked the owner from a proprietary system, empowering them to seek competitive value and hold MAC accountable for delivering results.
                  </p>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Conclusion
                  </h3>
                   <p className="text-muted-foreground leading-relaxed">
                    This project demonstrates our core philosophy of untrapping the owner. By prioritizing integration over replacement, the client avoided a significant, unnecessary expense and gained a more powerful, flexible, and future-proof building automation system. They are no longer tied to a single vendor and can make smarter, incremental upgrades as their budget allows.
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
