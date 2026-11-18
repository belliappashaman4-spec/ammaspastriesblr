import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${BUSINESS_CONFIG.name} in ${BUSINESS_CONFIG.fullLocation}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-cream-300 p-6 sm:p-10 shadow-soft space-y-6">
          <div className="border-b border-cream-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
              {BUSINESS_CONFIG.name}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-1">
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-4 text-sm text-choco-700 leading-relaxed">
            <p>
              At <strong>{BUSINESS_CONFIG.name}</strong> (
              {BUSINESS_CONFIG.fullLocation}), we respect your privacy and are
              committed to handling any personal information you share with us
              responsibly.
            </p>
            <h2 className="font-serif text-lg font-bold text-choco-900 pt-2">
              1. Information Shared for Orders
            </h2>
            <p>
              When you click “Order on WhatsApp” or submit an enquiry on our
              website, your selected product details, custom cake message,
              preferred delivery date, and any contact details you choose to
              provide are formatted into a WhatsApp message so our team can
              assist you with your order.
            </p>
            <h2 className="font-serif text-lg font-bold text-choco-900 pt-2">
              2. Local Browser Storage
            </h2>
            <p>
              This website uses your browser’s local storage to remember items
              in your Shopping Bag, Wishlist, and Recently Viewed products for
              your convenience. No payment card details are collected or stored
              on this website.
            </p>
            <h2 className="font-serif text-lg font-bold text-choco-900 pt-2">
              3. Contact Us
            </h2>
            <p>
              For any privacy-related questions, please contact{" "}
              {BUSINESS_CONFIG.name} via our Contact page or WhatsApp in{" "}
              {BUSINESS_CONFIG.fullLocation}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
