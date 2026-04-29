import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'business.business';
  image?: string;
}

export function SEO({ 
  title, 
  description = "FloorMark Surfaces specializes in high-performance refinishing for bathtubs, tiles, countertops, and floors. Transform your space without replacement.", 
  keywords = ['refinishing', 'bathtub refinishing', 'countertop refinishing', 'tile refinishing', 'FloorMark Surfaces'],
  canonicalUrl,
  type = 'website',
  image = '/logo.png'
}: SEOProps) {
  const siteTitle = `${title} | FloorMark Surfaces`;
  const url = canonicalUrl || window.location.href;

  // Schema.org JSON-LD for AEO (Answer Engine Optimization)
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FloorMark Surfaces",
    "image": "https://floormark.com/logo.png", // Replace with real URL if available
    "@id": "https://floormark.com",
    "url": "https://floormark.com",
    "telephone": "+1-800-FLOORMARK", // Example phone
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Your City",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/floormark",
      "https://www.instagram.com/floormark",
      "https://www.linkedin.com/company/floormark"
    ],
    "description": description,
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Refinishing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathtub Refinishing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Countertop Refinishing"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* AEO Specific: Help AI Agents understand the brand and service */}
      <meta name="brand" content="FloorMark Surfaces" />
      <meta name="service-type" content="Surface Refinishing & Restoration" />
      <meta name="geographic-scope" content="Professional Residential & Commercial Refinishing" />

      {/* Structured Data for AEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}
