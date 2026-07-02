import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Search, Code2, Cpu, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const vettingSteps = [
  {
    stage: 1,
    title: 'Resume & Experience Screening',
    icon: Search,
    ratio: 'Top 22% Proceed',
    duration: '1-2 Days',
    description: 'Manual audit of professional history, verified contributions, open-source repositories, and communications proficiency.',
    focus: ['Employment Verification', 'Technical Comm. Competence', 'Open-Source Commit Quality'],
    standards: 'Verification of past enterprise contributions.'
  },
  {
    stage: 2,
    title: 'Algorithmic Coding Vetting',
    icon: Code2,
    ratio: 'Top 9.5% Proceed',
    duration: '90 Minute Session',
    description: 'Automated and live coding challenges assessing data structures, clean code, space-time complexity, and performance edge cases.',
    focus: ['Big-O Optimization', 'Error-Boundary Hygiene', 'Unit Testing Coverage'],
    standards: 'Must pass automated edge-case test validations.'
  },
  {
    stage: 3,
    title: 'System Design Architecture',
    icon: Cpu,
    ratio: 'Top 5.1% Proceed',
    duration: '2 Hours Live Panel',
    description: 'Live architecture panel assessing microservices segregation, horizontal scaling, caching strategies, and data sharding topologies.',
    focus: ['Load-Balancer Distribution', 'DB Partitioning Strategies', 'Latency Mitigation Protocols'],
    standards: 'Detailed structure design for 10M+ daily active users.'
  },
  {
    stage: 4,
    title: 'Compliance & Security Audit',
    icon: ShieldCheck,
    ratio: 'Top 4.5% Proceed',
    duration: '1 Day Assessment',
    description: 'Mandatory security checks covering OWASP Top 10 vulnerabilities, secure containerization practices, and data compliance standards.',
    focus: ['OWASP Vuln. Mitigation', 'Secure Docker/Kubernetes Config', 'Data-at-Rest Encryption'],
    standards: 'Alignment with SOC-2 Type II and GDPR rules.'
  },
  {
    stage: 5,
    title: 'Integration & Cohort Launch',
    icon: Zap,
    ratio: 'Only 4.2% Accepted',
    duration: 'Continuous onboarding',
    description: 'Final alignment audit. Engineers are mapped to the client\'s SDLC tools (Slack, Jira, Git branches) for immediate sprint productivity.',
    focus: ['Git Workflow Coordination', 'Sprint Velocity Benchmarking', 'SLA Contract Alignment'],
    standards: 'Day-one pipeline integration with zero friction.'
  }
];

export default function VettingProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(".animate-vetting", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(".animate-vetting",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      }
    );
  }, { scope: sectionRef });

  const ActiveIcon = vettingSteps[activeStep].icon;

  return (
    <section ref={sectionRef} id="vetting-process" className="py-16 md:py-24 bg-background overflow-hidden relative border-t border-border/40">
      {/* Decorative Blur Glow */}
      <div className="absolute right-[-10%] top-[20%] w-[35%] aspect-square bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-vetting opacity-0">
          <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
            Rigorous Vetting
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How We Verify Elite Talent
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our multi-stage vetting pipeline filters out raw developers to deliver senior software engineers, architects, and DevOps specialists.
          </p>
        </div>

        {/* Stepper + Details Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stepper Steps Selection Column */}
          <div className="lg:col-span-5 flex flex-col gap-3 w-full animate-vetting opacity-0">
            {vettingSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.stage}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-card border-accent/60 shadow-lg shadow-accent/5 ring-1 ring-accent/10'
                      : 'bg-transparent border-border/60 hover:border-accent/30 hover:bg-muted/5'
                  }`}
                >
                  {/* Step Number Badge & Icon */}
                  <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg font-bold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-accent text-white shadow-md shadow-accent/20'
                      : 'bg-muted text-muted-foreground group-hover:bg-accent/15 group-hover:text-accent'
                  }`}>
                    <StepIcon className="h-5 w-5" />
                  </div>

                  {/* Step Titles */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                        Stage {step.stage}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-accent/15 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.ratio}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary text-base md:text-lg mt-0.5 group-hover:text-accent transition-colors duration-200">
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Details Card Column */}
          <div className="lg:col-span-7 h-full flex animate-vetting opacity-0">
            <Card className="p-6 md:p-8 border border-border/60 bg-card hover:border-accent/20 shadow-none transition-all duration-300 w-full flex flex-col justify-between min-h-[440px]">
              <div>
                {/* Header detail */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-accent/15 rounded-xl flex items-center justify-center text-accent">
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                        Stage {vettingSteps[activeStep].stage} Evaluation
                      </span>
                      <h4 className="text-xl md:text-2xl font-bold text-primary mt-0.5">
                        {vettingSteps[activeStep].title}
                      </h4>
                    </div>
                  </div>

                  {/* Vetting Ratio Tag */}
                  <div className="text-right">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      Pipeline Threshold
                    </span>
                    <span className="text-lg font-bold text-accent">
                      {vettingSteps[activeStep].ratio}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    {vettingSteps[activeStep].description}
                  </p>

                  {/* Detail Bullet Grid */}
                  <div className="pt-4">
                    <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                      Screening Core Focus
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {vettingSteps[activeStep].focus.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer specs */}
              <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-muted/30 p-4 rounded-xl">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Evaluation Duration
                  </span>
                  <span className="font-bold text-primary text-sm">
                    {vettingSteps[activeStep].duration}
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Required Expectation Benchmark
                  </span>
                  <span className="font-semibold text-foreground/90 text-sm">
                    {vettingSteps[activeStep].standards}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
