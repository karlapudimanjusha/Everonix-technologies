import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from 'wouter';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent is already given
    const consent = localStorage.getItem('everonix_cookie_consent');
    if (!consent) {
      // Small delay before showing the banner for premium feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('everonix_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('everonix_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-white/95 dark:bg-gray-950 border border-border/80 rounded-xl shadow-2xl p-5 md:p-6 backdrop-blur-md text-left"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-accent/5 text-accent rounded-lg flex-shrink-0 mt-0.5">
              <ShieldCheck size={20} />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h4 className="font-bold text-primary text-sm sm:text-base">Cookie Compliance Settings</h4>
                <button 
                  onClick={handleDecline} 
                  className="text-foreground/40 hover:text-foreground hover:bg-muted rounded-full p-1 transition-all cursor-pointer"
                  aria-label="Dismiss cookie banner"
                >
                  <X size={14} />
                </button>
              </div>
              <p className="text-xs text-foreground/75 leading-relaxed mb-4">
                We use cookies to analyze web traffic, optimize loading performance, and support our compliance framework. Review our{' '}
                <Link href="/cookies" className="text-accent underline font-semibold hover:text-accent/90">
                  Cookie Policy
                </Link>{' '}
                to learn more.
              </p>
              <div className="flex gap-2 justify-end">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDecline}
                  className="text-xs border-border hover:bg-secondary/10 px-3 cursor-pointer"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="text-xs bg-accent hover:bg-accent/90 text-white px-4 cursor-pointer"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
