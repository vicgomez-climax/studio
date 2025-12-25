import Image from 'next/image';

export function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Authorized Dealer
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/Authorized dealer.png"
            alt="Automated Logic and Carrier Authorized Dealer"
            width={500}
            height={100}
            className="h-auto w-auto max-w-sm md:max-w-md"
          />
        </div>
        <div className="text-center mt-8">
          <p className="text-base text-muted-foreground">
            Authorized Dealer of Automated Logic and Carrier Control Expert
            serving South Florida
          </p>
        </div>
      </div>
    </section>
  );
}
