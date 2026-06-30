import { Button } from "@/components/ui/button";
import { articles, categories } from "@/lib/data/blogData";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Insights & Thought Leadership
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore industry trends, best practices, and expert insights on technology transformation, talent development, and digital innovation.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
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
      <section className="py-8 md:py-12 bg-secondary/5 sticky top-20 z-10">
        <div className="container">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <Button
                key={idx}
                variant={idx === 0 ? "default" : "outline"}
                className={idx === 0 ? "bg-primary hover:bg-primary/90" : ""}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-70">({cat.count})</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} variant="standard" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and receive the latest articles, trends, and expert insights delivered to your inbox.
            </p>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
