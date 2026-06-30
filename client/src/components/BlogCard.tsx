import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Article } from "@/lib/data/blogData";

interface BlogCardProps {
  article: Article;
  variant?: "featured" | "standard";
}

export default function BlogCard({ article, variant = "standard" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all hover:border-accent group cursor-pointer">
        <div className={`h-48 ${article.image} flex items-center justify-center`}>
          <div className="text-center">
            <Badge className="mb-2">{article.category}</Badge>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 hover:shadow-lg transition-all hover:border-accent group cursor-pointer flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <Badge variant="outline">{article.category}</Badge>
        <span className="text-xs text-muted-foreground">{article.readTime}</span>
      </div>

      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors flex-1">
        {article.title}
      </h3>

      <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>

      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{article.date}</span>
        </div>
      </div>
    </Card>
  );
}
