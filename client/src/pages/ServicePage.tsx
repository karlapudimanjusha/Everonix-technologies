import { useLocation, Link } from 'wouter';
import { servicesData, getIconComponent } from '@/lib/data/staffingData';
import { useRequestTalent } from '@/contexts/RequestTalentContext';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, ChevronRight, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicePage({ slug }: { slug: string }) {
  const [, setLocation] = useLocation();
  const { openRequestModal } = useRequestTalent();
  const service = servicesData.find((s) => s.slug === slug);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!service) {
    return (
      <div className="container py-24 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Service Not Found</h2>
        <Button onClick={() => setLocation('/')} className="bg-accent text-white">
          Go Back Home
        </Button>
      </div>
    );
  }

  const IconComponent = getIconComponent(service.iconName);

  const toggleCategory = (title: string) => {
    setExpandedCategory((prev) => (prev === title ? null : title));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <SEO title={`${service.name} Solutions`} description={service.description} />

      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-r from-muted/50 to-accent/10 bg-dot-pattern">
        <div className="container">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="bg-accent/10 text-accent font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded mb-4 inline-block">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
              {service.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={() => openRequestModal(service.name)}
                className="bg-accent hover:bg-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium shadow-none cursor-pointer text-white"
              >
                Request Talent Profiles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-border text-primary hover:bg-primary/5 font-semibold transition-premium hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer"
              >
                <Link href="/#contact">Book a Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      {service.hiringModels && service.hiringModels.length > 0 && (
        <section className="py-16 md:py-24 border-t border-border/40">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Hiring & Solution Models</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Flexible engagement models structured around your engineering and resource constraints.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.hiringModels.map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                >
                  <Card className="p-6 border border-border/60 bg-card hover:bg-muted/5 shadow-none transition-premium h-full">
                    <Briefcase className="h-6 w-6 text-accent mb-4" />
                    <h3 className="text-base font-bold text-primary mb-2">{model.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">{model.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categorized Job Roles */}
      {service.categories && service.categories.length > 0 && (
        <section className="py-16 md:py-24 border-t border-border/40 bg-background">
          <div className="container">
            <div className="mb-12 max-w-2xl mx-auto text-center animate-item">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Specialized Roles We Hire</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Explore our vetting networks by department. Expand each group to view specific engineering and operational positions.</p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {service.categories.map((cat, idx) => {
                const isExpanded = expandedCategory === cat.title;
                return (
                  <div
                    key={idx}
                    className="border border-border/60 rounded-xl overflow-hidden bg-card transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleCategory(cat.title)}
                      className="w-full flex items-center justify-between p-5 text-left font-semibold text-primary hover:text-accent transition-colors cursor-pointer"
                    >
                      <span className="text-base md:text-lg">{cat.title}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-border/40 bg-muted/5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {cat.roles.map((role, rIdx) => (
                              <div key={rIdx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/85">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                                <span>{role}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-[#12283a] via-[#1a3a52] to-slate-950 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800/40">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Partner with Everonix</h2>
            <p className="text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Get access to a high-quality global network of technology and operations professionals. Fill out a brief request form, and our recruitment team will get in touch.
            </p>
            <Button
              size="lg"
              onClick={() => openRequestModal(service.name)}
              className="bg-accent hover:bg-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium text-white font-semibold px-8 py-3 cursor-pointer shadow-none"
            >
              Submit Hiring Requirements
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
