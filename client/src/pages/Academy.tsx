import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award } from "lucide-react";
import { courses, features, testimonials } from "@/lib/data/academyData";
import CourseCard from "@/components/CourseCard";

export default function Academy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Everonix Academy
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Upskill yourself with industry-leading courses in emerging technologies. Learn from experts, build real projects, and launch your career.
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">2,500+</span>
                <span className="text-muted-foreground">Students Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">15+</span>
                <span className="text-muted-foreground">Courses Available</span>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              let IconComponent;
              switch (feature.iconName) {
                case "Users":
                  IconComponent = Users;
                  break;
                case "Clock":
                  IconComponent = Clock;
                  break;
                case "Award":
                  IconComponent = Award;
                  break;
                case "CheckCircle":
                  IconComponent = CheckCircle;
                  break;
                default:
                  IconComponent = CheckCircle;
              }
              return (
                <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our comprehensive catalog of industry-relevant courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our graduates who have transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(testimonial.rating) ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have upskilled with Everonix Academy. Transform your career with industry-leading courses.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Courses
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
