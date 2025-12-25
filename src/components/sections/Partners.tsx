import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Put Your Building In{' '}
              <span className="text-green-600">Cruise Control</span> - It's{' '}
              <span className="text-green-600">Easier</span> Than You Think
            </h2>
            <p className="text-lg text-gray-700">
              Our industry-leading building automation system grants you
              real-time control and visibility of all your equipment, systems
              and facilities. Accessible from anywhere around the world, WebCTRL
              simplifies the process of managing buildings.
            </p>
            <p className="text-lg text-gray-700">
              The WebCTRL® building automation system by Automated Logic is
              designed to maximize energy savings while offering a range of
              powerful analytics features that put your facility on autopilot.
            </p>
            <p className="text-lg text-gray-700">
              At Mechanical Air Concepts, we integrate all of these features
              during installation, so that your building can reach its full
              potential in terms of intelligence and efficiency.
            </p>
            <div>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                SCHEDULE A DEMO
              </Button>
            </div>
          </div>

          {/* Right Column: Image Content */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-semibold tracking-widest uppercase text-white mb-4">
                Authorized Dealer of
              </p>
              <div className="relative h-20 w-64">
                <Image
                  src="/images/AutomatedLogic_logo_AD_wr_300.png"
                  alt="Automated Logic Authorized Dealer"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/webctrltrio.png"
                alt="WebCTRL interface mockups showing dashboards and analytics"
                fill
                className="object-cover"
                data-ai-hint="dashboard analytics"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
