import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/everonix-logo-mark.svg"
                alt="Everonix Logo"
                className="h-8 w-8"
              />
              <span className="font-bold text-lg">Everonix</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transforming enterprises through technology and talent excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  IT Staffing
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Training Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-everonix" className="text-white/70 hover:text-accent transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Cookie Policy
                </a>
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
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <span className="text-sm font-semibold">Twitter</span>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm font-semibold">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
