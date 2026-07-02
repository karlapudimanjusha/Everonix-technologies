import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How fast can Everonix deploy engineering cohorts?",
      answer: "We typically submit matching vetted profiles in under 48 hours. Team integrations (Slack, Jira, and GitHub access) typically begin in less than 5 business days from service agreement signature."
    },
    {
      question: "What compliance and security screenings do you run?",
      answer: "Every developer undergoes background screening, employment checks, and secure coding (OWASP) training. In addition, our teams follow SOC-2 Type II audit alignments, HIPAA regulatory protections, and absolute GDPR compliance."
    },
    {
      question: "Do you support contract-to-hire options?",
      answer: "Yes. We offer flexible configurations including contract staffing, permanent placement, and contract-to-hire. Contract-to-hire lets you evaluate engineers on-the-job before committing to a permanent role."
    },
    {
      question: "How do you handle timezone alignments?",
      answer: "Our engineers match your native working schedule (Eastern, Central, Pacific) with a guaranteed minimum of 5 overlap working hours for team standups and synchronous collaboration."
    },
    {
      question: "What SLA guarantees do you offer for placements?",
      answer: "We maintain a 99.2% SLA adherence and 98.4% client retention rate (2025 Audit). In the rare case of attrition, our talent network guarantees replacement profiles within 48 hours to prevent timeline slip."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-background border-t border-border/40">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/15 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-4">
            <HelpCircle size={13} />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">
            Enterprise Staffing Queries Answered
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our developer vetting, compliance setups, and SLA delivery models.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-border/60 rounded-xl overflow-hidden bg-card transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-primary hover:text-accent transition-colors cursor-pointer select-none focus:outline-none"
                >
                  <span className="text-base md:text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-foreground/75 text-sm sm:text-base leading-relaxed border-t border-border/40 pt-4 bg-muted/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
