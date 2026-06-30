import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

interface LegalPageProps {
  type: "privacy" | "terms" | "cookies";
}

const content = {
  privacy: {
    title: "Privacy Policy",
    description: "Last updated: June 30, 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "We collect personal information that you voluntarily provide to us when you fill out contact forms, apply for careers, or subscribe to our newsletter. This includes your name, email address, phone number, company name, and resume files.",
      },
      {
        heading: "2. How We Use Your Information",
        text: "We use the information we collect to respond to inquiries, evaluate job applications, deliver newsletters, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.",
      },
      {
        heading: "3. Data Security",
        text: "We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no electronic transmission over the internet can be guaranteed 100% secure.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "Last updated: June 30, 2026",
    sections: [
      {
        heading: "1. Agreement to Terms",
        text: "By accessing or using the Everonix Technologies website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.",
      },
      {
        heading: "2. Use License",
        text: "Permission is granted to temporarily view the materials on our website for personal, non-commercial informational use only. This is the grant of a license, not a transfer of title.",
      },
      {
        heading: "3. Disclaimer of Warranties",
        text: "The materials on our website are provided on an 'as is' basis. Everonix Technologies makes no warranties, expressed or implied, and hereby disclaims all other warranties including without limitation fitness for a particular purpose.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: "Last updated: June 30, 2026",
    sections: [
      {
        heading: "1. What Are Cookies",
        text: "Cookies are small text files stored on your browser or device when you visit a website. They help us remember your preferences, keep sessions secure, and analyze web traffic.",
      },
      {
        heading: "2. How We Use Cookies",
        text: "We use essential cookies to enable navigation and secure core features. We also use performance/analytics cookies (such as Umami Analytics) to understand how visitors interact with our pages.",
      },
      {
        heading: "3. Managing Cookies",
        text: "You can choose to disable cookies through your browser settings. However, disabling essential cookies may impact your experience and prevent certain parts of our website from functioning properly.",
      },
    ],
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const data = content[type];

  return (
    <div className="min-h-screen bg-dot-pattern bg-gradient-to-b from-background to-secondary/20 py-20 md:py-32">
      <SEO 
        title={`${data.title} - Everonix Technologies`}
        description={`Read the ${data.title} for Everonix Technologies. ${data.description}`}
      />
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-primary hover:text-accent font-mono text-xs tracking-wider uppercase px-4 py-3 gap-2 cursor-pointer hover:bg-muted/10 min-h-[44px] inline-flex items-center">
              <ArrowLeft size={16} /> Back to Home
            </Button>
          </Link>
        </div>

        <Card className="shadow-2xl border border-border/40 bg-card/90 backdrop-blur-md p-5 sm:p-8 md:p-12">
          <CardContent className="p-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">
              {data.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-8 font-mono">
              {data.description}
            </p>

            <div className="space-y-8">
              {data.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl font-bold text-primary">
                    {section.heading}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
