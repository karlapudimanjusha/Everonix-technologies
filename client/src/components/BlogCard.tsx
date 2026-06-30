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
      <Card className="overflow-hidden border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 group cursor-pointer">
        <div className={`h-48 ${article.image} flex items-center justify-center border-b border-border/40`}>
          <div className="text-center">
            <Badge className="bg-primary/90 text-white font-mono text-[9px] tracking-widest uppercase px-3 py-0.5">
              {article.category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <p className="font-mono text-[10px] tracking-widest text-accent uppercase mb-2">// Featured Article</p>
          
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200">
            {article.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>

          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 font-mono">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center justify-between border-t border-border/40 pt-4">
            <div className="flex items-center gap-2 text-xs text-foreground/75 font-mono">
              <User className="w-3.5 h-3.5 text-accent" />
              <span>{article.author}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 border border-border/60 hover:border-accent/40 bg-card hover:bg-muted/5 shadow-none transition-premium hover:-translate-y-0.5 group cursor-pointer flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-[10px] tracking-widest text-accent uppercase">// {article.category}</span>
        <span className="font-mono text-[10px] text-muted-foreground">{article.readTime}</span>
      </div>

      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200 flex-1">
        {article.title}
      </h3>

      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>

      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/40 font-mono">
        <div className="flex items-center gap-2 text-foreground/75">
          <User className="w-3.5 h-3.5 text-accent" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{article.date}</span>
        </div>
      </div>
    </Card>
  );
}
