import { useLocation } from 'wouter';
import { industriesData, getIconComponent } from '@/lib/data/staffingData';
import { useRequestTalent } from '@/contexts/RequestTalentContext';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IndustryPage({ slug }: { slug: string }) {
  const [, setLocation] = useLocation();
  const { openRequestModal } = useRequestTalent();
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="container py-24 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Industry Sector Not Found</h2>
        <Button onClick={() => setLocation('/industries')} className="bg-accent text-white">
          Go to Industries
        </Button>
      </div>
    );
  }

  const Icon = getIconComponent(industry.iconName);

  const heroBgImage = `/industries/${industry.slug}.webp`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO title={`${industry.name} Staffing`} description={industry.description} />

      {/* Hero Section */}
      <section 
        className="relative pt-16 pb-20 md:pt-20 md:pb-28 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${heroBgImage}')` }}
      >
        {/* Dark gradient overlay: dark Slate/Navy on the left, transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-accent-foreground">
                <Icon size={24} />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-white/80 font-semibold">
                Industry Sector Specialization
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {industry.name} Staffing Solutions
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              {industry.description} We offer vetted candidate pipelines, contract staffing, direct recruitment, and executive headhunting tailored for {industry.name.toLowerCase()} requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={() => openRequestModal(industry.name.includes('Tech') ? 'IT Staffing' : 'Non-IT Staffing')}
                className="bg-accent hover:bg-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium shadow-none cursor-pointer text-white"
              >
                Request Talent Profiles
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-white/20 text-white hover:bg-white/10 font-semibold transition-premium hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer"
              >
                <a href="/#contact">Book a Discovery Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Details */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Our Hiring Specializations</h2>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6">
                Recruiting within this industry demands deep domain knowledge, familiarity with compliance standards, and an active network of qualified professionals. We conduct technical testing and background screenings before profiles reach your desk.
              </p>

              <div className="space-y-4">
                {industry.bullets.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-6 md:p-8 border border-border/60 bg-card shadow-none h-full flex flex-col justify-center text-left">
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-between w-full">
                  {/* Left: Typical Roles List */}
                  <div className="flex-1 text-left w-full">
                    <h3 className="text-base md:text-lg font-bold text-primary mb-4 pb-2 border-b border-border/50">
                      Typical Positions We Place
                    </h3>
                    <div className="space-y-3">
                      {industry.typicalRoles.map((role, idx) => (
                        <div key={idx} className="flex items-center gap-3 py-1 text-sm text-foreground/80">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Sector Vector Illustration */}
                  <div className="w-full sm:w-[180px] h-[180px] flex items-center justify-center bg-card border border-border/50 rounded-xl p-3 flex-shrink-0">
                    <img
                      src={`/industries/${industry.slug}.webp`}
                      alt={`Vector illustration representing Everonix ${industry.name} staffing services`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // Hide the image container if it fails to load
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent) parent.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-[#12283a] via-[#1a3a52] to-slate-950 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800/40">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Dedicated {industry.name} Experts?</h2>
            <p className="text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Discuss your requirements with our sector-specific recruitment directors. We can assemble project cohorts, augment your teams, or fill critical vacancies.
            </p>
            <Button
              size="lg"
              onClick={() => openRequestModal(industry.name.includes('Tech') ? 'IT Staffing' : 'Non-IT Staffing')}
              className="bg-accent hover:bg-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium text-white font-semibold px-8 py-3 cursor-pointer shadow-none"
            >
              Submit Staffing Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
