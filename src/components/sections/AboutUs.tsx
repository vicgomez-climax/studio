import Image from 'next/image';
import { getPlaceholderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

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
              Founded in 2002, MAConcepts is a privately held, owner-operated firm—not a franchise or PE-backed conglomerate. We have evolved from a mechanical contractor into a premier BAS Integrator, bridging the critical gap between mechanical physics and digital controls.
            </p>
            <p className="text-muted-foreground leading-relaxed">
                This dual-expertise is our core strength. We understand how a change in code affects a valve, and how a stuck valve affects the code. This holistic view allows us to solve complex problems that pure-play controls integrators or mechanical contractors often miss.
            </p>
             <p className="text-muted-foreground leading-relaxed">
                We specialize in JCAHO/AHCA compliant environments for healthcare and other mission-critical infrastructure where failure is not an option.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
