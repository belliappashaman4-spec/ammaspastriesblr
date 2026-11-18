import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BUSINESS_CONFIG } from "@/config/business";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `${BUSINESS_CONFIG.currencySymbol}${amount.toLocaleString("en-IN")}`;
}

/**
 * Formats an ISO date string (YYYY-MM-DD) into a readable Indian date such as "20 November 2026"
 */
export function formatReadableDate(dateString?: string): string {
  if (!dateString) return "To be discussed on WhatsApp";
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;
  const [year, month, day] = parts.map(Number);
  if (!year || !month || !day) return dateString;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[month - 1];
  if (!monthName) return dateString;
  return `${day} ${monthName} ${year}`;
}
