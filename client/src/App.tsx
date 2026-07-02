import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RequestTalentProvider } from "./contexts/RequestTalentContext";
import BlogDetailModal from "./components/BlogDetailModal";
import CaseStudyDetailModal from "./components/CaseStudyDetailModal";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

// Lazy loaded page components for route bundle optimizations
const Home = lazy(() => import("./pages/Home"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const About = lazy(() => import("./pages/About"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] w-full flex items-center justify-center bg-background">
          <div className="relative flex items-center justify-center">
            {/* Pulsing visual spinner loader */}
            <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-accent animate-spin" />
            <div className="absolute h-8 w-8 rounded-full bg-accent/10 animate-ping" />
          </div>
        </div>
      }
    >
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/case-studies/:id"}>
          {(params) => (
            <>
              <Home />
              <CaseStudyDetailModal id={parseInt(params.id)} />
            </>
          )}
        </Route>
        <Route path={"/services/:slug"}>
          {(params) => <ServicePage slug={params.slug} />}
        </Route>
        <Route path={"/industries"} component={IndustriesPage} />
        <Route path={"/industries/:slug"}>
          {(params) => <IndustryPage slug={params.slug} />}
        </Route>
        <Route path={"/careers"} component={Careers} />
        <Route path={"/about"} component={About} />
        <Route path={"/testimonials"} component={TestimonialsPage} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/blog/:id"}>
          {(params) => (
            <>
              <Blog />
              <BlogDetailModal id={parseInt(params.id)} />
            </>
          )}
        </Route>
        <Route path={"/privacy"}>
          <LegalPage type="privacy" />
        </Route>
        <Route path={"/terms"}>
          <LegalPage type="terms" />
        </Route>
        <Route path={"/cookies"}>
          <LegalPage type="cookies" />
        </Route>
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable={true}
      >
        <TooltipProvider>
          <RequestTalentProvider>
            <Toaster />
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-grow pt-16 md:pt-20">
                <Router />
              </main>
              <Footer />
              <CookieConsent />
            </div>
          </RequestTalentProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
