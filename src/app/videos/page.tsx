import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

const videos = [
  {
    id: 'e-OzlagIaMQ',
    title: 'Automated Logic WebCTRL',
    description: 'A brief overview of the WebCTRL building automation system.',
  },
  {
    id: '_ZRiQYPIVQM',
    title: 'Automated Logic WebCTRL - Equipment',
    description: 'Explore the equipment views and capabilities within WebCTRL.',
  },
  // You can add more videos here
];

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
                Video Resources
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore these videos from Automated Logic to learn more about their powerful building automation solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="flex flex-col bg-card rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary-foreground">{video.title}</h3>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
