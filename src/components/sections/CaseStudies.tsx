import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'Lennar HQ: Trane & Pneumatic Retrofit',
    description:
      'Upgraded a hybrid Trane proprietary system with pneumatic VAVs to a modern WebCTRL front-end, preserving the smoke evacuation system and maximizing the owner’s existing investment.',
    image: PlaceHolderImages.find((p) => p.id === 'case-study-1'),
    link: '/case-studies/5505-blue-lagoon-drive',
  },
  {
    title: '355 Alhambra: Siemens System Rescue',
    description:
      'Rescued a client from a forced, full-system upgrade by integrating their Siemens Insight system into WebCTRL, preserving 95% of their hardware investment while providing a modern interface.',
    image: PlaceHolderImages.find((p) => p.id === 'siemens-integration'),
    link: '/case-studies/355-alhambra-siemens-retrofit',
  },
  {
    title: 'Florida Memorial University: Campus-Wide Integration',
    description:
      'Unified 35 buildings running Siemens Apogee into a single, web-accessible WebCTRL interface, eliminating single-user limitations and providing a comprehensive campus-wide view.',
    image: PlaceHolderImages.find((p) => p.id === 'case-study-2'),
    link: '/case-studies/florida-memorial-university-siemens-integration',
  },
  {
    title: '8600 Building: Johnson Controls N2 Integration',
    description:
      'Preserved the owner’s investment in Johnson Controls N2 hardware by integrating 63 VAVs and multiple RTUs into WebCTRL, enabling a gradual upgrade path and modern features.',
    image: PlaceHolderImages.find((p) => p.id === 'johnson-controls-integration'),
    link: '/case-studies/8600-building-johnson-n2-integration',
  },
   {
    title: 'Baptist Health: Vendor Freedom with Automated Logic',
    description: 'When the owner decided to change vendors, their Automated Logic open system allowed a seamless transition, preserving their entire investment and ensuring continuous support without a learning curve.',
    image: PlaceHolderImages.find((p) => p.id === 'baptist-health'),
    link: '/case-studies/baptist-health-automated-logic',
  },
  {
    title: 'Trane System Retrofit',
    description:
      'MAC teamed up with Copasetic Mechanical to retrofit an obsolete Trane control system to a new state-of-the-art Automated Logic WebCtrl System, overcoming proprietary limitations.',
    image: PlaceHolderImages.find((p) => p.id === 'case-study-4'),
    link: '/case-studies/trane-system-retrofit',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Proven Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how we solve complex challenges for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-1"
            >
              {study.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={study.image.imageUrl}
                    alt={study.image.description}
                    data-ai-hint={study.image.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold mb-2">
                   <Link href={study.link} className="hover:underline text-primary">
                    {study.title}
                  </Link>
                </h3>
                <p className="flex-grow text-muted-foreground mb-4">
                  {study.description}
                </p>
                <div className="mt-auto">
                   <Button asChild variant="accent">
                    <Link href={study.link}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
