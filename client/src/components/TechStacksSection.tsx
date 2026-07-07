import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Layout, Server, Cloud, Database, Cpu, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: Layout,
    description: 'Specialists in performance, accessibility, and interactive web client architectures.',
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'Framer Motion'],
    roles: ['Senior Frontend Developer', 'React / NextJS Specialist', 'UI/UX Engineer'],
    highlights: 'Coded with strict SEO compliance and WCAG 2.1 AA targets.'
  },
  {
    id: 'backend',
    title: 'Backend & System APIs',
    icon: Server,
    description: 'Engineers designing scalable databases, secure microservices, and efficient data contracts.',
    tags: ['Go / Golang', 'Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'gRPC / Protocol Buffers'],
    roles: ['Senior Backend Engineer', 'Go/System Developer', 'API Integrations Architect'],
    highlights: 'Expertise in high-throughput pipelines and database normalization.'
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    icon: Cloud,
    description: 'Infrastructure engineers standardizing CI/CD compliance, monitoring, and serverless scale.',
    tags: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Cloudflare Workers', 'Terraform'],
    roles: ['Cloud Systems Architect', 'SRE / DevOps Engineer', 'SecOps Specialist'],
    highlights: 'Implementation of SOC-2 standard IAM policies and VPC configs.'
  },
  {
    id: 'data',
    title: 'Data Systems & Cache',
    icon: Database,
    description: 'Architects managing low-latency cache grids, big data indexing, and event streams.',
    tags: ['Redis', 'BigQuery', 'Apache Kafka', 'Elasticsearch', 'ClickHouse', 'MongoDB'],
    roles: ['Database Administrator', 'Data Infrastructure Engineer', 'Analytics Developer'],
    highlights: 'Handling distributed systems synchronization and caching topologies.'
  }
];

export default function TechStacksSection() {
  const [selectedCat, setSelectedCat] = useState('frontend');
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(".animate-stack", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(".animate-stack",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      }
    );
  }, { scope: sectionRef });

  const activeCategory = techCategories.find(cat => cat.id === selectedCat) || techCategories[0];
  const ActiveIcon = activeCategory.icon;

  return (
    <section ref={sectionRef} id="tech-stacks" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden relative border-t border-border/40">
      {/* Decorative background visual */}
      <div className="absolute left-[-5%] top-[10%] w-[30%] aspect-square bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-stack opacity-0">
          <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
            Our Stacks
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Specialized Tech Stack Coverage
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We deploy developers trained in modern technical ecosystems. Select a category below to view supported stacks and engineering roles.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Cards List (8 columns on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-stack opacity-0">
            {techCategories.map((cat) => {
              const CatIcon = cat.icon;
              const isSelected = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 group cursor-pointer h-full min-h-[190px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    isSelected
                      ? 'bg-card border-accent shadow-md shadow-accent/5 ring-1 ring-accent/10'
                      : 'bg-card/50 border-border/60 hover:border-accent/30 hover:bg-card hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      isSelected
                        ? 'bg-accent text-white'
                        : 'bg-muted text-muted-foreground group-hover:bg-accent/15 group-hover:text-accent'
                    }`}>
                      <CatIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-primary text-lg group-hover:text-accent transition-colors duration-200">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-foreground/80 mt-2 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Visual indication tag */}
                  <div className="mt-4 pt-2 border-t border-border/20 flex justify-between items-center w-full">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      {cat.tags.length} core tools
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-accent' : 'text-muted-foreground group-hover:text-accent'
                    }`}>
                      {isSelected ? 'Viewing' : 'Explore'} →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Details Panel (5 columns on desktop) */}
          <div className="lg:col-span-5 animate-stack opacity-0 flex">
            <Card className="p-6 md:p-8 border border-border/60 bg-card hover:border-accent/20 shadow-none transition-all duration-300 w-full flex flex-col justify-between min-h-[400px]">
              <div>
                {/* Active Category Header */}
                <div className="flex items-center gap-3 border-b border-border/40 pb-5 mb-5">
                  <div className="h-10 w-10 bg-accent/15 rounded-xl flex items-center justify-center text-accent">
                    <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                      Active Skill Set
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-primary mt-0.5">
                      {activeCategory.title}
                    </h4>
                  </div>
                </div>

                {/* Tags Cloud */}
                <div className="mb-6">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Frameworks & Systems
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-muted text-foreground border border-border/40 cursor-default select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Placed Roles list */}
                <div className="mb-6">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Typical Placements
                  </span>
                  <ul className="space-y-2">
                    {activeCategory.roles.map((role, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-foreground/80">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benchmark notes */}
              <div className="pt-4 border-t border-border/40 bg-muted/40 p-4 rounded-xl">
                <span className="block text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                  Everonix Quality Benchmark
                </span>
                <p className="text-xs font-medium text-foreground/85">
                  {activeCategory.highlights}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
