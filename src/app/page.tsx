import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Footer } from '@/components/sections/Footer';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AboutUs } from '@/components/sections/AboutUs';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <CaseStudies />
        </AnimatedSection>
        <AnimatedSection>
          <AboutUs />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
