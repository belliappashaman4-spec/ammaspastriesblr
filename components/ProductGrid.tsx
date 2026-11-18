import React from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = "No matching bakery items found.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl bg-cream-100 border border-cream-300 p-12 text-center">
        <p className="font-serif text-lg font-bold text-choco-900">
          {emptyMessage}
        </p>
        <p className="text-sm text-choco-600 mt-1">
          Try clearing a filter or searching for another cake flavour.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
