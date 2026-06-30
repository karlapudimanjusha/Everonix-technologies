import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, Users } from "lucide-react";
import { Job } from "@/lib/data/careersData";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-all hover:border-accent">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold text-primary">{job.title}</h3>
            <Badge variant="outline">{job.type}</Badge>
          </div>

          <p className="text-muted-foreground mb-4">{job.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="w-4 h-4 text-accent" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-accent" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-accent" />
              <span>Hiring Now</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, idx) => (
              <Badge key={idx} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
          Apply Now
        </Button>
      </div>
    </Card>
  );
}
