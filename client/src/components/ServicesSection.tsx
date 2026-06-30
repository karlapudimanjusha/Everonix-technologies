import { Card } from '@/components/ui/card';
import { Users, Code, Zap, BookOpen } from 'lucide-react';
import { WaveDivider } from './SectionDivider';

const services = [
  {
    id: 1,
    title: 'IT Staffing & Placement',
    description:
      'Connect with vetted IT professionals across all domains. From software engineers to cloud architects, we match talent with opportunity.',
    icon: Users,
    color: 'text-accent',
  },
  {
    id: 2,
    title: 'Software Development',
    description:
      'Custom solutions built for scale. Our expert developers deliver robust, innovative software that drives business growth.',
    icon: Code,
    color: 'text-primary',
  },
  {
    id: 3,
    title: 'Digital Transformation',
    description:
      'Modernize your systems and processes. We guide enterprises through technology adoption and organizational change.',
    icon: Zap,
    color: 'text-secondary',
  },
  {
    id: 4,
    title: 'Training & Academy',
    description:
      'Upskill your workforce. Comprehensive programs in emerging technologies to keep your team competitive.',
    icon: BookOpen,
    color: 'text-accent',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From talent acquisition to technology implementation, we provide end-to-end services designed to accelerate your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="group p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`${service.color} mb-4 transition-transform group-hover:scale-110`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative mt-16 md:mt-24">
        <WaveDivider color="#f9fafb" />
      </div>
    </section>
  );
}
