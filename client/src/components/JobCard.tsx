import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, Users } from "lucide-react";
import { Job } from "@/lib/data/careersData";

interface JobCardProps {
  job: Job;
  onApply: () => void;
}

export default function JobCard({ job, onApply }: JobCardProps) {
  return (
    <Card className="p-6 md:p-8 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
            // {job.department} Position
          </p>
          
          <div className="flex flex-wrap items-start gap-2 sm:gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-primary">{job.title}</h3>
            <Badge variant="outline" className="border-border/80 font-mono text-xs">
              {job.type}
            </Badge>
          </div>

          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{job.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <MapPin className="w-4 h-4 text-accent/80" aria-hidden="true" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Briefcase className="w-4 h-4 text-accent/80" aria-hidden="true" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Clock className="w-4 h-4 text-accent/80" aria-hidden="true" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Users className="w-4 h-4 text-accent/80" aria-hidden="true" />
              <span>Hiring Now</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="bg-secondary/5 text-secondary font-mono text-[10px] tracking-wider uppercase">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          onClick={onApply}
          className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white hover:shadow-lg transition-premium whitespace-nowrap"
        >
          Apply Now
        </Button>
      </div>
    </Card>
  );
}
