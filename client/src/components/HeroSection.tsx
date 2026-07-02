import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building2, ShieldCheck, Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".animate-item", { opacity: 1, y: 0 });
      if (illustrationRef.current) {
        gsap.set(illustrationRef.current, { opacity: 1, y: 0 });
      }
      return;
    }

    // 1. Entrance animation for Left Content items
    gsap.fromTo(".animate-item", 
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
    );

    // 2. Entrance + Looping floating bob animation for Right Illustration
    if (illustrationRef.current) {
      gsap.fromTo(illustrationRef.current,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.4, 
          ease: "power4.out",
          onComplete: () => {
            gsap.to(illustrationRef.current, {
              y: -12,
              duration: 3.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            });
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden bg-dot-pattern bg-gradient-to-br from-[#F0F9FF] via-background to-background dark:from-[#0a1931]/30 dark:via-background dark:to-background"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left items-center md:items-start">
            <div className="space-y-4 animate-item opacity-0">
              {/* Premium Pill Badge for Subtitle */}
              <span className="inline-block bg-accent/15 text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                Trusted by 150+ Enterprise Clients
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                Scale Your Team with<br className="hidden sm:block" /> Elite Engineers in 48 Hours
              </h1>
            </div>

            {/* Shortened Body Copy (Step 1 & 2: Condensed + 1.5 line height) */}
            <div className="text-sm md:text-base text-foreground/90 leading-[1.5] max-w-[440px] animate-item opacity-0 space-y-2.5 text-left text-pretty">
              <p>Skip lengthy hiring. We deploy pre-vetted engineers, DevOps specialists, and cloud architects ready for your tech&nbsp;stack.</p>
              <p className="font-semibold text-foreground">Productive from day one—no ramp-up, no&nbsp;hassles.</p>
            </div>

            {/* CTA Buttons (Step 2: Spacing optimized) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1 w-full sm:w-auto animate-item opacity-0">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] hover:-translate-y-0.5 group w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                onClick={handleScroll}
              >
                Find Your Engineers Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-border text-primary hover:bg-muted/10 font-semibold px-8 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <a href="#contact">Book a Free Discovery Call</a>
              </Button>
            </div>



            {/* Mobile-only illustration (hidden on desktop) */}
            <div className="block md:hidden w-full max-w-[280px] sm:max-w-[340px] aspect-[4/3] relative mt-6 mb-2 select-none pointer-events-none animate-item opacity-0">
              {/* Ambient glow behind the people */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/5 rounded-full blur-2xl -z-10 opacity-70" />
              <img
                src="/men_women_img.webp"
                alt="Everonix Technologies Enterprise Transformation"
                width={340}
                height={255}
                className="w-full h-full object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
              />
            </div>

            {/* Stats/Social Proof Ticker Grid */}
            <div className="w-full border-t border-border/40 mt-4 md:mt-5 pt-4 animate-item opacity-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[10px] sm:text-xs font-semibold tracking-wider font-mono text-foreground/90 text-left">
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>500+ Successful Placements</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>150+ Enterprise Clients</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>98.4% On-Time Delivery</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>15+ Years of Excellence</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Spacer for Desktop Absolute Illustration */}
          <div className="hidden md:block h-[420px] pointer-events-none" />
        </div>

        {/* Decorative absolute hero illustration on the right (Desktop only) */}
        <div
          ref={illustrationRef}
          className="absolute top-[6%] bottom-auto right-0 z-20 w-[46%] h-[85%] hidden md:flex items-end justify-end pointer-events-none select-none opacity-0"
        >
          {/* Ambient glow behind the people */}
          <div className="absolute right-[5%] bottom-[15%] w-[85%] aspect-square bg-gradient-to-br from-accent/20 to-primary/5 rounded-full blur-3xl -z-10 opacity-80" />
          
          <img
            src="/men_women_img.webp"
            alt="Everonix Technologies Enterprise Transformation"
            width={800}
            height={600}
            loading="eager"
            className="h-full w-auto object-contain object-bottom select-none z-20 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  );
}
