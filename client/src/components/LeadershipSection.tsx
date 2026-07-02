import { Linkedin, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const leaders = [
  {
    name: "Satheesh Kuncham",
    role: "President",
    initials: "SK",
    gradient: "from-blue-600 to-indigo-600",
    shortBio: "15+ years of enterprise software scaling, organizational strategy, and client relations. Drives our technology vision and global operations.",
    fullBio: "Satheesh Kuncham is the President of Everonix Technologies. With over 15 years of industry-leading experience in enterprise systems architecture and digital delivery networks, Satheesh drives the company's global strategy, technology vision, and corporate relations. Under his stewardship, Everonix has successfully delivered scalable software cohorts to Fortune 500 groups and high-growth SaaS platforms alike.",
    focusAreas: ["Corporate Strategy", "Enterprise Partnerships", "Technology Direction"]
  },
  {
    name: "Manjusha Karlapudi",
    role: "Vice President",
    initials: "MK",
    gradient: "from-teal-500 to-emerald-600",
    shortBio: "Directs talent acquisition, vetting pipelines, and SLA compliance. Over a decade engineering multi-stage developer screening frameworks.",
    fullBio: "Manjusha Karlapudi serves as the Vice President at Everonix. She directs talent acquisition frameworks, technical evaluation pipelines, and client alignment SLA protocols. Manjusha has spent over a decade design-engineering multi-stage vetting processes that guarantee only the top 4.2% of engineers pass to the onboarding stage, ensuring high quality and zero ramp-up time for client sprints.",
    focusAreas: ["Vetting Operations", "Talent Acquisition", "SLA Compliance"]
  },
  {
    name: "Thirumala",
    role: "Director",
    initials: "T",
    gradient: "from-purple-500 to-pink-600",
    shortBio: "Manages cohort integration, engineering delivery metrics, and client onboarding. Expert in agile workflow transitions.",
    fullBio: "Thirumala is the Director of Operations and Cohort Integration. He manages daily operations, engineering delivery metrics, and cross-functional team coordination. Thirumala specializes in agile workflows, ensuring that deployed developers seamlessly transition into clients' existing Slack, Jira, and Git repositories with zero administrative friction.",
    focusAreas: ["Operations Management", "Agile Workflows", "Team Onboarding"]
  },
  {
    name: "Maneiah Kuncham",
    role: "Managing Director",
    initials: "MK",
    gradient: "from-cyan-500 to-blue-600",
    shortBio: "Oversees corporate finance, resource allocation, and compliance frameworks. Ensures SOC-2 and background verification integrity.",
    fullBio: "Maneiah Kuncham is the Managing Director of Everonix. He oversees the corporate finance, legal compliance, and strategic resource allocation divisions. Maneiah focuses on scaling operational capacity while maintaining strict compliance with SOC-2, GDPR, and background checks across our global staffing networks.",
    focusAreas: ["Corporate Finance", "Legal Compliance", "Scaling Operations"]
  }
];

export default function LeadershipSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border/40 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Governance & Execution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our executive board coordinates technical vetting, operations alignment, and enterprise security frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="group relative bg-card border border-border/60 hover:border-accent/40 rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 text-left flex flex-col justify-between h-[360px] overflow-hidden select-none">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 bg-gradient-to-br ${leader.gradient} text-white shadow-md group-hover:scale-105 transition-transform duration-300 font-mono`}>
                      {leader.initials}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-200">{leader.name}</h3>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">{leader.role}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{leader.shortBio}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform duration-200 mt-4 font-sans">
                    Read full profile <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[550px] p-6 md:p-8 rounded-2xl border border-border bg-card shadow-2xl">
                <DialogHeader className="text-left pb-4 border-b border-border/40">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl bg-gradient-to-br ${leader.gradient} text-white shadow-md font-mono`}>
                      {leader.initials}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-primary">{leader.name}</DialogTitle>
                      <p className="text-sm font-semibold text-accent uppercase tracking-wider">{leader.role}</p>
                    </div>
                  </div>
                </DialogHeader>

                <div className="py-6 text-left space-y-4">
                  <DialogDescription className="text-base text-foreground/80 leading-relaxed font-normal">
                    {leader.fullBio}
                  </DialogDescription>
                  
                  <div className="pt-4 border-t border-border/40">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.focusAreas.map((focus, fIdx) => (
                        <span key={fIdx} className="bg-secondary/40 border border-border text-foreground/80 text-xs px-3 py-1 rounded-full font-medium">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-border/40">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0077b5] hover:bg-[#0077b5]/90 px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
