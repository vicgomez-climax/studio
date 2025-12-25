import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'Pneumatic to Modern: 5505 Blue Lagoon Drive',
    description:
      'Upgraded an outdated Trane pneumatic system to a modern, native BACnet DDC system from Automated Logic, preserving critical smoke evacuation interlocks while providing tenants with modern controls.',
    image: PlaceHolderImages.find((p) => p.id === 'case-study-1'),
    link: '/case-studies/5505-blue-lagoon-drive',
  },
  {
    title: 'Trane System Retrofit',
    description:
      'MAC teamed up with Copasetic Mechanical to retrofit an obsolete Trane control system to a new state-of-the-art Automated Logic WebCtrl System, overcoming proprietary limitations.',
    image: PlaceHolderImages.find((p) => p.id === 'case-study-4'),
    link: '/case-studies/trane-system-retrofit',
  },
  {
    title: 'University Campus-Wide Control Integration',
    description:
      'Integrated disparate building automation systems across a 30-building campus into a single WebCTRL interface, providing centralized control and saving thousands in annual operational costs.',
    image: PlaceHolderImages.find((p) => p.id === 'case-study-2'),
    link: '#',
  },
  {
    title: 'Commercial High-Rise Legacy System Rescue',
    description:
      'Rescued a proprietary JCI system in a 40-story office tower, migrating to an open-protocol system without major downtime, empowering the facility team with greater control and flexibility.',
    image: PlaceHolderImages.find((p) => p.id === 'case-study-3'),
    link: '#',
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
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
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
