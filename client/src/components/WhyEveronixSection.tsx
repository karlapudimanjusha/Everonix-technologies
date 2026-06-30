import { Card } from '@/components/ui/card';
import { Users, Award, UserCheck, Workflow, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const differentiators = [
  {
    title: 'Embedded Team Integration',
    icon: Users,
    description:
      'We integrate directly with your Slack, Jira, and GitHub workflows, adopting your internal SDLC policies from day one.',
  },
  {
    title: 'Proven Track Record',
    icon: Award,
    description:
      'Over 15 years sourcing and deploying software engineers, database administrators, and cloud architects for Fortune 500 environments.',
  },
  {
    title: 'Elite Talent Pool',
    icon: UserCheck,
    description:
      'Every engineer passes a multi-stage technical screening, including live system design challenges and security posture tests.',
  },
  {
    title: 'Continuous Staging & CI/CD Validation',
    icon: Workflow,
    description:
      'Standardizing delivery through staging environments, lint compliance pipelines, and automated test coverages.',
  },
  {
    title: 'Enterprise Security',
    icon: Shield,
    description:
      'All engineers undergo mandatory SOC-2 compliance, data privacy, and secure coding practices training.',
  },
  {
    title: 'Measurable Results',
    icon: TrendingUp,
    description:
      'We track and report weekly sprint velocity, code quality metrics, and SLA key performance indicators.',
  },
];

export default function WhyEveronixSection() {
  return (
    <section id="why-everonix" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5 bg-dot-pattern">
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
            >
              <Card
                className="p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 h-full"
              >
                <div className="flex gap-4">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
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
