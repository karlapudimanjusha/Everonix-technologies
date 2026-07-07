import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { caseStudies } from "./CaseStudiesSection";
import { X, ArrowLeft, Shield, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CaseStudyDetailModalProps {
  id: number;
}

export default function CaseStudyDetailModal({ id }: CaseStudyDetailModalProps) {
  const [, setLocation] = useLocation();
  const modalRef = useRef<HTMLDivElement>(null);
  const study = caseStudies.find((s) => s.id === id);

  const handleClose = () => {
    setLocation("/");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }

      if (e.key === "Tab") {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousActiveElement = document.activeElement as HTMLElement;

    setTimeout(() => {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, []);

  if (!study) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.98, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-card text-foreground rounded-none md:rounded-2xl w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl border border-border/40 shadow-2xl z-50 overflow-y-auto flex flex-col"
      >
        {/* SEO Header */}
        <SEO title={study.title} description={`${study.client} - ${study.challenge}`} />

        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-accent h-11 w-11 flex items-center justify-center rounded-lg hover:bg-muted transition-colors cursor-pointer z-10"
          aria-label="Close details"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Header Block */}
        <div className="p-6 md:p-12 bg-gradient-to-br from-muted/30 to-accent/5 bg-dot-pattern border-b border-border/40 relative">
          <div className="max-w-2xl mt-4">
            <Badge variant="secondary" className="mb-4">
              {study.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3 font-mono leading-tight">
              {study.title}
            </h1>
            <p className="text-sm md:text-base text-foreground/70 font-semibold uppercase tracking-wider font-mono">
              Client: {study.client}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-12 flex-1">
          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 p-4 sm:p-6 bg-accent/5 rounded-xl border border-accent/10 mb-8">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-accent mb-1">{metric.value}</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-foreground/70 font-mono">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Structured Sections */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-lg md:text-xl">
                <Shield className="w-5 h-5 text-accent" aria-hidden="true" />
                <h2>The Business Challenge</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                {study.challenge} Before engaging with Everonix, the client faced significant bottlenecks due to manual orchestration of deployments, lack of developer coordination pipelines, and escalating hosting fees.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-lg md:text-xl">
                <Sparkles className="w-5 h-5 text-accent" aria-hidden="true" />
                <h2>Our Transformation Strategy</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                {study.solution} We deployed a team of elite cloud developers and infrastructure architects to overhaul their operations. By implementing a standardized container system, continuous integration hooks, and secure secrets management, we established a resilient, self-healing framework.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-lg md:text-xl">
                <TrendingUp className="w-5 h-5 text-accent" aria-hidden="true" />
                <h2>Key Outcomes & Metrics</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                Following complete deployment, the client witnessed instantaneous improvements. System load times plummeted, operational overhead dropped by double-digit percentages, and internal developer surveys reported a 90% rise in pipeline satisfaction ratings.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border/40">
            <Button
              onClick={handleClose}
              variant="ghost"
              className="text-primary hover:text-accent font-mono text-xs tracking-wider uppercase px-4 py-3 gap-2 cursor-pointer hover:bg-muted/10 min-h-[44px] inline-flex items-center"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Back to Home
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
