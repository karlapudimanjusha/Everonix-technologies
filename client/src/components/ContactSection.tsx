import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from 'lucide-react';
import { toast } from 'sonner';
import { API_KEY, API_URL } from '@/lib/config';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Field-level validation check
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please correct the validation errors before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you! We have received your message and will respond within 2 hours.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setErrors({});
      } else {
        toast.error('Submission failed. Please try again later or contact us directly.');
      }
    } catch (err) {
      toast.error('A network error occurred. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-[#1a3a52] to-[#12283a]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-white"
          >
            <p className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Let's discuss how Everonix Technologies can help your organization achieve its goals. Our team is ready to listen and provide tailored solutions.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a
                    href="mailto:Info@everonixtek.com"
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    Info@everonixtek.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <a
                    href="tel:+917995453084"
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    +91 79954 53084
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p className="text-white/80">
                    Garuda Mall, 3rd floor,<br />
                    Upstairs Pantaloons Showroom,<br />
                    Radha Govinda Nagar,<br />
                    Leela Mahal Road - Mangalam,<br />
                    Tirupati, Andhra Pradesh - 517501
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/everonix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 hover:text-accent transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/everonix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 hover:text-accent transition-colors text-white"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com/everonix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 hover:text-accent transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-2xl border border-border/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-red-500 text-xs mt-1 font-semibold text-left">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-red-500 text-xs mt-1 font-semibold text-left">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Company Name (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-red-500 text-xs mt-1 font-semibold text-left">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 transition-all duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </>
                )}
              </Button>

              <p className="text-xs text-foreground/60 text-center font-mono font-semibold tracking-wide">
                Our team responds within 2 business hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
