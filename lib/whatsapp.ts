import { WHATSAPP_NUMBER, BUSINESS_CONFIG } from "@/config/business";
import { formatPrice, formatReadableDate } from "@/lib/utils";

export interface SingleProductWhatsAppPayload {
  productName: string;
  weight: string;
  quantity: number;
  eggPreference?: "Eggless" | "With Egg" | "Standard";
  messageOnCake?: string;
  preferredDeliveryDate?: string;
  unitPrice: number;
}

export interface CartWhatsAppItem {
  productName: string;
  weight: string;
  quantity: number;
  eggPreference?: string;
  messageOnCake?: string;
  unitPrice: number;
}

export interface CustomCakeEnquiryPayload {
  customerName: string;
  occasion: string;
  flavourPreference: string;
  weightEstimate: string;
  preferredDate: string;
  notes?: string;
}

/**
 * Builds the WhatsApp Click-to-Chat URL using the single central WHATSAPP_NUMBER
 * with proper URL encoding.
 */
export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9A-Za-z]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Generates the exact prefilled WhatsApp message for a single product order.
 */
export function generateProductWhatsAppMessage(
  payload: SingleProductWhatsAppPayload
): string {
  const totalAmount = payload.unitPrice * payload.quantity;
  const lines = [
    `Hello ${BUSINESS_CONFIG.name}!`,
    ``,
    `I would like to place an order.`,
    ``,
    `Product: ${payload.productName}`,
    `Weight: ${payload.weight}`,
    `Quantity: ${payload.quantity}`,
  ];

  if (payload.eggPreference && payload.eggPreference !== "Standard") {
    lines.push(`Egg Preference: ${payload.eggPreference}`);
  }

  if (payload.messageOnCake && payload.messageOnCake.trim().length > 0) {
    lines.push(`Message on Cake: ${payload.messageOnCake.trim()}`);
  }

  if (payload.preferredDeliveryDate && payload.preferredDeliveryDate.trim().length > 0) {
    lines.push(
      `Preferred Delivery Date: ${formatReadableDate(payload.preferredDeliveryDate)}`
    );
  }

  lines.push(`Price: ${formatPrice(totalAmount)}`);
  lines.push(``);
  lines.push(`Please confirm availability and delivery details.`);

  return lines.join("\n");
}

/**
 * Generates the complete cart WhatsApp order message including all items and total estimated amount.
 */
export function generateCartWhatsAppMessage(
  items: CartWhatsAppItem[],
  options?: {
    customerName?: string;
    preferredDeliveryDate?: string;
    deliveryArea?: string;
    specialInstructions?: string;
  }
): string {
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const lines = [
    `Hello ${BUSINESS_CONFIG.name}!`,
    ``,
    `I would like to place a cart order from your website:`,
    ``,
  ];

  items.forEach((item, index) => {
    const itemTotal = item.unitPrice * item.quantity;
    lines.push(`${index + 1}. *${item.productName}*`);
    lines.push(`   • Weight/Size: ${item.weight}`);
    lines.push(`   • Quantity: ${item.quantity}`);
    if (item.eggPreference && item.eggPreference !== "Standard") {
      lines.push(`   • Preference: ${item.eggPreference}`);
    }
    if (item.messageOnCake && item.messageOnCake.trim()) {
      lines.push(`   • Message on Cake: "${item.messageOnCake.trim()}"`);
    }
    lines.push(`   • Price: ${formatPrice(itemTotal)}`);
    lines.push(``);
  });

  lines.push(`*Total Estimated Amount: ${formatPrice(subtotal)}*`);

  if (options?.customerName?.trim()) {
    lines.push(`Customer Name: ${options.customerName.trim()}`);
  }
  if (options?.preferredDeliveryDate?.trim()) {
    lines.push(
      `Preferred Delivery Date: ${formatReadableDate(options.preferredDeliveryDate)}`
    );
  }
  if (options?.deliveryArea?.trim()) {
    lines.push(`Delivery Location (Bengaluru): ${options.deliveryArea.trim()}`);
  }
  if (options?.specialInstructions?.trim()) {
    lines.push(`Special Notes: ${options.specialInstructions.trim()}`);
  }

  lines.push(``);
  lines.push(`Please confirm availability and delivery details.`);

  return lines.join("\n");
}

/**
 * Generates a general or custom cake enquiry WhatsApp message.
 */
export function generateGeneralWhatsAppMessage(customText?: string): string {
  if (customText) return customText;
  return [
    `Hello ${BUSINESS_CONFIG.name}!`,
    ``,
    `I visited your website and would like to enquire about ordering cakes/pastries in Bengaluru.`,
    `Please share availability and order details.`,
  ].join("\n");
}

export function generateCustomCakeWhatsAppMessage(
  payload: CustomCakeEnquiryPayload
): string {
  return [
    `Hello ${BUSINESS_CONFIG.name}!`,
    ``,
    `I would like to enquire about a Custom Cake.`,
    ``,
    `Name: ${payload.customerName || "Customer"}`,
    `Occasion: ${payload.occasion}`,
    `Preferred Flavour: ${payload.flavourPreference}`,
    `Estimated Weight/Servings: ${payload.weightEstimate}`,
    `Preferred Date: ${formatReadableDate(payload.preferredDate)}`,
    payload.notes ? `Design / Theme Notes: ${payload.notes}` : null,
    ``,
    `Please let me know design possibilities, pricing and availability.`,
  ]
    .filter(Boolean)
    .join("\n");
}
