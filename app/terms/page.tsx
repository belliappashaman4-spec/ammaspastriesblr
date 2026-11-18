import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ordering from ${BUSINESS_CONFIG.name} in ${BUSINESS_CONFIG.fullLocation}.`,
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-cream-300 p-6 sm:p-10 shadow-soft space-y-6">
          <div className="border-b border-cream-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
              {BUSINESS_CONFIG.name}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-1">
              Terms &amp; Conditions
            </h1>
          </div>

          <div className="space-y-4 text-sm text-choco-700 leading-relaxed">
            <p>
              Welcome to the official website of{" "}
              <strong>{BUSINESS_CONFIG.name}</strong> (
              {BUSINESS_CONFIG.fullLocation}). By browsing our catalogue and
              initiating orders via WhatsApp, you agree to the following terms:
            </p>
            <h2 className="font-serif text-lg font-bold text-choco-900 pt-2">
              1. WhatsApp Order Confirmation
            </h2>
            <p>
              Clicking “Order on WhatsApp” opens a pre-filled chat message with
              your selected cake or pastry details. An order is only confirmed
              after our bakery team verifies availability, delivery timing, and
              payment details directly with you on WhatsApp.
            </p>
            <h2 className="font-serif text-lg font-bold text-choco-900 pt-2">
              2. Product Presentation &amp; Customisation
            </h2>
            <p>
              Every cake and pastry is hand-crafted. Slight variations in
              piping, garnish placement, or colour shade may occur as part of
              artisanal preparation.
            </p>
            <h2 className="font-serif text-lg font-bold text-choco-900 pt-2">
              3. Pricing &amp; Availability
            </h2>
            <p>
              Prices are listed in Indian Rupees (INR). Custom design additions,
              special toppers, or delivery charges (if applicable) will be
              shared transparently on WhatsApp before confirming your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
