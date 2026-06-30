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
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:border-accent flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline">{course.category}</Badge>
          <Badge variant="secondary">{course.level}</Badge>
        </div>

        <h3 className="text-xl font-bold text-primary mb-3">{course.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{course.description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-accent" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-accent" />
            <span>{course.students} students</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-accent font-bold">{course.rating}</span>
          <span className="text-yellow-400">★★★★★</span>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground mb-2">TOPICS COVERED</p>
          <div className="flex flex-wrap gap-2">
            {course.topics.slice(0, 3).map((topic, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {course.topics.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{course.topics.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-4">
          Instructor: {course.instructor}
        </p>
      </div>

      <div className="border-t p-6 bg-secondary/5">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{course.price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Enroll
          </Button>
        </div>
      </div>
    </Card>
  );
}
