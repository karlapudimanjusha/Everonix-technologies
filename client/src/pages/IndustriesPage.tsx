import { useLocation } from 'wouter';
import { industriesData, getIconComponent } from '@/lib/data/staffingData';
import { useRequestTalent } from '@/contexts/RequestTalentContext';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IndustriesPage() {
  const [, setLocation] = useLocation();
  const { openRequestModal } = useRequestTalent();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO
        title="Industries We Serve"
        description="Specialized staffing, talent consulting, and workforce solutions across major industry sectors."
      />

      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-r from-muted/50 to-accent/10 bg-dot-pattern">
        <div className="container text-center max-w-3xl animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
            Industries We Serve
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver highly specialized talent matching the unique regulatory, technical, and operational needs of your industry sector.
          </p>
        </div>
      </section>

      {/* Grid Directory */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industriesData.map((ind, idx) => {
              const Icon = getIconComponent(ind.iconName);
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                  className="h-full"
                >
                  <Card className="p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-accent/10 rounded-xl text-accent">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-primary hover:text-accent transition-colors cursor-pointer" onClick={() => setLocation(`/industries/${ind.slug}`)}>
                        {ind.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-grow">
                      {ind.description}
                    </p>

                    {/* Roles List */}
                    <div className="mb-6 pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Typical Positions Hired:</p>
                      <ul className="space-y-1.5">
                        {ind.typicalRoles.slice(0, 3).map((role, rIdx) => (
                          <li key={rIdx} className="text-xs text-foreground/80 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Panel */}
                    <div className="flex gap-3 pt-2 border-t border-border/50">
                      <Button
                        variant="outline"
                        onClick={() => setLocation(`/industries/${ind.slug}`)}
                        className="flex-1 text-xs border border-border hover:bg-primary/5 cursor-pointer text-primary"
                      >
                        Learn More
                      </Button>
                      <Button
                        onClick={() => openRequestModal(ind.name.includes('Tech') ? 'IT Staffing' : 'Non-IT Staffing')}
                        className="flex-1 text-xs bg-accent hover:bg-accent/90 text-white font-semibold cursor-pointer"
                      >
                        Hire Talent
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
