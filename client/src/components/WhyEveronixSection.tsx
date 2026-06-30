import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { WaveDivider } from './SectionDivider';

const differentiators = [
  {
    title: 'Strategic Partnership',
    description:
      'We act as an extension of your team, deeply understanding your business goals and aligning our services accordingly.',
  },
  {
    title: 'Proven Track Record',
    description:
      'With 15+ years in the industry, we have successfully transformed enterprises and launched careers.',
  },
  {
    title: 'Vetted Talent Network',
    description:
      'Our rigorous screening process ensures only the best professionals are matched with your organization.',
  },
  {
    title: 'Innovative Solutions',
    description:
      'We stay ahead of technology trends, delivering cutting-edge solutions that give you competitive advantage.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From initial consultation to implementation and ongoing support, we are with you every step of the way.',
  },
  {
    title: 'Measurable Results',
    description:
      'We focus on delivering tangible outcomes and ROI, with transparent metrics and regular reporting.',
  },
];

export default function WhyEveronixSection() {
  return (
    <section id="why-everonix" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 bg-dot-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We combine deep industry expertise with a commitment to your success.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-0 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Stats Section */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm border-l-4 border-accent hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</p>
            <p className="text-sm md:text-base text-foreground/70">Client Satisfaction</p>
          </div>
          <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm border-l-4 border-accent hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</p>
            <p className="text-sm md:text-base text-foreground/70">Placements Made</p>
          </div>
          <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm border-l-4 border-accent hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</p>
            <p className="text-sm md:text-base text-foreground/70">Enterprise Clients</p>
          </div>
          <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm border-l-4 border-accent hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</p>
            <p className="text-sm md:text-base text-foreground/70">Support Available</p>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative mt-16 md:mt-24">
        <WaveDivider color="#ffffff" />
      </div>
    </section>
  );
}
