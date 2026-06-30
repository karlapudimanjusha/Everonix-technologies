import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ClipboardCheck, Search, Users, Activity, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      icon: ClipboardCheck,
      desc: "We align on your architecture stack, engineering practices, security rules, and SLA targets to define exact profile requirements."
    },
    {
      step: "02",
      title: "Vetted Screenings",
      icon: Search,
      desc: "Candidates pass multi-stage technical screening, including live coding, system design reviews, and background/credit checks."
    },
    {
      step: "03",
      title: "Rapid Placement",
      icon: Users,
      desc: "We deploy qualified developer matches in under 48 hours, managing contract onboarding and workflow setups smoothly."
    },
    {
      step: "04",
      title: "Continuous Support",
      icon: Activity,
      desc: "We track weekly sprint velocity, code quality KPIs, and security posture parameters to ensure seamless long-term delivery."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".process-step", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(".process-step",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-steps-grid",
          start: "top 85%",
          once: true
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-secondary/5 to-background border-t border-border/40">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
            Our Delivery Model
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-sans">
            How We Work
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            A standardized, secure, and velocity-oriented process from requirements alignment to weekly support.
          </p>
        </div>

        <div className="process-steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={idx}
                className="process-step opacity-0 relative"
              >
                {/* Arrow Connector on large screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 right-[-20px] translate-x-1/2 z-10 text-accent/30 pointer-events-none">
                    <ArrowRight className="w-6 h-6 animate-pulse" aria-hidden="true" />
                  </div>
                )}

                <Card className="p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 h-full flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-2.5 bg-accent/5 text-accent rounded-lg">
                        <StepIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-3xl font-black text-primary/10 tracking-widest">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
