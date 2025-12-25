'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

const generalVideos = [
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
  {
    id: 'jtSPY5lTM7c',
    title: 'Automated Logic WebCTRL - Time-Lapse™',
    description:
      'Discover the power of the Time-Lapse feature for analyzing building performance.',
  },
  {
    id: 'v0yiBvCdGRM',
    title: 'Automated Logic WebCTRL - Fault Detection & Diagnostics',
    description: 'Learn about Fault Detection and Diagnostics (FDD) in WebCTRL.',
  },
];

const healthcareVideos = [
    {
    id: 'a5UGOqSUXrQ',
    title: 'Automated Logic in Healthcare',
    description: 'Learn how Automated Logic provides solutions for the healthcare industry.',
  },
  {
    id: 'dSTke7OXVPs',
    title: 'Automated Logic WebCTRL - Environmental Index',
    description: 'Understand how the Environmental Index feature helps you monitor and maintain building comfort and efficiency.',
  },
  {
    id: 'DwWkY7xZz2A',
    title: 'Automated Logic WebCTRL - Scheduling',
    description:
      'Learn how to manage schedules for your building systems in WebCTRL.',
  },
]

const VideoCard = ({ video }: { video: { id: string; title: string; description: string } }) => (
  <div
    className="flex flex-col bg-card rounded-lg overflow-hidden shadow-lg"
  >
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
      <h3 className="text-xl font-semibold mb-2 text-primary-foreground">
        {video.title}
      </h3>
      <p className="text-muted-foreground">
        {video.description}
      </p>
    </div>
  </div>
);

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
                Explore these videos from Automated Logic to learn more about
                their powerful building automation solutions.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground mb-8">Healthcare Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {healthcareVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground mb-8">General Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {generalVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
