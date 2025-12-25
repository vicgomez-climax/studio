import Image from 'next/image';
import { getPlaceholderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { MapPin, Award, Wrench } from 'lucide-react';

const technologies = [
  'Reliable Controls',
  'Tridium Niagara',
  'Carrier View',
  'Automated Logic',
];
const certifications = [
  'NEBB Testing & Balancing',
  'NEBB Commissioning',
  'FL Mechanical Contractor',
  'Low Voltage Electrical Contractor',
];

export function AboutUs() {
  const aboutImage = getPlaceholderImages().find((p) => p.id === 'hero-background');
  return (
    <section id="about-us" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Journey to Expertise
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2002 as a residential HVAC contractor, Mechanical Air Concepts embarked on a significant transformation in 2015, pivoting to become a specialized controls contractor. This evolution was driven by a passion for building performance and a commitment to mastering the most sophisticated technologies in the industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey has given us hands-on experience with a diverse range of platforms, including Reliable Controls, Tridium Niagara, Carrier View, and ultimately, Automated Logic. Today, we hold multiple NEBB certifications for Testing, Adjusting, & Balancing (TAB) and Commissioning (Cx), and are licensed Mechanical and Low Voltage Electrical contractors in the state of Florida. With offices in Miami and Monterrey, Mexico, we bring a wealth of experience and a broad perspective to every project.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Our Expertise Includes</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
             <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Certifications & Licenses</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="secondary">{cert}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Mechanical Air Concepts</h3>
                <div className="flex items-center mt-2">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    <span>Miami, USA & Monterrey, Mexico</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
