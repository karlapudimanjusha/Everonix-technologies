import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-dot-pattern bg-gradient-to-br from-muted/50 via-background to-accent/10">
      <SEO title="Page Not Found" description="The page you are looking for does not exist. Return to Everonix Technologies homepage." />
      <Card className="w-full max-w-lg mx-4 shadow-2xl border border-border/40 bg-card/90 backdrop-blur-md">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse" />
              <AlertCircle
                className="relative h-16 w-16 text-accent"
                aria-label="Error Alert Icon"
                role="img" aria-hidden="true" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-2">404</h1>

          <h2 className="text-xl font-semibold text-foreground/80 mb-4">
            Page Not Found
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xs sm:max-w-none mx-auto mb-8">
            <Button
              onClick={handleGoHome}
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center min-h-[44px]"
            >
              <Home className="w-4 h-4 mr-2" aria-hidden="true" />
              Go Home
            </Button>
          </div>

          <div className="pt-6 border-t border-border/40 text-left max-w-xs sm:max-w-sm mx-auto">
            <p className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-3 text-center sm:text-left">
              Suggested Pages
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Button
                variant="link"
                onClick={() => setLocation("/services/it-staffing")}
                className="justify-start p-0 h-auto text-accent hover:underline cursor-pointer font-medium"
              >
                IT Staffing Solutions
              </Button>
              <Button
                variant="link"
                onClick={() => setLocation("/about")}
                className="justify-start p-0 h-auto text-accent hover:underline cursor-pointer font-medium"
              >
                About Our Mission
              </Button>
              <Button
                variant="link"
                onClick={() => setLocation("/industries")}
                className="justify-start p-0 h-auto text-accent hover:underline cursor-pointer font-medium"
              >
                Sectors Serviced
              </Button>
              <Button
                variant="link"
                onClick={() => setLocation("/careers")}
                className="justify-start p-0 h-auto text-accent hover:underline cursor-pointer font-medium"
              >
                Join Talent Network
              </Button>
              <Button
                variant="link"
                onClick={() => setLocation("/testimonials")}
                className="justify-start p-0 h-auto text-accent hover:underline cursor-pointer font-medium col-span-2"
              >
                Client Testimonials & Outcomes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
