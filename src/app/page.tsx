import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { AuthorityCycle } from '@/components/sections/AuthorityCycle';
import { Services } from '@/components/sections/Services';
import { Footer } from '@/components/sections/Footer';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection>
          <AuthorityCycle />
        </AnimatedSection>
        <AnimatedSection>
          <Services />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
