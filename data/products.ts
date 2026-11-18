import { ProductCategoryName } from "./categories";

export interface ProductSizeOption {
  label: string; // e.g., "500 g", "1 kg", "2 kg", "Box of 4"
  price: number; // Price in INR for this weight/size
  servings?: string; // e.g., "Serves 4–6"
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryName;
  secondaryCategories?: ProductCategoryName[];
  description: string;
  image: string;
  gallery: string[];
  price: number; // Base price in INR (matches first size option)
  sizes: ProductSizeOption[];
  isBestseller: boolean;
  isCustomerFavourite?: boolean;
  isAvailable: boolean; // Admin toggle: set false to mark out of stock
  allowEggSelection: boolean;
  allowCustomMessage: boolean;
  popularityScore: number; // For sorting by popularity
  tags: string[];
}

/**
 * CENTRAL PRODUCT CATALOGUE FOR AMMA PASTRIES
 * ----------------------------------------------------------------------
 * Admin-Friendly Product Management:
 * - Add new products to the PRODUCTS array below
 * - Edit prices inside `price` and `sizes`
 * - Toggle `isBestseller` or `isCustomerFavourite` to feature on Homepage
 * - Set `isAvailable: false` to temporarily disable ordering for a product
 * - Note: Product descriptions and prices below are realistic sample data
 *   ready to be customised with your shop's exact menu and pricing.
 */
export const PRODUCTS: Product[] = [
  {
    id: "royal-chocolate-truffle-cake",
    name: "Royal Chocolate Truffle Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes", "Anniversary Cakes"],
    description:
      "Rich chocolate sponge layered with smooth chocolate truffle ganache and finished with glossy chocolate swirls. Ideal for birthdays, anniversaries, and chocolate lovers.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    ],
    price: 549,
    sizes: [
      { label: "500 g", price: 549, servings: "Serves 4–6" },
      { label: "1 kg", price: 899, servings: "Serves 8–10" },
      { label: "1.5 kg", price: 1349, servings: "Serves 12–15" },
      { label: "2 kg", price: 1749, servings: "Serves 18–20" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 99,
    tags: ["chocolate cake", "truffle", "birthday cake", "bestseller"],
  },
  {
    id: "classic-black-forest-celebration-cake",
    name: "Classic Black Forest Gateau",
    category: "Black Forest Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Layers of moist cocoa sponge, whipped cream, and sweet cherry filling, adorned with generous chocolate shavings and whole red cherries on top.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    ],
    price: 499,
    sizes: [
      { label: "500 g", price: 499, servings: "Serves 4–6" },
      { label: "1 kg", price: 849, servings: "Serves 8–10" },
      { label: "2 kg", price: 1599, servings: "Serves 18–20" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 97,
    tags: ["black forest", "cherry", "birthday cake", "chocolate"],
  },
  {
    id: "crimson-red-velvet-heart-cake",
    name: "Crimson Red Velvet Celebration Cake",
    category: "Red Velvet Cakes",
    secondaryCategories: ["Anniversary Cakes", "Birthday Cakes"],
    description:
      "Soft crimson red velvet sponge layered with velvety cream frosting and finished with fine red velvet crumbs and white chocolate accents.",
    image:
      "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=85",
    ],
    price: 649,
    sizes: [
      { label: "500 g", price: 649, servings: "Serves 4–6" },
      { label: "1 kg", price: 1099, servings: "Serves 8–10" },
      { label: "1.5 kg", price: 1599, servings: "Serves 12–15" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 96,
    tags: ["red velvet", "anniversary cake", "birthday cake", "romantic"],
  },
  {
    id: "golden-butterscotch-crunch-cake",
    name: "Golden Butterscotch Crunch Cake",
    category: "Butterscotch Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Airy vanilla sponge layered with luscious butterscotch cream, golden caramel drizzle, and crunchy butterscotch praline pearls.",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85",
    ],
    price: 529,
    sizes: [
      { label: "500 g", price: 529, servings: "Serves 4–6" },
      { label: "1 kg", price: 899, servings: "Serves 8–10" },
      { label: "2 kg", price: 1699, servings: "Serves 18–20" },
    ],
    isBestseller: true,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 93,
    tags: ["butterscotch", "caramel", "birthday cake", "crunch"],
  },
  {
    id: "snowy-white-forest-cherries-cake",
    name: "Snowy White Forest Delight Cake",
    category: "White Forest Cakes",
    secondaryCategories: ["Birthday Cakes", "Anniversary Cakes"],
    description:
      "Delicate vanilla sponge layered with freshly whipped cream, sweet cherry compote, and generous white chocolate ribbons.",
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=85",
    ],
    price: 549,
    sizes: [
      { label: "500 g", price: 549, servings: "Serves 4–6" },
      { label: "1 kg", price: 949, servings: "Serves 8–10" },
      { label: "1.5 kg", price: 1399, servings: "Serves 12–15" },
    ],
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 89,
    tags: ["white forest", "white chocolate", "vanilla", "birthday cake"],
  },
  {
    id: "pastel-rosette-birthday-drip-cake",
    name: "Pastel Rosette Birthday Drip Cake",
    category: "Birthday Cakes",
    secondaryCategories: ["Designer Cakes"],
    description:
      "A festive birthday centrepiece finished with pastel cream rosettes, white chocolate drip, and golden celebration sprinkles.",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=900&q=85",
    ],
    price: 699,
    sizes: [
      { label: "500 g", price: 699, servings: "Serves 4–6" },
      { label: "1 kg", price: 1199, servings: "Serves 8–10" },
      { label: "2 kg", price: 2199, servings: "Serves 18–20" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 95,
    tags: ["birthday cake", "rosette", "pastel", "custom cakes"],
  },
  {
    id: "personalized-celebration-photo-cake",
    name: "Personalised Memories Photo Cake",
    category: "Photo Cakes",
    secondaryCategories: ["Birthday Cakes", "Anniversary Cakes"],
    description:
      "Customise your celebration with an edible photo print framed by piped cream borders. Share your photo directly on WhatsApp after placing your order enquiry.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85",
    ],
    price: 799,
    sizes: [
      { label: "1 kg", price: 799, servings: "Serves 8–10" },
      { label: "1.5 kg", price: 1199, servings: "Serves 12–15" },
      { label: "2 kg", price: 1599, servings: "Serves 18–20" },
    ],
    isBestseller: true,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 91,
    tags: ["photo cake", "custom cakes", "birthday cake", "personalised"],
  },
  {
    id: "royal-floral-two-tier-designer-cake",
    name: "Royal Floral Tiered Designer Cake",
    category: "Designer Cakes",
    secondaryCategories: ["Anniversary Cakes", "Birthday Cakes"],
    description:
      "Hand-crafted designer cake featuring textured cream artistry, pastel floral piping, and warm gold leaf highlights for grand celebrations.",
    image:
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=85",
    ],
    price: 1499,
    sizes: [
      { label: "1.5 kg (Single Tier Tall)", price: 1499, servings: "Serves 12–15" },
      { label: "2.5 kg (2 Tier)", price: 2499, servings: "Serves 22–25" },
      { label: "4 kg (Grand 2 Tier)", price: 3899, servings: "Serves 35–40" },
    ],
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 88,
    tags: ["designer cake", "custom cakes", "tiered cake", "anniversary cake"],
  },
  {
    id: "blush-pearl-anniversary-tier-cake",
    name: "Blush Pearl & Rose Anniversary Cake",
    category: "Anniversary Cakes",
    secondaryCategories: ["Designer Cakes"],
    description:
      "An elegant ivory and blush pink celebration cake decorated with sugar pearls and romantic rosette swirls for couples celebrating their special day.",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=900&q=85",
    ],
    price: 749,
    sizes: [
      { label: "500 g", price: 749, servings: "Serves 4–6" },
      { label: "1 kg", price: 1299, servings: "Serves 8–10" },
      { label: "2 kg (2 Tier)", price: 2399, servings: "Serves 18–22" },
    ],
    isBestseller: true,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 90,
    tags: ["anniversary cake", "romantic", "custom cakes", "rose cake"],
  },
  {
    id: "belgian-chocolate-overload-drip-cake",
    name: "Dark Chocolate Overload Drip Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Loaded with chocolate truffle frosting, dark cocoa drip, chocolate shards, and piped fudge peaks for ultimate chocolate indulgence.",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    ],
    price: 649,
    sizes: [
      { label: "500 g", price: 649, servings: "Serves 4–6" },
      { label: "1 kg", price: 1099, servings: "Serves 8–10" },
      { label: "2 kg", price: 1999, servings: "Serves 18–20" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 94,
    tags: ["chocolate cake", "overload", "drip cake", "birthday cake"],
  },
  {
    id: "dutch-truffle-pastry-box",
    name: "Signature Chocolate Truffle Pastry",
    category: "Pastries",
    secondaryCategories: ["Chocolate Cakes"],
    description:
      "Individual multi-layered chocolate truffle pastry slices finished with silky dark ganache and a delicate chocolate curl.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    ],
    price: 189,
    sizes: [
      { label: "Pack of 2 Slices", price: 189, servings: "2 Pieces" },
      { label: "Box of 4 Slices", price: 359, servings: "4 Pieces" },
      { label: "Party Box of 6 Slices", price: 519, servings: "6 Pieces" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: false,
    popularityScore: 92,
    tags: ["pastries", "chocolate pastry", "truffle pastry", "slices"],
  },
  {
    id: "classic-pineapple-cream-pastry",
    name: "Fresh Pineapple & Cherry Cream Pastry",
    category: "Pastries",
    description:
      "Light vanilla sponge layered with whipped cream, juicy pineapple tidbits, and topped with a bright glacé cherry.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
    ],
    price: 169,
    sizes: [
      { label: "Pack of 2 Slices", price: 169, servings: "2 Pieces" },
      { label: "Box of 4 Slices", price: 319, servings: "4 Pieces" },
      { label: "Party Box of 6 Slices", price: 459, servings: "6 Pieces" },
    ],
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["pastries", "pineapple pastry", "fruit pastry"],
  },
  {
    id: "red-velvet-cream-pastry-slices",
    name: "Red Velvet Cream Pastry Slices",
    category: "Pastries",
    secondaryCategories: ["Red Velvet Cakes"],
    description:
      "Individual slices of classic crimson red velvet sponge layered with smooth white frosting and red velvet crumb topping.",
    image:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=85",
    ],
    price: 219,
    sizes: [
      { label: "Pack of 2 Slices", price: 219, servings: "2 Pieces" },
      { label: "Box of 4 Slices", price: 419, servings: "4 Pieces" },
      { label: "Party Box of 6 Slices", price: 599, servings: "6 Pieces" },
    ],
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: false,
    popularityScore: 84,
    tags: ["pastries", "red velvet", "slices"],
  },
  {
    id: "fudgy-walnut-chocolate-brownie-box",
    name: "Fudgy Roasted Walnut Brownie Box",
    category: "Brownies",
    description:
      "Dense, crinkle-top chocolate brownies studded with roasted walnuts and dark chocolate chunks. Perfect for gifting or warm dessert cravings.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=900&q=85",
    ],
    price: 349,
    sizes: [
      { label: "Box of 4 Brownies", price: 349, servings: "4 Squares" },
      { label: "Box of 6 Brownies", price: 499, servings: "6 Squares" },
      { label: "Celebration Slab (9 Pcs)", price: 729, servings: "9 Squares" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 91,
    tags: ["brownies", "chocolate brownie", "walnut", "gift box"],
  },
  {
    id: "salted-caramel-nutella-swirl-brownies",
    name: "Hazelnut & Caramel Swirl Brownies",
    category: "Brownies",
    description:
      "Rich cocoa brownies swirled with chocolate-hazelnut spread and golden caramel ribbons.",
    image:
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=900&q=85",
    ],
    price: 379,
    sizes: [
      { label: "Box of 4 Brownies", price: 379, servings: "4 Squares" },
      { label: "Box of 6 Brownies", price: 549, servings: "6 Squares" },
      { label: "Assorted Box of 9", price: 799, servings: "9 Squares" },
    ],
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["brownies", "hazelnut", "caramel", "desserts"],
  },
  {
    id: "berry-compote-baked-cheesecake-tub",
    name: "Blueberry & Berry Compote Cheesecake",
    category: "Desserts",
    description:
      "Creamy cheesecake set over a buttery biscuit base and topped with a glossy berry compote.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85",
    ],
    price: 279,
    sizes: [
      { label: "Set of 2 Slices", price: 279, servings: "2 Slices" },
      { label: "500 g Whole Cake", price: 699, servings: "Serves 4–6" },
      { label: "1 kg Whole Cake", price: 1299, servings: "Serves 8–10" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 90,
    tags: ["desserts", "cheesecake", "blueberry", "jar cake"],
  },
  {
    id: "assorted-dessert-jar-trio",
    name: "Trio Dessert Jars (Truffle, Red Velvet & Biscoff)",
    category: "Desserts",
    description:
      "Three indulgent layered glass dessert jars featuring Chocolate Truffle, Red Velvet Cream, and Caramel Lotus Biscuit.",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85",
    ],
    price: 399,
    sizes: [
      { label: "Pack of 2 Jars", price: 279, servings: "2 Jars (200 ml each)" },
      { label: "Trio Box of 3 Jars", price: 399, servings: "3 Jars (200 ml each)" },
      { label: "Party Box of 6 Jars", price: 749, servings: "6 Jars (200 ml each)" },
    ],
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: false,
    popularityScore: 87,
    tags: ["desserts", "jar cakes", "cupcakes", "gift"],
  },
  {
    id: "double-chocolate-chunk-bakery-cookies",
    name: "Chunky Choco-Chip Bakery Cookies",
    category: "Cookies",
    description:
      "Golden-baked cookies with crisp edges, soft centres, and generous dark chocolate chunks. Freshly packed in a keepsake box.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    ],
    price: 249,
    sizes: [
      { label: "Pack of 6 Cookies (250 g)", price: 249, servings: "6 Cookies" },
      { label: "Gift Tin of 12 Cookies (500 g)", price: 469, servings: "12 Cookies" },
    ],
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: false,
    popularityScore: 84,
    tags: ["cookies", "chocolate chip", "bakery cookies", "snacks"],
  },
  {
    id: "almond-pistachio-butter-cookies",
    name: "Roasted Almond & Pistachio Shortbread Cookies",
    category: "Cookies",
    description:
      "Melt-in-the-mouth bakery shortbread cookies topped with sliced almonds and green pistachios. Ideal with evening filter coffee or tea.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    ],
    price: 269,
    sizes: [
      { label: "250 g Box", price: 269, servings: "Approx. 10–12 Pcs" },
      { label: "500 g Festive Box", price: 499, servings: "Approx. 20–24 Pcs" },
    ],
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 80,
    tags: ["cookies", "almond", "pistachio", "tea time"],
  },
  {
    id: "choco-butterscotch-duet-birthday-cake",
    name: "Choco-Butterscotch Duet Birthday Cake",
    category: "Butterscotch Cakes",
    secondaryCategories: ["Birthday Cakes", "Chocolate Cakes"],
    description:
      "The best of both worlds—chocolate sponge paired with creamy butterscotch frosting, caramel glaze, and golden nougat crunch.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=85",
    ],
    price: 579,
    sizes: [
      { label: "500 g", price: 579, servings: "Serves 4–6" },
      { label: "1 kg", price: 969, servings: "Serves 8–10" },
      { label: "1.5 kg", price: 1429, servings: "Serves 12–15" },
    ],
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 83,
    tags: ["butterscotch", "chocolate cake", "birthday cake"],
  },
  {
    id: "heart-shaped-black-forest-cake",
    name: "Heart-Shaped Black Forest Romance Cake",
    category: "Black Forest Cakes",
    secondaryCategories: ["Anniversary Cakes"],
    description:
      "A romantic heart-shaped version of our classic Black Forest cake, crowned with whipped cream rosettes, dark chocolate flakes, and red cherries.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=85",
    ],
    price: 599,
    sizes: [
      { label: "500 g", price: 599, servings: "Serves 4–6" },
      { label: "1 kg", price: 999, servings: "Serves 8–10" },
    ],
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 82,
    tags: ["black forest", "heart cake", "anniversary cake"],
  },
  {
    id: "white-forest-rosette-gateau",
    name: "White Forest Berry & Flake Gateau",
    category: "White Forest Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Tall vanilla sponge layered with cherry cream and wrapped in delicate white chocolate curls for an elegant celebration.",
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=85",
    ],
    price: 599,
    sizes: [
      { label: "500 g", price: 599, servings: "Serves 4–6" },
      { label: "1 kg", price: 999, servings: "Serves 8–10" },
    ],
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 81,
    tags: ["white forest", "birthday cake", "vanilla"],
  },
  {
    id: "kids-jungle-safari-theme-cake",
    name: "Kids Wonderland Theme Designer Cake",
    category: "Designer Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Playful custom theme cake designed for children's birthdays. Choose your preferred sponge flavour and share theme customisations via WhatsApp.",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85",
    ],
    price: 1299,
    sizes: [
      { label: "1 kg", price: 1299, servings: "Serves 8–10" },
      { label: "1.5 kg", price: 1849, servings: "Serves 12–15" },
      { label: "2 kg (2 Tier)", price: 2499, servings: "Serves 18–22" },
    ],
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 88,
    tags: ["designer cake", "custom cakes", "birthday cake", "kids cake"],
  },
  {
    id: "kids-cartoon-photo-sheet-cake",
    name: "Custom Theme Photo Sheet Cake",
    category: "Photo Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Rectangular party photo cake designed for larger birthday gatherings, topped with a high-clarity edible print and colourful cream borders.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=85",
    ],
    price: 1199,
    sizes: [
      { label: "1.5 kg Sheet Cake", price: 1199, servings: "Serves 15–18" },
      { label: "2.5 kg Party Sheet", price: 1899, servings: "Serves 25–30" },
    ],
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 79,
    tags: ["photo cake", "birthday cake", "custom cakes", "sheet cake"],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getBestsellerProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.isBestseller && p.isAvailable).slice(0, limit);
}

export function getCustomerFavouriteProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.isCustomerFavourite && p.isAvailable).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) =>
      p.id !== product.id &&
      p.isAvailable &&
      (p.category === product.category ||
        p.secondaryCategories?.includes(product.category) ||
        product.secondaryCategories?.includes(p.category))
  ).slice(0, limit);
}
