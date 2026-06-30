import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  type?: string;
  image?: string;
}

export default function SEO({
  title,
  description = "Everonix Technologies partners with enterprises to accelerate innovation through integrated technology solutions and elite talent acquisition.",
  type = "website",
  image = "https://everonix.com/everonix-logo.png"
}: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Everonix Technologies`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${title} | Everonix Technologies`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", `${title} | Everonix Technologies`);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", image);
    }

    // Dynamic Canonical Link Update
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const path = window.location.pathname === '/' ? '' : window.location.pathname;
    canonical.setAttribute('href', `https://everonix.com${path}`);
  }, [title, description, image]);

  return null;
}
