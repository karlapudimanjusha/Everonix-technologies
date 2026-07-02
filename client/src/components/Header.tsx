import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight, CheckCircle2, Star, Code, Users, Search, Zap, ShieldCheck, Briefcase, Award, ArrowRight, Heart, ShoppingCart, Home, GraduationCap, Globe, Landmark, Settings, PhoneCall, Film, Compass, Car, DollarSign, Activity, Handshake, Building2, ClipboardCheck, TrendingUp, UserPlus, UserCheck, Share2, Headphones, Cloud, Database, Cpu, Lock, CheckSquare, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useRequestTalent } from '@/contexts/RequestTalentContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const { openRequestModal } = useRequestTalent();
  const { theme, toggleTheme } = useTheme();

  // Desktop Mega Menu states
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'industries' | null>(null);

  // Mobile Accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location === '/';

  const isActiveLink = (path: string) => {
    if (path === '/') return location === '/';
    return location.startsWith(path);
  };

  const handleDropdownHover = (menu: 'services' | 'industries' | null) => {
    setActiveDropdown(menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-card/95 backdrop-blur-md border-b border-border/40 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container relative flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity">
          <img
            src="/everonix-logo.svg"
            alt="Everonix Logo"
            className="h-10 w-10 md:h-12 md:w-12 transition-transform group-hover:scale-110"
          />
          <span className="font-bold text-sm sm:text-lg md:text-xl text-primary">
            Everonix Technologies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {/* Services Mega Dropdown */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => handleDropdownHover('services')}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium hover:text-accent cursor-pointer py-4 ${isActiveLink('/services') ? 'text-accent font-semibold' : 'text-foreground/80'}`}>
              Services
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1200px] bg-card border border-border/80 rounded-2xl shadow-2xl p-0 z-50 overflow-hidden text-foreground"
                >
                  <div className="flex text-left">
                    {/* Left Sidebar — blue bg fills full height, text at top, image at bottom */}
                    <div className="w-[300px] flex-shrink-0 bg-muted/40 pt-5 px-5 border-r border-border/40 text-left relative overflow-hidden">
                      {/* Text content pinned to top — full width */}
                      <div className="relative z-10 flex flex-col gap-2">
                        <div>
                          <span className="text-[9px] font-bold text-accent tracking-widest uppercase mb-1 block">
                            Enterprise Staffing Partner
                          </span>
                          <h3 className="text-base font-bold text-primary leading-tight mb-1">
                            Exceptional Talent. Delivered Faster.
                          </h3>
                          <p className="text-[10px] text-foreground/70 leading-relaxed mb-2 font-medium">
                            We deliver vetted IT and non-IT professionals through flexible staffing solutions.
                          </p>
                          
                          <div className="space-y-1">
                            {[
                              '3-5 Days Time to Fill',
                              'Pre-Vetted & Skilled Talent',
                              'Flexible Engagement Models',
                              'Cost-Effective Solutions'
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                                <span className="text-[10.5px] font-semibold text-foreground/80">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* People image — absolute bottom-right, large */}
                      <img
                        src="/service_menu.png"
                        alt="Staffing Professionals"
                        className="absolute bottom-0 right-0 w-[80%] object-contain pointer-events-none select-none z-0"
                      />
                    </div>

                    {/* Middle columns & Right column (flex-grow) - compact padding */}
                    <div className="flex-grow p-4.5 grid grid-cols-4 gap-5">
                      {/* Column 1: Hiring Models */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5">
                          <Users size={14} className="text-accent" />
                          <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider text-left">Hiring Models</h4>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { title: 'Contract Staffing', desc: 'Hire skilled professionals on a flexible short-term basis.', link: '/services/contract-staffing', icon: Briefcase },
                            { title: 'Permanent Placement', desc: 'Build your team with long-term full-time professionals.', link: '/services/permanent-placement', icon: Users },
                            { title: 'Contract-to-Hire', desc: 'Evaluate talent before you make it permanent.', link: '/services/it-staffing', icon: Handshake },
                            { title: 'C2C Placements', desc: 'Hassle-free C2C hiring for contractors and consultants.', link: '/services/it-staffing', icon: Users },
                            { title: 'Executive Search', desc: 'Find leadership talent that drives your business forward.', link: '/services/executive-search', icon: UserCheck }
                          ].map((item, i) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link key={i} href={item.link} onClick={() => setActiveDropdown(null)} className="group flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-all cursor-pointer">
                                <div className="flex items-start gap-2.5">
                                  <div className="p-1.5 bg-accent/5 text-accent rounded-lg group-hover:bg-accent/10 transition-colors mt-0.5">
                                    <ItemIcon size={12} />
                                  </div>
                                  <div className="pr-1.5 text-left">
                                    <p className="text-[11px] font-bold text-primary group-hover:text-accent transition-colors leading-snug">{item.title}</p>
                                    <p className="text-[9px] text-foreground/50 leading-tight mt-0.5">{item.desc}</p>
                                  </div>
                                </div>
                                <ChevronRight size={12} className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 2: Enterprise Solutions */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5">
                          <Briefcase size={14} className="text-accent" />
                          <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider text-left">Enterprise Solutions</h4>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { title: 'RPO (Recruitment Process Outsourcing)', desc: 'End-to-end recruitment support to scale your hiring.', link: '/services/rpo', icon: Share2 },
                            { title: 'MSP (Managed Staffing Program)', desc: 'Optimize your contingent workforce with MSP.', link: '/services/msp', icon: Building2 },
                            { title: 'Payroll & Compliance', desc: 'Compliant payroll, benefits, and regulatory support.', link: '/services/payroll-compliance', icon: ShieldCheck },
                            { title: 'HR Consulting', desc: 'Strategic HR solutions to improve workforce efficiency.', link: '/services/hr-consulting', icon: Headphones }
                          ].map((item, i) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link key={i} href={item.link} onClick={() => setActiveDropdown(null)} className="group flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-all cursor-pointer">
                                <div className="flex items-start gap-2.5">
                                  <div className="p-1.5 bg-accent/5 text-accent rounded-lg group-hover:bg-accent/10 transition-colors mt-0.5">
                                    <ItemIcon size={12} />
                                  </div>
                                  <div className="pr-1.5 text-left">
                                    <p className="text-[11px] font-bold text-primary group-hover:text-accent transition-colors leading-snug">{item.title}</p>
                                    <p className="text-[9px] text-foreground/50 leading-tight mt-0.5">{item.desc}</p>
                                  </div>
                                </div>
                                <ChevronRight size={12} className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 3: Value-Added Services */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5">
                          <ShieldCheck size={14} className="text-accent" />
                          <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider text-left">Value-Added Services</h4>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { title: 'Workforce Planning', desc: 'Plan, hire, and manage the right talent at the right time.', link: '/services/hr-consulting', icon: TrendingUp },
                            { title: 'Background Verification', desc: 'Thorough screening for a safer hiring decision.', link: '/services/payroll-compliance', icon: ClipboardCheck },
                            { title: 'Visa & Immigration', desc: 'End-to-end visa and immigration support.', link: '/services/payroll-compliance', icon: Globe },
                            { title: 'Employee Onboarding', desc: 'Seamless onboarding for higher engagement.', link: '/services/hr-consulting', icon: UserPlus }
                          ].map((item, i) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link key={i} href={item.link} onClick={() => setActiveDropdown(null)} className="group flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-all cursor-pointer">
                                <div className="flex items-start gap-2.5">
                                  <div className="p-1.5 bg-accent/5 text-accent rounded-lg group-hover:bg-accent/10 transition-colors mt-0.5">
                                    <ItemIcon size={12} />
                                  </div>
                                  <div className="pr-1.5 text-left">
                                    <p className="text-[11px] font-bold text-primary group-hover:text-accent transition-colors leading-snug">{item.title}</p>
                                    <p className="text-[9px] text-foreground/50 leading-tight mt-0.5">{item.desc}</p>
                                  </div>
                                </div>
                                <ChevronRight size={12} className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 4: Popular Roles (Right Column) - compact text link list */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Zap size={14} className="text-accent" />
                          <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider text-left">Popular Roles</h4>
                        </div>
                        <div className="space-y-1">
                          {[
                            { name: 'Software Developers', icon: Code },
                            { name: 'Cloud Engineers', icon: Cloud },
                            { name: 'Data Scientists', icon: Database },
                            { name: 'DevOps Engineers', icon: Settings },
                            { name: 'QA Engineers', icon: CheckSquare },
                            { name: 'Cybersecurity Experts', icon: Lock },
                            { name: 'Salesforce Developers', icon: Cloud },
                            { name: 'AI / ML Engineers', icon: Cpu }
                          ].map((role, i) => {
                            const RoleIcon = role.icon;
                            return (
                              <Link
                                key={i}
                                href="/services/it-staffing"
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center gap-2 py-1 px-1.5 rounded hover:bg-accent/5 transition-all cursor-pointer text-left"
                              >
                                <RoleIcon size={10} className="text-accent/70 group-hover:text-accent flex-shrink-0" />
                                <span className="text-[10.5px] font-semibold text-primary group-hover:text-accent transition-colors leading-none">{role.name}</span>
                              </Link>
                            );
                          })}
                          <div className="pt-1.5 text-left">
                            <Link href="/services/it-staffing" onClick={() => setActiveDropdown(null)} className="text-[10px] font-mono font-bold text-accent hover:underline flex items-center gap-1 cursor-pointer">
                              View All Roles
                              <ArrowRight size={10} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar: Stats + Trust Badges + Explore All Services */}
                  <div className="bg-slate-50/50 border-t border-border/40 px-5 py-2.5 flex items-center justify-between gap-3 text-left">
                    {/* Stats */}
                    <div className="flex items-center gap-8 flex-shrink-0">
                      <div className="text-center">
                        <p className="text-sm font-bold text-accent leading-none">5,000+</p>
                        <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-wider leading-none mt-0.5">Placed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-accent leading-none">150+</p>
                        <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-wider leading-none mt-0.5">Clients</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-accent leading-none">98%</p>
                        <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-wider leading-none mt-0.5">Retention</p>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Users size={12} className="text-accent" />
                        Dedicated Manager
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Award size={12} className="text-accent" />
                        Industry Expertise
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Briefcase size={12} className="text-accent" />
                        Scalable Solutions
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Zap size={12} className="text-accent" />
                        Fast Turnaround
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        setActiveDropdown(null);
                        setLocation('/services/it-staffing');
                      }}
                      className="bg-accent hover:bg-accent/90 text-white text-[11px] font-bold px-4 py-1.5 cursor-pointer shadow-none h-8"
                    >
                      Explore All Services
                      <ArrowRight size={11} className="ml-1" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Mega Dropdown */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => handleDropdownHover('industries')}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium hover:text-accent cursor-pointer py-4 ${isActiveLink('/industries') ? 'text-accent font-semibold' : 'text-foreground/80'}`}>
              Industries
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'industries' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1200px] bg-card border border-border/80 rounded-2xl shadow-2xl p-0 z-50 overflow-hidden text-foreground"
                >
                  <div className="flex text-left">
                    {/* Left Sidebar — blue bg fills full height, text at top, image at bottom */}
                    <div className="w-[300px] flex-shrink-0 bg-muted/40 pt-5 px-5 border-r border-border/40 text-left relative overflow-hidden">
                      {/* Text content pinned to top — full width */}
                      <div className="relative z-10 flex flex-col gap-2">
                        <div>
                          <span className="text-[9px] font-bold text-accent tracking-widest uppercase mb-1 block">
                            Industries We Serve
                          </span>
                          <h3 className="text-base font-bold text-primary leading-tight mb-1">
                            Talent Solutions Across Every Industry
                          </h3>
                          <p className="text-[10px] text-foreground/70 leading-relaxed mb-2 font-medium">
                            We deliver skilled professionals tailored to your industry's unique challenges and compliance frameworks.
                          </p>
                          
                          <div className="space-y-1">
                            {[
                              'Domain-focused talent experts',
                              'Industry-aligned hiring solutions',
                              'Faster placements, better outcomes'
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                                <span className="text-[10.5px] font-semibold text-foreground/80">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* People image — absolute bottom-right, large */}
                      <img
                        src="/industries_menu.png"
                        alt="Industry Professionals"
                        className="absolute bottom-0 right-0 w-[80%] object-contain pointer-events-none select-none z-0"
                      />
                    </div>

                    {/* Middle columns & Right column (flex-grow) - compact padding */}
                    <div className="flex-grow p-4.5 grid grid-cols-4 gap-5">
                      {/* Column 1: Explore Industries */}
                      <div>
                        <div className="flex items-center gap-2 mb-3.5">
                          <Briefcase size={14} className="text-accent" />
                          <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider text-left">Explore Industries</h4>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { title: 'Information Technology', desc: 'Powering digital transformation with top IT talent.', icon: Code, link: '/industries/technology' },
                            { title: 'Healthcare & Life Sciences', desc: 'Connecting organization with compassionate healthcare professionals.', icon: Heart, link: '/industries/healthcare' },
                            { title: 'Manufacturing & Automotive', desc: 'Building stronger operations with skilled manufacturing talent.', icon: Settings, link: '/industries/manufacturing' },
                            { title: 'Banking & Financial Services', desc: 'Enabling financial excellence with industry experts.', icon: DollarSign, link: '/industries/bfsi' }
                          ].map((item, i) => {
                            const IndIcon = item.icon;
                            return (
                              <Link key={i} href={item.link} onClick={() => setActiveDropdown(null)} className="group flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-all cursor-pointer">
                                <div className="flex items-start gap-2.5">
                                  <div className="p-1.5 bg-accent/5 text-accent rounded-lg group-hover:bg-accent/10 transition-colors mt-0.5">
                                    <IndIcon size={12} />
                                  </div>
                                  <div className="pr-1.5 text-left">
                                    <p className="text-[11px] font-bold text-primary group-hover:text-accent transition-colors leading-snug">{item.title}</p>
                                    <p className="text-[9px] text-foreground/50 leading-tight mt-0.5">{item.desc}</p>
                                  </div>
                                </div>
                                <ChevronRight size={12} className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 2: Explore Industries */}
                      <div className="pt-7.5">
                        <div className="space-y-1.5">
                          {[
                            { title: 'Retail & E-commerce', desc: 'Delivering exceptional customer experiences with the right talent.', icon: ShoppingCart, link: '/industries/retail' },
                            { title: 'Logistics & Supply Chain', desc: 'Optimizing supply chains with agile and reliable professionals.', icon: Globe, link: '/industries/logistics' },
                            { title: 'Energy & Utilities', desc: 'Powering the future with skilled energy sector professionals.', icon: Zap, link: '/industries/logistics' },
                            { title: 'Construction & Real Estate', desc: 'Building tomorrow with skilled construction experts.', icon: Home, link: '/industries/manufacturing' }
                          ].map((item, i) => {
                            const IndIcon = item.icon;
                            return (
                              <Link key={i} href={item.link} onClick={() => setActiveDropdown(null)} className="group flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-all cursor-pointer">
                                <div className="flex items-start gap-2.5">
                                  <div className="p-1.5 bg-accent/5 text-accent rounded-lg group-hover:bg-accent/10 transition-colors mt-0.5">
                                    <IndIcon size={12} />
                                  </div>
                                  <div className="pr-1.5 text-left">
                                    <p className="text-[11px] font-bold text-primary group-hover:text-accent transition-colors leading-snug">{item.title}</p>
                                    <p className="text-[9px] text-foreground/50 leading-tight mt-0.5">{item.desc}</p>
                                  </div>
                                </div>
                                <ChevronRight size={12} className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 3: Explore Industries */}
                      <div className="pt-7.5">
                        <div className="space-y-1.5">
                          {[
                            { title: 'Pharmaceuticals', desc: 'Advancing life sciences with specialized industry talent.', icon: Activity, link: '/industries/healthcare' },
                            { title: 'Telecommunications', desc: 'Connecting the world with telecom talent and expertise.', icon: PhoneCall, link: '/industries/technology' },
                            { title: 'Media & Entertainment', desc: 'Creating impact with creative and digital professionals.', icon: Film, link: '/industries/technology' },
                            { title: 'Public Sector', desc: 'Supporting public services with skilled professionals.', icon: Landmark, link: '/industries/bfsi' }
                          ].map((item, i) => {
                            const IndIcon = item.icon;
                            return (
                              <Link key={i} href={item.link} onClick={() => setActiveDropdown(null)} className="group flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-all cursor-pointer">
                                <div className="flex items-start gap-2.5">
                                  <div className="p-1.5 bg-accent/5 text-accent rounded-lg group-hover:bg-accent/10 transition-colors mt-0.5">
                                    <IndIcon size={12} />
                                  </div>
                                  <div className="pr-1.5 text-left">
                                    <p className="text-[11px] font-bold text-primary group-hover:text-accent transition-colors leading-snug">{item.title}</p>
                                    <p className="text-[9px] text-foreground/50 leading-tight mt-0.5">{item.desc}</p>
                                  </div>
                                </div>
                                <ChevronRight size={12} className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 4: Popular Sectors - compact text link list */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Star size={14} className="text-accent" />
                          <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider text-left">Popular Sectors</h4>
                        </div>
                        <div className="space-y-1">
                          {[
                            { name: 'Information Technology', icon: Code, link: '/industries/technology' },
                            { name: 'Healthcare', icon: Heart, link: '/industries/healthcare' },
                            { name: 'Manufacturing', icon: Settings, link: '/industries/manufacturing' },
                            { name: 'Banking & Finance', icon: DollarSign, link: '/industries/bfsi' },
                            { name: 'Retail & E-commerce', icon: ShoppingCart, link: '/industries/retail' },
                            { name: 'Logistics & Supply', icon: Globe, link: '/industries/logistics' },
                            { name: 'Construction & Real Estate', icon: Home, link: '/industries/manufacturing' },
                            { name: 'Automotive', icon: Car, link: '/industries/manufacturing' }
                          ].map((ind, i) => {
                            const IndIcon = ind.icon;
                            return (
                              <Link
                                key={i}
                                href={ind.link}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center gap-2 py-1 px-1.5 rounded hover:bg-accent/5 transition-all cursor-pointer text-left"
                              >
                                <IndIcon size={10} className="text-accent/70 group-hover:text-accent flex-shrink-0" />
                                <span className="text-[10.5px] font-semibold text-primary group-hover:text-accent transition-colors leading-none">{ind.name}</span>
                              </Link>
                            );
                          })}
                          <div className="pt-1.5 text-left">
                            <Link href="/industries" onClick={() => setActiveDropdown(null)} className="text-[10px] font-mono font-bold text-accent hover:underline flex items-center gap-1 cursor-pointer">
                              View All Sectors
                              <ArrowRight size={10} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar: Stats + Trust Badges + Explore All Industries */}
                  <div className="bg-slate-50/50 border-t border-border/40 px-5 py-2.5 flex items-center justify-between gap-3 text-left">
                    {/* Stats */}
                    <div className="flex items-center gap-8 flex-shrink-0">
                      <div className="text-center">
                        <p className="text-sm font-bold text-accent leading-none">25+</p>
                        <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-wider leading-none mt-0.5">Sectors</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-accent leading-none">5,000+</p>
                        <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-wider leading-none mt-0.5">Placed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-accent leading-none">98%</p>
                        <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-wider leading-none mt-0.5">Retention</p>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Users size={12} className="text-accent" />
                        Dedicated Manager
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Award size={12} className="text-accent" />
                        Industry Expertise
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Briefcase size={12} className="text-accent" />
                        Scalable Solutions
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/75">
                        <Zap size={12} className="text-accent" />
                        Fast Turnaround
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        setActiveDropdown(null);
                        setLocation('/industries');
                      }}
                      className="bg-accent hover:bg-accent/90 text-white text-[11px] font-bold px-4 py-1.5 cursor-pointer shadow-none h-8"
                    >
                      Explore All Industries
                      <ArrowRight size={11} className="ml-1" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isActiveLink('/about') ? 'text-accent font-semibold' : 'text-foreground/80'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/testimonials"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isActiveLink('/testimonials') ? 'text-accent font-semibold' : 'text-foreground/80'
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isActiveLink('/blog') ? 'text-accent font-semibold' : 'text-foreground/80'
            }`}
          >
            Insights
          </Link>
          <Link
            href="/careers"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isActiveLink('/careers') ? 'text-accent font-semibold' : 'text-foreground/80'
            }`}
          >
            Careers
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button and Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 border border-border hover:bg-muted/10 rounded-lg cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-amber-500" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5 text-foreground/85" aria-hidden="true" />
            )}
          </Button>
          <Button
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 transition-all duration-200 hover:shadow-lg cursor-pointer"
            onClick={() => openRequestModal()}
          >
            Request Talent
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 border border-border hover:bg-muted/10 rounded-lg cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-amber-500" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5 text-foreground/85" aria-hidden="true" />
            )}
          </Button>
          <button
            className="h-12 w-12 flex items-center justify-center hover:bg-muted rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Outside click catcher to close mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 md:hidden bg-black/10 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-card border-b border-border overflow-y-auto max-h-[calc(100vh-64px)] absolute w-full left-0 z-50 shadow-xl"
          >
            <nav className="container py-6 flex flex-col gap-1 text-left">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between text-base font-medium py-3 border-b border-border/40 hover:text-accent transition-colors text-left cursor-pointer w-full min-h-[44px]"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-muted/5 pl-4 overflow-hidden border-b border-border/30 text-left"
                    >
                      <Link href="/services/it-staffing" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">IT Staffing</Link>
                      <Link href="/services/non-it-staffing" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Non-IT Staffing</Link>
                      <Link href="/services/executive-search" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Executive Search</Link>
                      <Link href="/services/contract-staffing" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Contract Staffing</Link>
                      <Link href="/services/permanent-placement" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Permanent Placement</Link>
                      <Link href="/services/rpo" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">RPO & MSP</Link>
                      <Link href="/services/payroll-compliance" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Payroll & HR Consulting</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between text-base font-medium py-3 border-b border-border/40 hover:text-accent transition-colors text-left cursor-pointer w-full min-h-[44px]"
                >
                  <span>Industries</span>
                  <ChevronDown size={16} className={`transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-muted/5 pl-4 overflow-hidden border-b border-border/30 text-left"
                    >
                      <Link href="/industries/technology" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Technology</Link>
                      <Link href="/industries/healthcare" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Healthcare</Link>
                      <Link href="/industries/manufacturing" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Manufacturing</Link>
                      <Link href="/industries/bfsi" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">BFSI</Link>
                      <Link href="/industries/retail" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Retail & E-commerce</Link>
                      <Link href="/industries/logistics" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-foreground/80 hover:text-accent">Logistics</Link>
                      <Link href="/industries" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-mono font-bold text-accent">View All Sectors</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-3 border-b border-border/40 transition-colors hover:text-accent min-h-[44px] flex items-center ${
                  isActiveLink('/about') ? 'text-accent font-semibold' : 'text-foreground'
                }`}
              >
                About Us
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-3 border-b border-border/40 transition-colors hover:text-accent min-h-[44px] flex items-center ${
                  isActiveLink('/testimonials') ? 'text-accent font-semibold' : 'text-foreground'
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-3 border-b border-border/40 transition-colors hover:text-accent min-h-[44px] flex items-center ${
                  isActiveLink('/blog') ? 'text-accent font-semibold' : 'text-foreground'
                }`}
              >
                Insights
              </Link>
              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-3 border-b border-border/40 transition-colors hover:text-accent min-h-[44px] flex items-center ${
                  isActiveLink('/careers') ? 'text-accent font-semibold' : 'text-foreground'
                }`}
              >
                Careers
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium py-3 border-b border-border/40 text-foreground hover:text-accent transition-colors min-h-[44px] flex items-center"
              >
                Contact
              </Link>

              <Button
                className="bg-accent hover:bg-accent/90 text-white font-semibold w-full min-h-[44px] mt-6 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  openRequestModal();
                }}
              >
                Request Talent
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
