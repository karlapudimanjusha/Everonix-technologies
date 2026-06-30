import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Quote, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";

export default function TestimonialsPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/15">
      <SEO 
        title="Client Reviews & Technical Case Testimonials" 
        description="Read detailed verified client reviews, engineering outcomes, and SLA compliance metrics from enterprise technical teams partnering with Everonix Technologies."
      />

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-r from-primary/10 to-accent/10 bg-dot-pattern">
        <div className="container">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Verified Client Outcomes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight font-sans">
              Trusted by Leading <br className="hidden md:block" />
              Engineering Leaders
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover how our embedded engineering cohorts help enterprise organisations scale velocity, secure cloud infrastructure, and clear technical backlogs.
            </p>
          </div>
        </div>
      </section>

      {/* Expanded Testimonials List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {[
              {
                quote: "Everonix resolved our Scala and Kubernetes pipeline bottleneck in under two weeks. The pre-vetted engineers they provided integrated with our CI/CD workflows and contributed code on day one.",
                author: "Aravind Sharma",
                role: "Director of Platform Engineering",
                company: "ScaleAI",
                metrics: "Scala & K8s Pipeline Bottleneck Cleared"
              },
              {
                quote: "Our SOC-2 Type II audits require strict background verification and security training pathways. Everonix handled the security compliance mapping flawlessly, delivering specialized DevOps talent without a single audit deviation.",
                author: "Jessica Lin",
                role: "VP of Enterprise Security",
                company: "HealthFlow Solutions",
                metrics: "100% Security Audit Compliance"
              },
              {
                quote: "Scaling our data analytics platform required niche Golang and Apache Spark expertise. Everonix matched us with three developers within 48 hours who helped us deliver our v3.2 query engine ahead of schedule.",
                author: "Marcus Vance",
                role: "Chief Technology Officer",
                company: "Apex Analytics Group",
                metrics: "v3.2 Query Engine Delivered Early"
              },
              {
                quote: "We outsourced our core candidate processing flows to their RPO configuration. They lowered our cost-per-hire by 34.2% while maintaining exceptional SLA responses. Highly recommended B2B partner.",
                author: "Sarah Jenkins",
                role: "Head of Talent Acquisition",
                company: "Vanguard Retail Systems",
                metrics: "34.2% Cost-Per-Hire Reduction"
              },
              {
                quote: "Their React Native and iOS developers are top-tier. They not only optimized our mobile screen rendering flows to solve jank issues but aligned with our strict unit-testing coverage targets.",
                author: "Elena Rostova",
                role: "Director of Mobile Engineering",
                company: "PayPulse FinTech",
                metrics: "React Native Rendering Lag Resolved"
              },
              {
                quote: "Third-party payroll and local employment compliance are major hurdles when hiring cross-border. Everonix acted as our Employer of Record (EOR), absorbing compliance risks completely.",
                author: "David Vance",
                role: "VP of Human Resources",
                company: "Global Logistics Group",
                metrics: "Zero Co-employment Risk Issues"
              }
            ].map((t, idx) => (
              <Card key={idx} className="p-8 border border-border/60 bg-card shadow-none hover:shadow-lg transition-premium relative overflow-hidden flex flex-col justify-between">
                <Quote className="absolute right-6 top-6 w-12 h-12 text-accent/10 pointer-events-none" />
                <div>
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold text-primary text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  <div className="mt-3 inline-block px-2.5 py-1 bg-accent/5 border border-accent/10 rounded text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
                    Outcomes: {t.metrics}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-gradient-to-br from-primary to-primary/95 text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Partner with Everonix Technologies</h2>
          <p className="text-base text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Experience the B2B staffing platform built for speed, transparency, and enterprise-grade SLA compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => setLocation("/#contact")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium cursor-pointer w-full sm:w-auto"
            >
              Request Talent Profiles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border border-white/20 text-white hover:bg-white/10 font-semibold px-8 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium cursor-pointer w-full sm:w-auto"
            >
              <a href="/#contact">Book a Discovery Call</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
