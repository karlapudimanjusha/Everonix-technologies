import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { articles } from "@/lib/data/blogData";
import { X, Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { Button } from "@/components/ui/button";

interface BlogDetailModalProps {
  id: number;
}

export default function BlogDetailModal({ id }: BlogDetailModalProps) {
  const [, setLocation] = useLocation();
  const modalRef = useRef<HTMLDivElement>(null);
  const article = articles.find((a) => a.id === id);

  const handleClose = () => {
    setLocation("/blog");
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

  if (!article) {
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
        <SEO title={article.title} description={article.excerpt} />

        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-accent h-11 w-11 flex items-center justify-center rounded-lg hover:bg-muted transition-colors cursor-pointer z-10"
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        {/* Content Header Banner */}
        <div className={`h-64 ${article.image} flex items-end p-6 md:p-8 border-b border-border/40 relative`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="bg-accent text-white font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded mb-3 inline-block">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 font-mono">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8 flex-1">
          {/* Metadata Bar */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pb-6 border-b border-border/40 mb-6 font-mono">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="space-y-6 text-foreground/80 leading-relaxed text-base md:text-lg">
            <p className="font-semibold text-foreground text-lg md:text-xl">
              {article.excerpt}
            </p>
            <p>
              In today's fast-paced enterprise landscape, keeping ahead of technological shifts is no longer a luxury—it is an absolute survival imperative. Across all sectors, organizations are finding that traditional operational methods are falling short of rising customer expectations and aggressive digital native competitors.
            </p>
            <p>
              By leveraging advanced automation pipelines, enterprise groups can streamline workflows, eradicate human-error operational delays, and release developer output at scale. The key lies in implementing robust, automated feedback loops and training team leaders to manage transition challenges smoothly.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-foreground font-semibold my-6 bg-accent/5 py-4 px-6 rounded-r">
              "The shift toward continuous transformation is not just a technology issue; it is a structural change that demands absolute alignment across talent acquisition, system engineering, and executive strategy."
            </blockquote>
            <p>
              As we look toward the remainder of 2026 and beyond, we expect these paradigms to consolidate further. Organizations that act decisively today to restructure legacy pipelines and invest in continuous learning programs will be positioned to lead the next decade of digital growth.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-border/40">
            <Button
              onClick={handleClose}
              variant="ghost"
              className="text-primary hover:text-accent font-mono text-xs tracking-wider uppercase px-4 py-3 gap-2 cursor-pointer hover:bg-muted/10 min-h-[44px] inline-flex items-center"
            >
              <ArrowLeft size={16} /> Back to Insights
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
