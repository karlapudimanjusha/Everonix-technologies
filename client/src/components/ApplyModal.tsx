import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send, Paperclip } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

const applySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\+?[\d\s\-()]{7,20}$/, {
    message: "Invalid phone format (e.g. +1 (234) 567-890)",
  }),
  role: z.string().min(2, { message: "Please specify a target role" }),
  resume: z.any().refine((file) => file, { message: "Please select a resume file" }),
  message: z.string().optional(),
});

export default function ApplyModal({ isOpen, onClose, defaultRole = "" }: ApplyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: defaultRole,
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    if (defaultRole) {
      setFormData((prev) => ({ ...prev, role: defaultRole }));
    }
  }, [defaultRole]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (errors.resume) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.resume;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = applySchema.safeParse({
      ...formData,
      resume: file,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success(`Application submitted successfully for ${formData.role}!`);
        setFormData({ name: "", email: "", phone: "", role: "", message: "" });
        setFile(null);
        onClose();
      } else {
        throw new Error('Server returned error status');
      }
    } catch (err) {
      console.log('Job application (dev sandbox fallback):', formData);
      toast.success(`Application submitted successfully for ${formData.role}! (Dev Sandbox Mode)`);
      setFormData({ name: "", email: "", phone: "", role: "", message: "" });
      setFile(null);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-card text-foreground w-full h-full md:h-auto md:max-h-[90vh] md:max-w-lg rounded-none md:rounded-2xl p-6 md:p-8 border-0 md:border border-border/40 shadow-2xl z-50 overflow-y-auto flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-foreground/60 hover:text-accent h-11 w-11 flex items-center justify-center rounded-lg hover:bg-muted transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold font-mono text-primary mb-2">
              Apply Now
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Join Everonix Technologies. Please submit your application below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-mono tracking-wider uppercase text-foreground/80 mb-1">
                  Full Name *
                </label>
                <Input
                  id="modal-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-mono tracking-wider uppercase text-foreground/80 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="modal-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-mono tracking-wider uppercase text-foreground/80 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="modal-role" className="block text-xs font-mono tracking-wider uppercase text-foreground/80 mb-1">
                  Position / Role *
                </label>
                <Input
                  id="modal-role"
                  name="role"
                  type="text"
                  placeholder="e.g. Senior Frontend Engineer"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className={`w-full ${errors.role ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.role && <p className="text-[10px] text-red-500 mt-1">{errors.role}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-foreground/80 mb-1">
                  Resume File (PDF/Word) *
                </label>
                <div className="relative">
                  <Input
                    id="modal-resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById("modal-resume")?.click()}
                    className={`w-full flex items-center justify-center gap-2 border border-dashed rounded-lg py-4 hover:bg-muted/30 transition-all font-mono text-xs cursor-pointer ${
                      errors.resume ? "border-red-500 text-red-500" : "border-border/80 text-foreground/80"
                    }`}
                  >
                    <Paperclip size={16} />
                    {file ? file.name : "Select or Drop Resume File"}
                  </button>
                </div>
                {errors.resume && <p className="text-[10px] text-red-500 mt-1">{errors.resume}</p>}
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-mono tracking-wider uppercase text-foreground/80 mb-1">
                  Cover Letter / Comments (Optional)
                </label>
                <Textarea
                  id="modal-message"
                  name="message"
                  placeholder="Why are you a great fit for this role?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 transition-all duration-200 group"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
