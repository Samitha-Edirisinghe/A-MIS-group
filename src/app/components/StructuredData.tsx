import { useEffect } from "react";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://amisgroup.lk/#organization",
      "name": "A'MIS Group Pvt Ltd",
      "url": "https://amisgroup.lk",
      "logo": { "@type": "ImageObject", "url": "https://amisgroup.lk/logo.png" },
      "description": "A multi-studio creative technology group operating Creotech, Captura and Cinemix.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Street",
        "addressLocality": "Melbourne",
        "addressCountry": "AU",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94762688365",
        "contactType": "customer service",
        "email": "info@amisgroup.lk",
        "availableLanguage": "English",
      },
      "sameAs": [
        "https://www.facebook.com/amisgroup",
        "https://www.linkedin.com/company/amisgroup",
        "https://www.instagram.com/amisgroup",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Creative & Technology Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design & Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Photography" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motion Graphics" } },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://amisgroup.lk/#creotech",
      "name": "A'MIS Creotech",
      "parentOrganization": { "@id": "https://amisgroup.lk/#organization" },
      "description": "Technology and creative services — software development, web design, mobile apps, UI/UX, branding and digital marketing.",
      "url": "https://amisgroup.lk/#/creotech",
      "priceRange": "$$",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://amisgroup.lk/#captura",
      "name": "A'MIS Captura",
      "parentOrganization": { "@id": "https://amisgroup.lk/#organization" },
      "description": "Professional photography — commercial, editorial, product, corporate and aerial photography.",
      "url": "https://amisgroup.lk/#/captura",
      "priceRange": "$$",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://amisgroup.lk/#cinemix",
      "name": "A'MIS Cinemix",
      "parentOrganization": { "@id": "https://amisgroup.lk/#organization" },
      "description": "Full-service video production — brand films, documentaries, social content, post-production and motion graphics.",
      "url": "https://amisgroup.lk/#/cinemix",
      "priceRange": "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://amisgroup.lk/#website",
      "url": "https://amisgroup.lk",
      "name": "A'MIS Group",
      "publisher": { "@id": "https://amisgroup.lk/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://amisgroup.lk/?s={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function StructuredData() {
  useEffect(() => {
    const id = "amis-structured-data";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  return null;
}
