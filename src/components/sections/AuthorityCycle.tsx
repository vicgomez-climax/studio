
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Building, Factory, Scale, ClipboardCheck, History } from 'lucide-react';

const methodologies = [
  {
    value: 'item-1',
    title: 'Methodology for New Construction',
    icon: <Building className="h-6 w-6 mr-4 text-accent" />,
    content:
      'Our approach for new construction centers on proactive engagement from the design phase forward. By embedding open-protocol BACnet standards into the project specifications, we ensure you own your system from day one. We collaborate with architects and engineers to review designs, guaranteeing that the building automation system is optimized for performance, flexibility, and long-term value, preventing vendor lock-in before the first wall is even built.',
  },
  {
    value: 'item-2',
    title: 'Methodology for Existing Buildings',
    icon: <Factory className="h-6 w-6 mr-4 text-accent" />,
    content:
      "For existing buildings, our first step is a data-driven assessment to understand the current system's capabilities and limitations. We specialize in integrating with legacy and proprietary systems, creating a phased modernization plan that preserves your existing hardware investment. Our goal is to 'untrap' you from obsolete technology, providing a modern, unified WebCTRL interface that enhances control and visibility without the need for a costly full-scale replacement.",
  },
  {
    value: 'item-3',
    title: 'Methodology for Testing & Balancing (TAB)',
    icon: <Scale className="h-6 w-6 mr-4 text-accent" />,
    content:
      'As a NEBB-certified firm, we follow a rigorous, repeatable process for Testing, Adjusting, and Balancing. We use calibrated instrumentation to precisely measure and adjust air and hydronic systems to meet design specifications. This meticulous, data-driven process optimizes comfort, improves indoor air quality, and ensures energy efficiency by eliminating waste and guaranteeing that your mechanical systems perform as intended.',
  },
  {
    value: 'item-4',
    title: 'Methodology for Commissioning (Cx)',
    icon: <ClipboardCheck className="h-6 w-6 mr-4 text-accent" />,
    content:
      "Our NEBB-certified commissioning process provides independent, third-party verification that all building systems perform according to the Owner's Project Requirements (OPR). We conduct comprehensive reviews of design documents, verify proper installation, and execute functional performance tests on mechanical, electrical, and control systems. This ensures systems operate correctly, reduces operational costs, and provides a baseline for future performance measurement.",
  },
  {
    value: 'item-5',
    title: 'Methodology for Retro-Commissioning (RCx)',
    icon: <History className="h-6 w-6 mr-4 text-accent" />,
    content:
      'Our NEBB-certified Retro-Commissioning (RCx) process is a systematic investigation to identify and resolve operational issues in existing buildings. We conduct a deep forensic analysis of your current systems, using data logging and functional testing to uncover hidden inefficiencies. Following the implementation of corrective measures, we leave you with a customized performance dashboard and a clear benchmarking framework. This empowers your team to continuously monitor, measure, and maintain optimal performance, delivering sustained energy savings and lasting value.',
  },
];

export function AuthorityCycle() {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Methodology
          </h2>
          <p className="mt-4 text-lg font-semibold text-accent/90">
            If You Can't Measure It, You Can't Control It
          </p>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            Our NEBB-certified methodologies ensure measurable performance and continuous optimization across the entire building lifecycle. We provide tailored strategies for every scenario, guaranteeing results you can see and measure.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {methodologies.map((item) => (
              <AccordionItem value={item.value} key={item.value}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center">
                    {item.icon}
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-14">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
