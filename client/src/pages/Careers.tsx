import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { jobs, cultureValues, benefits } from "@/lib/data/careersData";
import JobCard from "@/components/JobCard";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 bg-dot-pattern">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build your career with Everonix. We're looking for talented professionals who are passionate about technology and innovation. Help us transform enterprises and shape the future of IT.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-[1.02] hover:-translate-y-0.5 transition-premium shadow-none">
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
              At Everonix, we believe that great technology comes from great people. Our culture is built on innovation, collaboration, and a commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues.map((value, idx) => (
              <Card key={idx} className="p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-border/60 bg-dot-pattern rounded-2xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">500+</div>
                <p className="text-xl text-muted-foreground">
                  Happy Employees Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              We're actively hiring talented professionals. Find your next opportunity below.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? Send us your resume and we'll keep it on file.
            </p>
            <Button variant="outline">Submit Your Resume</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Everonix and be part of a team that's transforming enterprises through technology and talent excellence.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Careers
          </Button>
        </div>
      </section>
    </div>
  );
}
