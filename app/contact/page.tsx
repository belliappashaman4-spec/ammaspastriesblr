"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Send,
  ExternalLink,
  Info,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  buildWhatsAppUrl,
  generateGeneralWhatsAppMessage,
} from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState("Birthday / Celebration Cake");
  const [message, setMessage] = useState("");

  const directWhatsAppUrl = buildWhatsAppUrl(generateGeneralWhatsAppMessage());

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedEnquiry = [
      `Hello ${BUSINESS_CONFIG.name}!`,
      ``,
      `I have an enquiry from your Contact Page:`,
      `Name: ${name || "Customer"}`,
      phone ? `Phone: ${phone}` : null,
      `Topic: ${enquiryType}`,
      `Message: ${message}`,
      ``,
      `Please get back to me with details.`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = buildWhatsAppUrl(formattedEnquiry);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-choco-900">
            Contact {BUSINESS_CONFIG.name}
          </h1>
          <p className="text-sm sm:text-base text-choco-600">
            Have a question about cake flavours, custom designs, or bulk pastry
            boxes in {BUSINESS_CONFIG.city}? Reach out on WhatsApp or send us an
            enquiry below.
          </p>
        </div>

        {/* Contact Info Cards + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Details & Placeholders */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary WhatsApp Card */}
            <div className="rounded-3xl bg-choco-900 text-cream-50 p-6 sm:p-7 shadow-card space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-bold">
                Fastest Response
              </span>
              <h2 className="font-serif text-2xl font-bold">
                Order &amp; Chat on WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
                For instant cake availability, custom message requests, photo
                cake uploads, and delivery coordination in Bengaluru, message us
                on WhatsApp.
              </p>
              <p className="text-xs font-mono text-gold-300">
                WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
              </p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

            {/* Store Address, Phone & Socials Card */}
            <div className="rounded-3xl bg-white border border-cream-300 p-6 sm:p-7 shadow-soft space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-choco-900">
                  Bakery Details
                </h3>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cream-100 text-choco-600 font-semibold">
                  Editable Config
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream-100 text-saffron-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-choco-900">
                      Bakery Address (Electronic City)
                    </p>
                    <p className="text-xs text-choco-700 mt-0.5 leading-relaxed">
                      {BUSINESS_CONFIG.addressLine1},
                    </p>
                    <p className="text-xs text-choco-700 leading-relaxed">
                      {BUSINESS_CONFIG.addressLine2}
                    </p>
                    <a
                      href={BUSINESS_CONFIG.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-600 hover:underline mt-1.5"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream-100 text-saffron-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-choco-900">
                      Phone &amp; WhatsApp
                    </p>
                    <a
                      href={BUSINESS_CONFIG.phoneHref}
                      className="text-xs sm:text-sm font-semibold text-saffron-600 hover:underline mt-0.5 inline-block"
                    >
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream-100 text-saffron-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-choco-900">Email</p>
                    <p className="text-xs text-choco-600 mt-0.5">
                      {BUSINESS_CONFIG.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream-100 text-saffron-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-choco-900">Bakery Hours</p>
                    <p className="text-xs text-choco-600 mt-0.5">
                      {BUSINESS_CONFIG.openingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blush-50 text-blush-600 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-choco-900">Instagram</p>
                    <a
                      href={BUSINESS_CONFIG.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-saffron-600 hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>{BUSINESS_CONFIG.social.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-cream-100 text-[11px] text-choco-600 flex items-start gap-2">
                <Info className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                <span>
                  Admin Note: Update your verified phone number, WhatsApp
                  number, shop address, and Google Maps link in{" "}
                  <code className="font-mono text-choco-900">
                    config/business.ts
                  </code>
                  .
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form & Map Placeholder */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-white border border-cream-300 p-6 sm:p-8 shadow-soft space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-choco-900">
                  Send Us an Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-choco-600 mt-1">
                  Fill out your message below to open a pre-filled WhatsApp
                  enquiry directly with our team.
                </p>
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-choco-700 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-900 focus:outline-none focus:border-choco-800"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-choco-700 mb-1.5"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-900 focus:outline-none focus:border-choco-800"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-bold uppercase tracking-wider text-choco-700 mb-1.5"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="contact-topic"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-900 focus:outline-none focus:border-choco-800"
                  >
                    <option value="Birthday / Celebration Cake">
                      Birthday / Celebration Cake
                    </option>
                    <option value="Custom / Designer Theme Cake">
                      Custom / Designer Theme Cake
                    </option>
                    <option value="Photo Cake Order">Photo Cake Order</option>
                    <option value="Bulk Pastries / Corporate Gift Boxes">
                      Bulk Pastries / Corporate Gift Boxes
                    </option>
                    <option value="General Store Question">
                      General Store Question
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-choco-700 mb-1.5"
                  >
                    Your Message / Order Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us the cake flavour, weight, celebration date, or any custom design details..."
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-900 focus:outline-none focus:border-choco-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-choco-900 hover:bg-choco-800 text-cream-50 font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-4 h-4 text-gold-300" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Google Maps Integration for Electronic City Store */}
            <div className="rounded-3xl bg-white border border-cream-300 overflow-hidden shadow-soft">
              <div className="p-5 sm:p-6 border-b border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cream-100 text-saffron-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-choco-900">
                      Visit {BUSINESS_CONFIG.name} – Electronic City
                    </h3>
                    <p className="text-xs text-choco-600 mt-0.5">
                      {BUSINESS_CONFIG.fullAddress}
                    </p>
                  </div>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 text-xs font-semibold shrink-0 self-start sm:self-auto transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="w-full h-72 sm:h-80 bg-cream-100">
                <iframe
                  title={`${BUSINESS_CONFIG.name} Location Map`}
                  src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
