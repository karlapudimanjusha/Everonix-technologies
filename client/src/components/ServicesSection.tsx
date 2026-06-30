import { Card } from '@/components/ui/card';
import { Users, Code, Zap, BookOpen, Search, ShieldCheck, Briefcase, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const services = [
  {
    title: 'IT Staffing',
    description: 'Find skilled technology and software engineering professionals across all domains.',
    icon: Code,
    color: 'text-accent',
    slug: 'it-staffing',
  },
  {
    title: 'Non-IT Staffing',
    description: 'Reliable, vetted workforce solutions for operations, manufacturing, and administration.',
    icon: Users,
    color: 'text-accent',
    slug: 'non-it-staffing',
  },
  {
    title: 'Contract Staffing',
    description: 'Flexible hiring models to cover project scaling, seasonal demands, or interim gaps.',
    icon: Briefcase,
    color: 'text-accent',
    slug: 'contract-staffing',
  },
  {
    title: 'Permanent Recruitment',
    description: 'Direct-hire sourcing to secure long-term talent aligned with your engineering standard.',
    icon: Award,
    color: 'text-accent',
    slug: 'permanent-placement',
  },
  {
    title: 'Executive Search',
    description: 'Leadership headhunting for critical C-suite, board, and director levels.',
    icon: Search,
    color: 'text-accent',
    slug: 'executive-search',
  },
  {
    title: 'RPO (Recruitment Process Outsourcing)',
    description: 'End-to-end recruitment process optimization to increase speed and reduce cost per hire.',
    icon: Zap,
    color: 'text-accent',
    slug: 'rpo',
  },
  {
    title: 'MSP (Managed Staffing Programs)',
    description: 'Unified management of contingent labor networks, vendor compliance, and consolidated billing.',
    icon: ShieldCheck,
    color: 'text-accent',
    slug: 'msp',
  },
  {
    title: 'Payroll & HR Advisory',
    description: 'Third-party payroll administration, contract compliance audits, and HR consultancies.',
    icon: BookOpen,
    color: 'text-accent',
    slug: 'payroll-compliance',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background border-t border-border/40">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
            Our Staffing Solutions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Resource Coverages
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From flexible staff augmentation to outsourced talent pipelines, we design recruiting programs built for speed and quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="h-full"
              >
                <Link href={`/services/${service.slug}`}>
                  <Card
                    className="group p-6 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 cursor-pointer h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className={`${service.color} mb-4 transition-transform group-hover:scale-110`}>
                        <IconComponent size={32} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-bold text-accent group-hover:underline">
                      <span>Explore Service</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
