import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Users, Award, UserCheck, Workflow, Shield, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".benefit-card", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(".benefit-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefit-card-grid",
          start: "top 85%",
          once: true
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="why-everonix" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5 bg-dot-pattern">
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
        <div className="benefit-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="benefit-card opacity-0">
              <Card
                className="p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 h-full"
              >
                <div className="flex gap-4">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
