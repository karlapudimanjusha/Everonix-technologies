import { useState } from "react";
import { Button } from "@/components/ui/button";
import { articles, categories } from "@/lib/data/blogData";
import BlogCard from "@/components/BlogCard";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { API_KEY, API_URL } from "@/lib/config";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const featuredArticles = articles.filter((a) => a.featured);

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/newsletter`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast.success("Thank you! You have successfully subscribed to our newsletter.");
        setEmail("");
      } else {
        toast.error("Subscription failed. Please try again later.");
      }
    } catch (err) {
      toast.error("A network error occurred. Please try again later.");
    }
  };

  const handleSubscribeScroll = () => {
    const el = document.getElementById("newsletter-section");
    el?.scrollIntoView({ behavior: "smooth" });
    const input = document.getElementById("newsletter-email");
    input?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO title="Insights - Industry Tech Updates" />
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-br from-[#F0F9FF] via-background to-background dark:from-[#0a1931]/30 dark:via-background dark:to-background bg-dot-pattern">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                Insights & Thought Leadership
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore industry trends, best practices, and expert insights on technology transformation, talent development, and digital innovation.
            </p>
            <div className="flex gap-4">
              <Button onClick={handleSubscribeScroll} size="lg" className="bg-accent hover:bg-accent/90 text-white hover:scale-[1.02] hover:-translate-y-0.5 transition-premium shadow-none w-full sm:w-auto">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12">Featured Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <BlogCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 md:py-6 bg-secondary/5 sticky top-16 md:top-20 z-30 border-y border-border/40 backdrop-blur-md">
        <div className="container relative">
          <div className="flex gap-3 overflow-x-auto pb-2 pr-12 scrollbar-none">
            {categories.map((cat, idx) => {
              const isActive = selectedCategory.toLowerCase() === cat.name.toLowerCase();
              return (
                <Button
                  key={idx}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setVisibleCount(4); // Reset pagination on category change
                  }}
                  className={`${
                    isActive 
                      ? "text-primary-foreground" 
                      : "border-border/80 text-foreground/80 hover:bg-secondary/5"
                  } font-mono text-xs tracking-wider uppercase transition-premium hover:-translate-y-0.5`}
                >
                  {cat.name}
                  <span className="ml-1.5 opacity-60">({cat.count})</span>
                </Button>
              );
            })}
          </div>
          {/* Subtle fading mask indicating scrollability on mobile */}
          <div className="absolute right-4 top-0 bottom-2 w-16 pointer-events-none bg-gradient-to-l from-background to-transparent md:hidden z-20" />
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.slice(0, visibleCount).map((article) => (
              <BlogCard key={article.id} article={article} variant="standard" />
            ))}
          </div>

          {visibleCount < filteredArticles.length && (
            <div className="text-center mt-12">
              <Button onClick={() => setVisibleCount((prev) => prev + 4)} variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter-section" className="py-16 md:py-24 bg-gradient-to-r from-muted/50 to-accent/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and receive the latest articles, trends, and expert insights delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
