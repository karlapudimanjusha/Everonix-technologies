import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RequestTalentProvider } from "./contexts/RequestTalentContext";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import LegalPage from "./pages/LegalPage";
import BlogDetailModal from "./components/BlogDetailModal";
import CaseStudyDetailModal from "./components/CaseStudyDetailModal";
import ServicePage from "./pages/ServicePage";
import IndustriesPage from "./pages/IndustriesPage";
import IndustryPage from "./pages/IndustryPage";
import About from "./pages/About";
import TestimonialsPage from "./pages/TestimonialsPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

function Router() {
  return (
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
