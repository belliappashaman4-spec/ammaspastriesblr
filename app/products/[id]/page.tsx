import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductById } from "@/data/products";
import { BUSINESS_CONFIG } from "@/config/business";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const product = getProductById(params.id);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} (${product.category})`,
    description: `${product.description} Order ${product.name} from ${BUSINESS_CONFIG.name} in ${BUSINESS_CONFIG.city} on WhatsApp.`,
    openGraph: {
      title: `${product.name} | ${BUSINESS_CONFIG.name}`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  // Product JSON-LD Structured Data
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.gallery,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: BUSINESS_CONFIG.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: BUSINESS_CONFIG.currencyCode,
      lowPrice: Math.min(...product.sizes.map((s) => s.price)),
      highPrice: Math.max(...product.sizes.map((s) => s.price)),
      offerCount: product.sizes.length,
      availability: product.isAvailable
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
