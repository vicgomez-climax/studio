
export function VideoSection() {
  return (
    <section id="video" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            See Our Work in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch how we transform complex building systems into smart, efficient environments.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/e-OzlagIaMQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
