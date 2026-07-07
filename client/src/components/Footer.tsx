import { Link } from 'wouter';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3a52] text-white border-t border-white/5">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/everonix-logo.svg"
                alt="Everonix Logo"
                className="h-10 w-10"
              />
              <span className="font-bold text-lg">Everonix Technologies</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Scaling enterprise engineering teams through secure technology infrastructure and vetted staffing solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/services/it-staffing" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  IT Staffing
                </Link>
              </li>
              <li>
                <Link href="/services/non-it-staffing" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Non-IT Staffing
                </Link>
              </li>
              <li>
                <Link href="/services/executive-search" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Executive Search
                </Link>
              </li>
              <li>
                <Link href="/services/contract-staffing" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link href="/services/permanent-placement" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Permanent Recruitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold text-white mb-4">Sectors Served</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/industries/technology" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/bfsi" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  BFSI & Banking
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  All Sectors
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/70 hover:text-accent transition-colors text-sm py-2 block md:py-0">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Everonix Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/everonix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors min-h-[44px] px-2.5 inline-flex items-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/everonix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors min-h-[44px] px-2.5 inline-flex items-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com/everonix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors min-h-[44px] px-2.5 inline-flex items-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
