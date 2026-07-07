import { useLocation, Link } from 'wouter';
import { servicesData, getIconComponent } from '@/lib/data/staffingData';
import { useRequestTalent } from '@/contexts/RequestTalentContext';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, ChevronRight, Briefcase, Code2, Cloud, Database, 
  Cpu, ShieldCheck, Terminal, Wrench, Activity, Truck, DollarSign, 
  Users, TrendingUp, Sparkles, Building2, Workflow, ClipboardList, CheckCircle2 
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function getCategoryIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes('software')) return Code2;
  if (t.includes('cloud') || t.includes('devops')) return Cloud;
  if (t.includes('data') || t.includes('ai') || t.includes('intelligence')) return Database;
  if (t.includes('enterprise') || t.includes('sap') || t.includes('salesforce')) return Building2;
  if (t.includes('automation') || t.includes('robotics')) return Workflow;
  if (t.includes('infrastructure') || t.includes('support') || t.includes('help desk')) return ShieldCheck;
  if (t.includes('manufacturing') || t.includes('engineering')) return Wrench;
  if (t.includes('health') || t.includes('life sciences') || t.includes('medical')) return Activity;
  if (t.includes('logistics') || t.includes('supply chain') || t.includes('shipping')) return Truck;
  if (t.includes('finance') || t.includes('account')) return DollarSign;
  if (t.includes('hr') || t.includes('admin') || t.includes('management')) return Users;
  if (t.includes('sales') || t.includes('market')) return TrendingUp;
  if (t.includes('contract') || t.includes('role')) return ClipboardList;
  return Sparkles;
}

export default function ServicePage({ slug }: { slug: string }) {
  const [, setLocation] = useLocation();
  const { openRequestModal } = useRequestTalent();
  const service = servicesData.find((s) => s.slug === slug);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <SEO title={`${service.name} Solutions`} description={service.description} />

      {/* Hero Section */}
      <section 
        className="pt-12 pb-20 md:pt-16 md:pb-24 relative overflow-hidden transition-all duration-300 bg-slate-950 text-white"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-lighten pointer-events-none"
          style={{ backgroundImage: `url('/services/${service.slug}-bg.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
        
        <div className="container relative z-20">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="bg-accent/15 text-accent font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded mb-4 inline-block border border-accent/20">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              {service.name}
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-slate-300">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={() => openRequestModal(service.name)}
                className="bg-accent hover:bg-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium shadow-none cursor-pointer text-white"
              >
                Request Talent Profiles
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border font-semibold transition-premium hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer border-white/20 text-white hover:bg-white/5"
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
                    <Briefcase className="h-6 w-6 text-accent mb-4" aria-hidden="true" />
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
              <p className="text-muted-foreground text-sm sm:text-base">Explore our vetting networks by department. Select each group to view specific engineering and operational positions.</p>
            </div>

            {/* Mobile Tab List (swipeable horizontal) */}
            <div className="md:hidden flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none snap-x mask-gradient-x border-b border-border/20">
              {service.categories.map((cat, idx) => {
                const CatIcon = getCategoryIcon(cat.title);
                const isSelected = activeCategoryIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap snap-align-start cursor-pointer border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      isSelected
                        ? 'bg-accent border-accent text-white shadow-md shadow-accent/20'
                        : 'bg-card border-border/60 text-muted-foreground hover:border-accent/40'
                    }`}
                  >
                    <CatIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column Tabs (Desktop only) */}
              <div className="hidden md:flex md:col-span-5 flex-col gap-3" role="tablist" aria-label="Department Categories">
                {service.categories.map((cat, idx) => {
                  const CatIcon = getCategoryIcon(cat.title);
                  const isSelected = activeCategoryIndex === idx;
                  return (
                    <button
                      key={idx}
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`roles-panel-${idx}`}
                      id={`roles-tab-${idx}`}
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                        isSelected
                          ? 'bg-card border-accent/60 shadow-lg shadow-accent/5 ring-1 ring-accent/10'
                          : 'bg-transparent border-border/60 hover:border-accent/30 hover:bg-muted/5'
                      }`}
                    >
                      <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg font-bold text-sm transition-all duration-300 ${
                        isSelected
                          ? 'bg-accent text-white shadow-md shadow-accent/20'
                          : 'bg-muted text-muted-foreground group-hover:bg-accent/15 group-hover:text-accent'
                      }`}>
                        <CatIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-grow">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block">
                          Category {idx + 1}
                        </span>
                        <h3 className="font-bold text-primary text-base mt-0.5 group-hover:text-accent transition-colors duration-200">
                          {cat.title}
                        </h3>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column Roles Grid (Desktop & Mobile Unified Panel) */}
              <div className="col-span-1 md:col-span-7 flex">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategoryIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex"
                  >
                    <Card
                      id={`roles-panel-${activeCategoryIndex}`}
                      role="tabpanel"
                      aria-labelledby={`roles-tab-${activeCategoryIndex}`}
                      className="p-6 md:p-8 border border-border/60 bg-card hover:border-accent/20 shadow-none transition-all duration-300 w-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-3 border-b border-border/40 pb-5 mb-5">
                          <div className="h-10 w-10 bg-accent/15 rounded-xl flex items-center justify-center text-accent">
                            {(() => {
                              const ActiveIcon = getCategoryIcon(service.categories[activeCategoryIndex].title);
                              return <ActiveIcon className="h-5 w-5" aria-hidden="true" />;
                            })()}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                              Vetted Talent Network
                            </span>
                            <h4 className="text-lg md:text-xl font-bold text-primary mt-0.5">
                              {service.categories[activeCategoryIndex].title}
                            </h4>
                          </div>
                        </div>

                        <div className="mb-6">
                          <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
                            Operational & Engineering Placements
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {service.categories[activeCategoryIndex].roles.map((role, rIdx) => (
                              <div
                                key={rIdx}
                                className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/40 border border-border/30 hover:border-accent/30 transition-all hover:bg-muted/65 group/item cursor-default select-none animate-fade-in-up"
                              >
                                <CheckCircle2 className="h-4.5 w-4.5 text-accent flex-shrink-0 group-hover/item:scale-110 transition-transform" aria-hidden="true" />
                                <span className="text-xs sm:text-sm font-medium text-foreground/90 group-hover/item:text-accent transition-colors">
                                  {role}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-muted/20 p-4 rounded-xl">
                        <div>
                          <span className="block text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
                            Vetting Standard
                          </span>
                          <span className="font-semibold text-foreground/80 text-xs">
                            Top 4.2% Passed Vetting Guarantee
                          </span>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => openRequestModal(`${service.name} - ${service.categories[activeCategoryIndex].title}`)}
                          className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                          Request Candidates
                          <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>

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
