import Image from 'next/image';

export function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-800">
            AUTHORIZED DEALER
          </h2>
          <Image
            src="/images/Authorized AutomatedLogic-1.png"
            alt="Authorized Automated Logic and Carrier Control Expert"
            width={800}
            height={150}
            className="w-auto h-auto max-w-full"
          />
          <p className="text-base text-gray-700">
            Authorized Dealer of Automated Logic and Carrier Control Expert
            serving South Florida
          </p>
        </div>
      </div>
    </section>
  );
}
