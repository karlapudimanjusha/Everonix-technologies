import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { WaveDivider } from './SectionDivider';

export default function HeroSection() {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden bg-dot-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Transform Your Enterprise
                </span>
              </h1>
              <p className="text-lg md:text-xl text-accent font-semibold uppercase tracking-wide">
                Technology + Talent Excellence
              </p>
            </div>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Everonix Technologies partners with enterprises to accelerate innovation through integrated technology solutions and elite talent acquisition. We don't just deliver services—we drive transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] hover:-translate-y-0.5 group"
                onClick={handleScroll}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="hover:scale-[1.02] transition-transform">
                <p className="text-2xl md:text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground/60">Professionals</p>
              </div>
              <div className="hover:scale-[1.02] transition-transform">
                <p className="text-2xl md:text-3xl font-bold text-accent">150+</p>
                <p className="text-sm text-foreground/60">Clients Served</p>
              </div>
              <div className="hover:scale-[1.02] transition-transform">
                <p className="text-2xl md:text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl"></div>
            <img
              src="/everonix-hero-bg.png"
              alt="Enterprise Transformation"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative mt-12 md:mt-20">
        <WaveDivider color="#ffffff" />
      </div>
    </section>
  );
}
