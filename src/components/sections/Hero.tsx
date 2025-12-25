import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getPlaceholderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = getPlaceholderImages().find((p) => p.id === 'hero-background');

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-card text-primary-foreground overflow-hidden">
        {heroImage && (
            <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
            />
        )}
       <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            We Put Your Building In Cruise Control.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Finally, a building automation partner that works to untrap you from proprietary systems and maximize your existing investment.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="#methodology">Our Methodology</Link>
            </Button>
            <Button asChild size="lg" variant="accent">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
      </div>
    </section>
  );
}
