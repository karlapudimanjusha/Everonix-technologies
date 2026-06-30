import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location === '/';

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity">
          <img
            src="/everonix-logo-mark.svg"
            alt="Everonix Logo"
            className="h-8 w-8 md:h-10 md:w-10 transition-transform group-hover:scale-110"
          />
          <span className="font-bold text-lg md:text-xl text-primary hidden sm:inline">
            Everonix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-everonix')}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-pointer"
              >
                Why Everonix
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-pointer"
              >
                Case Studies
              </button>
            </>
          ) : (
            <>
              <Link href="/#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/#why-everonix" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Why Everonix
              </Link>
              <Link href="/#case-studies" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Case Studies
              </Link>
            </>
          )}

          <Link href="/academy" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Academy
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Insights
          </Link>
          <Link href="/careers" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Careers
          </Link>

          {isHomePage ? (
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-pointer"
            >
              Contact
            </button>
          ) : (
            <Link href="/#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 transition-all duration-200 hover:shadow-lg"
            onClick={() => {
              if (isHomePage) {
                scrollToSection('contact');
              } else {
                window.location.href = '/#contact';
              }
            }}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {isHomePage ? (
              <>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left cursor-pointer"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection('why-everonix');
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left cursor-pointer"
                >
                  Why Everonix
                </button>
                <button
                  onClick={() => {
                    scrollToSection('case-studies');
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left cursor-pointer"
                >
                  Case Studies
                </button>
              </>
            ) : (
              <>
                <Link href="/#services" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Services
                </Link>
                <Link href="/#why-everonix" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why Everonix
                </Link>
                <Link href="/#case-studies" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </>
            )}

            <Link href="/academy" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Academy
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Insights
            </Link>
            <Link href="/careers" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Careers
            </Link>

            {isHomePage ? (
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsOpen(false);
                }}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left cursor-pointer"
              >
                Contact
              </button>
            ) : (
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            )}

            <Button
              className="bg-accent hover:bg-accent/90 text-white font-semibold w-full mt-4"
              onClick={() => {
                setIsOpen(false);
                if (isHomePage) {
                  scrollToSection('contact');
                } else {
                  window.location.href = '/#contact';
                }
              }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
