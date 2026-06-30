import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyEveronixSection from '@/components/WhyEveronixSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactSection from '@/components/ContactSection';
import ProcessSection from '@/components/ProcessSection';
import FaqSection from '@/components/FaqSection';
import SEO from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { industriesData, getIconComponent } from '@/lib/data/staffingData';
import { articles } from '@/lib/data/blogData';
import { ArrowRight, ArrowUpRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Everonix Technologies - Home Page
 * 
 * Design Philosophy: Strategic Enterprise Modern
 */
export default function Home() {
  const [, setLocation] = useLocation();

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Everonix resolved our Scala and Kubernetes pipeline bottleneck in under two weeks. The pre-vetted engineers they provided integrated with our CI/CD workflows and contributed code on day one.",
      author: "Aravind Sharma",
      role: "Director of Platform engineering, ScaleAI",
      rating: 5
    },
    {
      quote: "Our SOC-2 Type II audits require strict background verification and security training pathways. Everonix handled the security compliance mapping flawlessly, delivering specialized DevOps talent without a single audit deviation.",
      author: "Jessica Lin",
      role: "VP of Enterprise Security, HealthFlow Solutions",
      rating: 5
    },
    {
      quote: "We needed database performance tuning and Cloudflare deployment alignment for our scaling client base. Everonix provided engineers who understood the specific SSR and edge database requirements immediately.",
      author: "Marcus Vance",
      role: "VP of Engineering, FinTech Alpha",
      rating: 5
    }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Scroll to hash elements on mount or URL change
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a paint frame to ensure DOM is fully laid out
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, []);

  return (
    <>
      <SEO title="Enterprise Talent & Tech Transformation" />
      <HeroSection />

      {/* Partners / Trust Bar */}
      <section className="py-10 border-y border-border/40 bg-muted/20">
        <div className="container">
          <p className="text-center text-xs font-semibold text-foreground/50 uppercase tracking-widest mb-6">
            Enterprise Talent Configured For Cloud & Analytics Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 select-none">
            {/* Google Cloud */}
            <div className="transition-all duration-200 cursor-default opacity-90 hover:opacity-100 hover:scale-[1.02]" title="Google Cloud Partner">
              <svg className="h-8 md:h-10 w-auto" viewBox="0 0 135 32">
                <g>
                  <path d="M14 7.2L21 11l-7 4-7-4 7-3.8z" fill="#EA4335" />
                  <path d="M6.5 12.8L13 16.5v7.5l-6.5-3.6v-7.6z" fill="#4285F4" />
                  <path d="M21.5 12.8v7.6l-6.5 3.6v-7.5l6.5-3.7z" fill="#34A853" />
                </g>
                <text x="30" y="21" className="font-sans font-bold text-[14px] tracking-tight fill-foreground dark:fill-white">Google Cloud</text>
              </svg>
            </div>
            {/* AWS */}
            <div className="transition-all duration-200 cursor-default opacity-90 hover:opacity-100 hover:scale-[1.02]" title="Amazon Web Services Partner">
              <svg className="h-8 md:h-10 w-auto" viewBox="0 0 52 32">
                <text x="2" y="20" className="font-sans font-black text-[22px] tracking-tighter lowercase fill-foreground dark:fill-white">aws</text>
                <path d="M4 23c6 4.5 16.5 4.5 22 0l1.5 1.5c-7 5.5-19.5 5.5-25 0L4 23zm20-2l3.5 1-2 4.5-1.5-5.5z" fill="#FF9900" />
              </svg>
            </div>
            {/* Microsoft */}
            <div className="transition-all duration-200 cursor-default opacity-90 hover:opacity-100 hover:scale-[1.02]" title="Microsoft Partner">
              <svg className="h-8 md:h-10 w-auto" viewBox="0 0 105 32">
                <rect x="2" y="6" width="9" height="9" fill="#F25022" />
                <rect x="13" y="6" width="9" height="9" fill="#7FBA00" />
                <rect x="2" y="17" width="9" height="9" fill="#00A4EF" />
                <rect x="13" y="17" width="9" height="9" fill="#FFB900" />
                <text x="28" y="21" className="font-sans font-bold text-[14px] tracking-tight fill-foreground dark:fill-white">Microsoft</text>
              </svg>
            </div>
            {/* Salesforce */}
            <div className="transition-all duration-200 cursor-default opacity-90 hover:opacity-100 hover:scale-[1.02]" title="Salesforce Partner">
              <svg className="h-8 md:h-10 w-auto" viewBox="0 0 115 32">
                <path d="M16 11a4.5 4.5 0 00-4.3 3.1 3 3 0 00-3.7 2.9 3 3 0 003 3h10a3.5 3.5 0 003.5-3.5c0-1.8-1.4-3.2-3.1-3.5a4.5 4.5 0 00-5.4-2z" fill="#009EDB" />
                <text x="28" y="21" className="font-sans font-bold text-[14px] tracking-tight fill-foreground dark:fill-white">salesforce</text>
              </svg>
            </div>
            {/* SAP */}
            <div className="transition-all duration-200 cursor-default opacity-90 hover:opacity-100 hover:scale-[1.02]" title="SAP Partner">
              <svg className="h-8.5 md:h-11 w-auto" viewBox="0 0 52 32">
                <path d="M2 6h42l-5 20H8L2 6z" fill="#008FD3" />
                <text x="11" y="21" className="font-sans font-black text-[13px] tracking-tight fill-white">SAP</text>
              </svg>
            </div>
          </div>

          {/* Compliance & Security Row */}
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] md:text-xs font-semibold tracking-wider font-mono text-foreground/60 select-none">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-background border border-border/50 rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              ISO 9001 CERTIFIED
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-background border border-border/50 rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              GDPR COMPLIANT
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-background border border-border/50 rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              SOC-2 READY
            </span>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Industries Section */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specialized Industry Expertise
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide pre-vetted talent pools configured specifically for your sector's regulatory and technical frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industriesData.map((ind) => {
              const Icon = getIconComponent(ind.iconName);
              return (
                <Card 
                  key={ind.slug} 
                  className="p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium flex flex-col h-full cursor-pointer group text-left"
                  onClick={() => setLocation(`/industries/${ind.slug}`)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-grow">
                    {ind.description}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-accent gap-1 group-hover:translate-x-1 transition-transform">
                    Explore {ind.name} Staffing
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => setLocation('/industries')}
              className="bg-accent hover:bg-accent/90 text-white font-semibold cursor-pointer"
            >
              View All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <WhyEveronixSection />
      <CaseStudiesSection />

      {/* Testimonials & Social Proof */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-dot-pattern bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Stats */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Delivering Measurable Trust & SLA Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Don't just take our word for it. We maintain strict compliance, zero attrition-gap guarantees, and absolute talent excellence for major global players.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                  <p className="text-3xl md:text-4xl font-bold text-accent">98.4%</p>
                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mt-1">Client Retention</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                  <p className="text-3xl md:text-4xl font-bold text-accent">99.2%</p>
                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mt-1">SLA Adherence</p>
                </div>
              </div>
            </div>

            {/* Right Column: Testimonials Slider */}
            <div className="lg:col-span-7 flex flex-col justify-center min-h-[320px] lg:min-h-[380px]">
              <div className="relative overflow-hidden w-full p-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Card className="p-6 md:p-10 border border-border/60 bg-card shadow-none hover:shadow-md transition-premium relative overflow-hidden min-h-[260px] flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-6 text-amber-500">
                          {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 italic text-left">
                          "{testimonials[activeTestimonial].quote}"
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-primary text-sm sm:text-base">{testimonials[activeTestimonial].author}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-6 px-1">
                {/* Dot Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeTestimonial === idx ? "w-6 bg-accent" : "w-2.5 bg-border hover:bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handlePrevTestimonial}
                    className="h-10 w-10 border-border hover:bg-muted/5 rounded-lg cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleNextTestimonial}
                    className="h-10 w-10 border-border hover:bg-muted/5 rounded-lg cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ProcessSection />
      <FaqSection />

      {/* Latest from Blog */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-gradient-to-b from-transparent to-secondary/15">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 md:mb-16">
            <div className="max-w-xl text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Latest Insights & Tech Trends
              </h2>
              <p className="text-muted-foreground">
                Stay informed with our latest articles, guides, and leadership analyses.
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setLocation('/blog')}
              className="mt-4 sm:mt-0 border border-border hover:bg-primary/5 cursor-pointer text-primary"
            >
              View All Insights
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.slice(0, 3).map((art) => (
              <Card 
                key={art.id} 
                className="overflow-hidden border border-border/60 hover:border-accent/40 bg-card shadow-none hover:shadow-lg transition-premium flex flex-col h-full cursor-pointer group text-left"
                onClick={() => setLocation('/blog')}
              >
                {/* Card Graphic Background representation */}
                <div className="h-48 w-full relative overflow-hidden border-b border-border/40 bg-muted flex items-center justify-center">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="text-xs font-bold text-primary bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full absolute top-4 left-4 z-10">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="font-bold text-primary text-base md:text-lg mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs md:text-sm text-foreground/75 leading-relaxed line-clamp-3 mb-6">
                      {art.excerpt}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-border/40">
                    Read Article
                    <ArrowRight className="h-4.5 w-4.5" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
