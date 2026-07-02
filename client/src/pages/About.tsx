import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Target, ArrowRight, Linkedin, ChevronRight } from "lucide-react";
import { useLocation, Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/15">
      <SEO 
        title="About Us - Corporate Mission & Engineering Values" 
        description="Learn more about Everonix Technologies, our 15+ year history of scaling enterprise engineering capacity, and our core values of speed, scale, and compliance."
      />

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-br from-[#F0F9FF] via-background to-background dark:from-[#0a1931]/30 dark:via-background dark:to-background bg-dot-pattern">
        <div className="container">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Our Identity & Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight font-sans">
              Scaling Engineering Capacity. <br className="hidden md:block" />
              Grounded in Trust.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For over 15 years, Everonix Technologies has partnered with global enterprises, SaaS platforms, and Fortune 500 groups to source, screen, and deploy elite software engineering cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Mission & Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-6">
                Our mission is simple: to connect enterprise organizations with vetted technical professionals, enabling rapid product delivery with zero compliance drift. We believe that great software is built by great teams, and the right talent in the right environment changes everything.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                By maintaining a multi-stage technical screening protocol, active background checks, and SOC-2/GDPR compliance frameworks, we make talent acquisition transparent, predictable, and aligned with your weekly sprint goals.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl h-64 md:h-96 group border border-border/40 shadow-lg select-none">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                alt="Team of engineers collaborating in a modern corporate workspace at Everonix Technologies"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white z-10 text-left">
                <div className="text-3xl font-bold font-mono">15+ Years</div>
                <p className="text-xs text-white/90 font-mono tracking-wider uppercase">Of Delivery Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Pillars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These four principles guide every developer screening, client placement, and enterprise partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Vetted Expertise",
                desc: "We accept only the top 4.2% of engineering candidates passing rigorous system design audits.",
                icon: Award
              },
              {
                title: "SLA Adherence",
                desc: "Weekly sprint velocity tracking and a 99.4% on-time delivery metric (2025 Audit).",
                icon: Target
              },
              {
                title: "Zero-Trust Security",
                desc: "Mandatory security certifications, GDPR compliance, and SOC-2 audit alignment for all cohorts.",
                icon: Shield
              },
              {
                title: "Integrated Teams",
                desc: "Developers adopt your Slack, Jira, and GitHub workflows on day one to eliminate friction.",
                icon: Users
              }
            ].map((value, idx) => {
              const ValIcon = value.icon;
              return (
                <Card key={idx} className="p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 text-left flex flex-col justify-between">
                  <div>
                    <div className="p-2.5 w-fit bg-accent/5 text-accent rounded-lg mb-4">
                      <ValIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Governance & Execution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our executive board coordinates technical vetting, operations alignment, and enterprise security frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Satheesh Kuncham",
                role: "President",
                initials: "SK",
                gradient: "from-blue-600 to-indigo-600",
                shortBio: "15+ years of enterprise software scaling, organizational strategy, and client relations. Drives our technology vision and global operations.",
                fullBio: "Satheesh Kuncham is the President of Everonix Technologies. With over 15 years of industry-leading experience in enterprise systems architecture and digital delivery networks, Satheesh drives the company's global strategy, technology vision, and corporate relations. Under his stewardship, Everonix has successfully delivered scalable software cohorts to Fortune 500 groups and high-growth SaaS platforms alike.",
                focusAreas: ["Corporate Strategy", "Enterprise Partnerships", "Technology Direction"]
              },
              {
                name: "Manjusha Karlapudi",
                role: "Vice President",
                initials: "MK",
                gradient: "from-teal-500 to-emerald-600",
                shortBio: "Directs talent acquisition, vetting pipelines, and SLA compliance. Over a decade engineering multi-stage developer screening frameworks.",
                fullBio: "Manjusha Karlapudi serves as the Vice President at Everonix. She directs talent acquisition frameworks, technical evaluation pipelines, and client alignment SLA protocols. Manjusha has spent over a decade design-engineering multi-stage vetting processes that guarantee only the top 4.2% of engineers pass to the onboarding stage, ensuring high quality and zero ramp-up time for client sprints.",
                focusAreas: ["Vetting Operations", "Talent Acquisition", "SLA Compliance"]
              },
              {
                name: "Thirumala",
                role: "Director",
                initials: "T",
                gradient: "from-purple-500 to-pink-600",
                shortBio: "Manages cohort integration, engineering delivery metrics, and client onboarding. Expert in agile workflow transitions.",
                fullBio: "Thirumala is the Director of Operations and Cohort Integration. She manages daily operations, engineering delivery metrics, and cross-functional team coordination. Thirumala specializes in agile workflows, ensuring that deployed developers seamlessly transition into clients' existing Slack, Jira, and Git repositories with zero administrative friction.",
                focusAreas: ["Operations Management", "Agile Workflows", "Team Onboarding"]
              },
              {
                name: "Maneiah Kuncham",
                role: "Managing Director",
                initials: "MK",
                gradient: "from-cyan-500 to-blue-600",
                shortBio: "Oversees corporate finance, resource allocation, and compliance frameworks. Ensures SOC-2 and background verification integrity.",
                fullBio: "Maneiah Kuncham is the Managing Director of Everonix. He oversees the corporate finance, legal compliance, and strategic resource allocation divisions. Maneiah focuses on scaling operational capacity while maintaining strict compliance with SOC-2, GDPR, and background checks across our global staffing networks.",
                focusAreas: ["Corporate Finance", "Legal Compliance", "Scaling Operations"]
              }
            ].map((leader, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <div className="group relative bg-card border border-border/60 hover:border-accent/40 rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 text-left flex flex-col justify-between h-[360px] overflow-hidden select-none">
                    <div>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 bg-gradient-to-br ${leader.gradient} text-white shadow-md group-hover:scale-105 transition-transform duration-300 font-mono`}>
                        {leader.initials}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-200">{leader.name}</h3>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">{leader.role}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{leader.shortBio}</p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform duration-200 mt-4">
                      Read full profile <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[550px] p-6 md:p-8 rounded-2xl border border-border bg-card shadow-2xl">
                  <DialogHeader className="text-left pb-4 border-b border-border/40">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl bg-gradient-to-br ${leader.gradient} text-white shadow-md font-mono`}>
                        {leader.initials}
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold text-primary">{leader.name}</DialogTitle>
                        <p className="text-sm font-semibold text-accent uppercase tracking-wider">{leader.role}</p>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="py-6 text-left space-y-4">
                    <DialogDescription className="text-base text-foreground/80 leading-relaxed font-normal">
                      {leader.fullBio}
                    </DialogDescription>
                    
                    <div className="pt-4 border-t border-border/40">
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.focusAreas.map((focus, fIdx) => (
                          <span key={fIdx} className="bg-secondary/40 border border-border text-foreground/80 text-xs px-3 py-1 rounded-full font-medium">
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-border/40">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0077b5] hover:bg-[#0077b5]/90 px-4 py-2.5 rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-[#12283a] via-[#1a3a52] to-slate-950 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800/40">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Build Your Embedded Development Team</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Get matched with vetted engineers, architects, or systems administrators tailored to your sprint requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setLocation("/#contact")}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium cursor-pointer w-full sm:w-auto shadow-none"
              >
                Get Matched in 48 Hours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-white/20 text-white hover:bg-white/10 font-semibold px-8 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium cursor-pointer w-full sm:w-auto"
              >
                <Link href="/#contact">Book a Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
