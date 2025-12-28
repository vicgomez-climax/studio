import Image from "next/image"
import { getPlaceholderImages } from "@/lib/placeholder-images"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CaseStudies() {
  const placeholderImages = getPlaceholderImages()

  const caseStudies = [
    {
      title: "Baptist Health: Enterprise Standardization",
      description:
        "Serving over 67 critical care facilities and medical office buildings. We executed a system-wide migration to Automated Logic, ensuring DNV readiness and unified command-and-control across the entire portfolio.",
      image: placeholderImages.find((p) => p.id === "baptist-health"),
      link: "/case-studies/baptist-health-automated-logic",
    },
    {
      title: "Government Authority: M-DCPS & Broward County",
      description:
        "Multi-year prime holder for Miami-Dade County Public Schools and Broward County Government. Trusted to maintain the environmental health of South Florida's largest public infrastructure portfolios.",
      image: placeholderImages.find((p) => p.id === "case-study-2"),
      link: "/case-studies/florida-memorial-university-siemens-integration",
    },
    {
      title: "355 Alhambra: Siemens System Rescue",
      description:
        "Rescued a client from a forced, full-system upgrade by integrating their Siemens Insight system into WebCTRL, preserving 95% of their hardware investment while providing a modern interface.",
      image: placeholderImages.find((p) => p.id === "siemens-integration"),
      link: "/case-studies/355-alhambra-siemens-retrofit",
    },
  ]

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Proven Results & Trusted Partners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just sell controls. We solve complex integration challenges to maximize the value of your building and untrap you from proprietary systems.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {study.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={study.image.imageUrl}
                    alt={study.image.description}
                    data-ai-hint={study.image.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  <Link href={study.link} className="hover:text-accent transition-colors">
                    {study.title}
                  </Link>
                </h3>
                <p className="flex-grow text-muted-foreground mb-4 text-sm">
                  {study.description}
                </p>
                <div className="mt-auto">
                  <Link href={study.link} className="text-sm font-semibold text-accent hover:underline flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
