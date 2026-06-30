import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { Course } from "@/lib/data/academyData";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-3">
          <span className="font-mono text-[10px] tracking-widest text-accent uppercase">
            // {course.category}
          </span>
          <Badge variant="secondary" className="bg-secondary/5 text-secondary font-mono text-[10px] tracking-wider uppercase">
            {course.level}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{course.description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-foreground/70">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent/80" />
            <span className="font-mono text-xs">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-accent/80" />
            <span className="font-mono text-xs">{course.students} enrolled</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-accent font-bold font-mono text-sm">{course.rating}</span>
          <span className="text-yellow-400">★★★★★</span>
        </div>

        <div className="mb-4">
          <p className="font-mono text-[9px] tracking-wider text-muted-foreground mb-2 uppercase">Curriculum Highlights</p>
          <div className="flex flex-wrap gap-1.5">
            {course.topics.slice(0, 3).map((topic, idx) => (
              <Badge key={idx} variant="outline" className="border-border/80 text-foreground/80 font-mono text-[9px] tracking-wide uppercase px-2 py-0">
                {topic}
              </Badge>
            ))}
            {course.topics.length > 3 && (
              <Badge variant="outline" className="border-border/80 text-foreground/60 font-mono text-[9px] tracking-wide uppercase px-2 py-0">
                +{course.topics.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <p className="font-mono text-[10px] text-muted-foreground">
          Instructor: {course.instructor}
        </p>
      </div>

      <div className="border-t border-border/40 p-6 bg-secondary/5">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary font-mono">{course.price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90 hover:shadow-lg transition-premium">
            Enroll
          </Button>
        </div>
      </div>
    </Card>
  );
}
