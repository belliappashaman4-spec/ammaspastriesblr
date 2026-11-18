import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS_CONFIG } from "@/config/business";
import { ShopProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchBar from "@/components/SearchBar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.kannadaName}) | Premium Bakery & Cake Shop in ${BUSINESS_CONFIG.city}`,
    template: `%s | ${BUSINESS_CONFIG.name} – ${BUSINESS_CONFIG.city}`,
  },
  description:
    "Every Celebration Deserves Something Sweet. Freshly baked birthday cakes, chocolate truffle cakes, Black Forest cakes, pastries, brownies & custom cakes at Amma Pastries BLR in Bengaluru, Karnataka. Order directly on WhatsApp.",
  keywords: [
    "Amma Pastries BLR",
    "Amma Pastries",
    "Bakery in Bengaluru",
    "Cake shop Bengaluru",
    "Birthday cakes Bengaluru",
    "Chocolate truffle cake",
    "Black Forest cake",
    "Custom cakes Bengaluru",
    "Pastries and brownies",
  ],
  openGraph: {
    title: `${BUSINESS_CONFIG.name} – Every Celebration Deserves Something Sweet`,
    description:
      "Freshly baked happiness, crafted with love at Amma Pastries BLR in Bengaluru, Karnataka. Explore cakes, pastries & custom orders on WhatsApp.",
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Verified LocalBusiness Structured Data (JSON-LD)
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: BUSINESS_CONFIG.name,
    alternateName: BUSINESS_CONFIG.kannadaName,
    description: BUSINESS_CONFIG.subheadline,
    url: BUSINESS_CONFIG.websiteUrl,
    telephone: "+91-8861459597",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ground Floor, JP Complex, 156/35, Hulimangala Main Rd, Vinayaka Layout, Electronic City",
      addressLocality: BUSINESS_CONFIG.city,
      addressRegion: BUSINESS_CONFIG.state,
      postalCode: BUSINESS_CONFIG.postalCode,
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    servesCuisine: "Bakery, Cakes, Pastries, Desserts",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-50 text-choco-900">
        <ShopProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <SearchBar />
          <WhatsAppButton />
        </ShopProvider>
      </body>
    </html>
  );
}
