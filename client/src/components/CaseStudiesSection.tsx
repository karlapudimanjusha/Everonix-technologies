import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export const caseStudies = [
  {
    id: 1,
    title: 'Enterprise Digital Transformation',
    client: 'Leading Global Asset Management Group',
    category: 'Digital Transformation',
    challenge:
      'Legacy systems hindering growth and innovation. The client needed to modernize their infrastructure while maintaining operational continuity.',
    solution:
      'We architected a phased migration strategy, deployed cloud infrastructure, and trained 200+ employees. Result: 40% reduction in operational costs.',
    metrics: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Time to Market', value: '-60%' },
      { label: 'Team Upskilled', value: '200+' },
    ],
    color: 'from-accent/10 to-accent/5',
  },
  {
    id: 2,
    title: 'Rapid Talent Scaling',
    client: 'Pioneering AI SaaS Development Platform',
    category: 'IT Staffing',
    challenge:
      'Needed to scale engineering team from 10 to 50 people in 6 months without compromising quality or culture fit.',
    solution:
      'Our vetted talent network and rigorous screening process enabled us to place 40 engineers who seamlessly integrated with the existing team.',
    metrics: [
      { label: 'Placements', value: '40' },
      { label: 'Time to Fill', value: '3 weeks avg' },
      { label: 'Retention Rate', value: '95%' },
    ],
    color: 'from-muted/30 to-muted/10',
  },
  {
    id: 3,
    title: 'Custom Software Development',
    client: 'Advanced Biotech Healthcare Network',
    category: 'Software Development',
    challenge:
      'Complex requirements for a HIPAA-compliant patient management system with real-time analytics.',
    solution:
      'Our development team delivered a secure, scalable platform with advanced analytics. The system now serves 500,000+ patients.',
    metrics: [
      { label: 'Users Served', value: '500K+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Response Time', value: '<100ms' },
    ],
    color: 'from-secondary/10 to-secondary/5',
  },
];

export default function CaseStudiesSection() {
  const [, setLocation] = useLocation();

  const handleStudyClick = (id: number) => {
    setLocation(`/case-studies/${id}`);
  };

  return (
    <section id="case-studies" className="pt-10 pb-12 md:pt-16 md:pb-16 bg-background border-t border-border/40">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See how we've helped enterprises and startups achieve their transformation goals.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              className="h-full"
            >
              <Card
                role="button"
                tabIndex={0}
                onClick={() => handleStudyClick(study.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStudyClick(study.id);
                  }
                }}
                className={`group overflow-hidden border border-border/60 hover:border-accent/40 bg-gradient-to-br ${study.color} hover:brightness-[0.98] shadow-none transition-premium hover:-translate-y-0.5 cursor-pointer h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`}
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-3">
                      {study.category}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-foreground/60">{study.client}</p>
                  </div>

                  {/* Content */}
                  <div className="mb-6 flex-grow">
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground/85 mb-1">Challenge</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/85 mb-1">Solution</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-6 border-t border-border/50">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-base sm:text-lg md:text-xl font-bold text-accent">{metric.value}</p>
                        <p className="text-[10px] sm:text-xs text-foreground/75">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-2 border-t border-border/50">
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all min-h-[44px] py-2">
                      Read Full Story
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section transition */}
    </section>
  );
}
