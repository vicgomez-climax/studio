import Image from 'next/image';
import { getPlaceholderImages } from '@/lib/placeholder-images';

export function AboutUs() {
  const aboutImage = getPlaceholderImages().find((p) => p.id === 'hero-background');
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
            {aboutImage && (
            <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover"
            />
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Global Engineering Speed. Local Expertise.</h3>
                 <p className="text-sm text-white/80 mt-2">Our Miami HQ and Monterrey, Mexico Design Center enable 24-hour engineering cycles, bridging the gap between mechanical physics and digital controls.</p>
            </div>
          </div>
          <div className="space-y-6 order-first lg:order-last">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Journey to Expertise
            </h2>
            <p className="text-muted-foreground leading-relaxed">
             Founded in 2002, MAConcepts is a specialized, self-performing BAS Authority. As a privately held and owner-operated firm, we provide direct accountability and long-term stability for our mission-critical clients.
            </p>
             <p className="text-muted-foreground leading-relaxed">
                Our dedicated Design Center in Monterrey, Mexico allows for 24-hour engineering cycles, accelerating project timelines and ensuring meticulous quality control. We are specialists in DNV/AHCA/ISO 9001 environments, where precision and compliance are paramount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
