import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '@/lib/config';
import { z } from 'zod';

const requestSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(7, { message: 'Phone must be at least 7 characters' }),
  company: z.string().min(2, { message: 'Company name is required' }),
  positions: z.string().min(1, { message: 'Please select number of positions' }),
  staffingType: z.string().min(1, { message: 'Please select a staffing type' }),
  message: z.string().min(10, { message: 'Please write a short description of your needs' }),
});

interface RequestTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function RequestTalentModal({ isOpen, onClose, defaultService = 'IT Staffing' }: RequestTalentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    positions: '1-3',
    staffingType: defaultService,
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
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
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = requestSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error('Please resolve the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: `Positions: ${formData.positions}\nStaffing Type: ${formData.staffingType}\nDetails: ${formData.message}`
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success('Talent request submitted successfully!');
      } else {
        toast.error('Submission failed. Please try again.');
      }
    } catch (err) {
      toast.error('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-card text-card-foreground border border-border/50 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center hover:bg-muted rounded-full transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} className="text-muted-foreground" aria-hidden="true" />
            </button>

            {isSuccess ? (
              <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
                <CheckCircle2 size={56} className="text-accent mb-4 animate-bounce" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                <p className="text-sm text-muted-foreground max-w-xs mb-6">
                  Thank you for your request. Our talent solutions advisor will review your needs and contact you within 2-4 hours.
                </p>
                <Button onClick={() => { setIsSuccess(false); onClose(); }} className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3">
                  Close Window
                </Button>
              </div>
            ) : (
              <>
                <div className="p-6 sm:p-8 border-b border-border/40">
                  <h2 className="text-2xl font-bold text-primary">Request Elite Talent</h2>
                  <p className="text-sm text-muted-foreground mt-1">Tell us about your hiring requirements and team scaling goals.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 overflow-y-auto flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Contact Name</label>
                      <Input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && <p className="text-[10px] text-destructive mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Company Name</label>
                      <Input
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={handleChange}
                        className={errors.company ? 'border-destructive' : ''}
                      />
                      {errors.company && <p className="text-[10px] text-destructive mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Business Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && <p className="text-[10px] text-destructive mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Direct Phone</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && <p className="text-[10px] text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Staffing Mode</label>
                      <select
                        name="staffingType"
                        value={formData.staffingType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                      >
                        <option value="IT Staffing">IT Staffing & Placement</option>
                        <option value="Non-IT Staffing">Non-IT Staffing</option>
                        <option value="Executive Search">Executive Search</option>
                        <option value="Contract Staffing">Contract Staffing</option>
                        <option value="Permanent Placement">Permanent Placement</option>
                        <option value="RPO">Recruitment Process Outsourcing (RPO)</option>
                        <option value="MSP">Managed Service Provider (MSP)</option>
                        <option value="Payroll & Compliance">Payroll & Compliance</option>
                        <option value="HR Consulting">HR Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Number of Positions</label>
                      <select
                        name="positions"
                        value={formData.positions}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                      >
                        <option value="1-3">1 - 3 Positions</option>
                        <option value="4-10">4 - 10 Positions</option>
                        <option value="10-30">10 - 30 Positions</option>
                        <option value="30+">30+ Positions (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Describe Your Talent Requirements</label>
                    <Textarea
                      name="message"
                      rows={3}
                      placeholder="List key roles, technical stacks, operational requirements, or certification needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && <p className="text-[10px] text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 transition-all duration-200 mt-4 cursor-pointer"
                  >
                    {isSubmitting ? 'Submitting Requirement...' : (
                      <span className="flex items-center gap-2">
                        Submit Talent Request
                        <Send size={16} aria-hidden="true" />
                      </span>
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
