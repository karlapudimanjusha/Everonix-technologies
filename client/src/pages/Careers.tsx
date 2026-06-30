import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { jobs, cultureValues, benefits } from "@/lib/data/careersData";
import JobCard from "@/components/JobCard";
import ApplyModal from "@/components/ApplyModal";
import SEO from "@/components/SEO";

export default function Careers() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const scrollToOpenings = () => {
    const section = document.getElementById("open-positions");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setIsApplyOpen(true);
  };

  const handleResetFilters = () => {
    setSelectedDepartment("All");
    setSelectedLocation("All");
  };

  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];
  const locations = ["All", ...Array.from(new Set(jobs.map((j) => j.location)))];

  const filteredJobs = jobs.filter((job) => {
    const deptMatch = selectedDepartment === "All" || job.department === selectedDepartment;
    const locMatch = selectedLocation === "All" || job.location === selectedLocation;
    return deptMatch && locMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO title="Careers - Join Our Vetted Talent Network" />
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-r from-muted/50 to-accent/10 bg-dot-pattern">
        <div className="container">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up">
              Build your career with Everonix. We're looking for talented professionals who are passionate about technology and innovation. Help us transform enterprises and shape the future of IT.
            </p>
            <Button
              size="lg"
              onClick={scrollToOpenings}
              className="bg-accent hover:bg-accent/90 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium shadow-none cursor-pointer text-white"
            >
              View All Openings
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Everonix, we believe that great technology comes from great people. Our culture is built on innovation, collaboration, and a commitment to high-performance delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues.map((value, idx) => (
              <Card key={idx} className="p-5 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Comprehensive Benefits
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We invest in our people. Our comprehensive benefits package is designed to support your health, growth, and financial security.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-accent text-xl mt-1">✓</div>
                    <p className="text-foreground text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Card Cover replacing Dotted Box */}
            <div className="relative overflow-hidden rounded-2xl h-64 md:h-96 group border border-border/40 shadow-lg select-none">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Everonix Technologies engineering team collaborating in a modern workspace"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/35 to-transparent flex items-end p-8 md:p-12" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white text-left z-10">
                <div className="text-4xl md:text-5xl font-bold mb-1.5 font-mono">500+</div>
                <p className="text-xs md:text-sm text-white/85 font-medium tracking-wide uppercase font-mono">
                  Professionals Worldwide & Growing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 md:py-24 scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              We're actively hiring talented professionals. Find your next opportunity below.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 max-w-2xl mx-auto">
            <div className="w-full sm:w-1/2 text-left">
              <label className="block text-[10px] font-mono font-bold text-primary uppercase tracking-wider mb-2">Filter by Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm cursor-pointer"
              >
                {departments.map((dept, i) => (
                  <option key={i} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="w-full sm:w-1/2 text-left">
              <label className="block text-[10px] font-mono font-bold text-primary uppercase tracking-wider mb-2">Filter by Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm cursor-pointer"
              >
                {locations.map((loc, i) => (
                  <option key={i} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={() => handleApply(job.title)} />
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-border/80 rounded-2xl bg-card p-6 max-w-md mx-auto">
                <p className="text-muted-foreground text-sm mb-4">No open positions matching your search criteria.</p>
                <Button onClick={handleResetFilters} variant="outline" className="border-border text-primary hover:bg-primary/5 cursor-pointer">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Don't see a role that fits? Send us your resume and we'll keep it on file.
            </p>
            <Button variant="outline" onClick={() => handleApply("General Application")} className="border-border text-primary hover:bg-primary/5 cursor-pointer">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-muted/50 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Everonix and be part of a team that's scaling enterprise engineering through technology and talent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto max-w-md mx-auto">
            <Button size="lg" onClick={scrollToOpenings} className="bg-accent hover:bg-accent/90 cursor-pointer text-white w-full sm:w-auto">
              Explore Careers
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border border-border text-primary hover:bg-primary/5 font-semibold transition-premium hover:scale-[1.02] hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
            >
              <a href="/#contact">Book a Discovery Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        defaultRole={selectedRole}
      />
    </div>
  );
}
