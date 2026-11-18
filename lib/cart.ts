"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { PRODUCTS, Product } from "@/data/products";

export interface CartItem {
  cartItemId: string; // Unique key combining productId + selectedSize + eggPreference + messageOnCake
  productId: string;
  productName: string;
  productImage: string;
  category: string;
  selectedSize: string;
  unitPrice: number;
  quantity: number;
  eggPreference: "Eggless" | "With Egg" | "Standard";
  messageOnCake?: string;
  preferredDeliveryDate?: string;
}

interface ShopContextValue {
  cart: CartItem[];
  wishlistIds: string[];
  recentlyViewedIds: string[];
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isWishlistOpen: boolean;
  toastMessage: string | null;
  setIsCartOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, "cartItemId">, openDrawer?: boolean) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  updateItemSize: (cartItemId: string, newSizeLabel: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  addRecentlyViewed: (productId: string) => void;
  showToast: (msg: string) => void;
  cartCount: number;
  cartSubtotal: number;
  isHydrated: boolean;
}

const CART_STORAGE_KEY = "amma_pastries_cart_v1";
const WISHLIST_STORAGE_KEY = "amma_pastries_wishlist_v1";
const RECENTLY_VIEWED_KEY = "amma_pastries_recent_v1";

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export function makeCartItemId(
  productId: string,
  selectedSize: string,
  eggPreference: string,
  messageOnCake?: string
): string {
  return `${productId}__${selectedSize}__${eggPreference}__${(
    messageOnCake || ""
  )
    .trim()
    .toLowerCase()}`;
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) setCart(parsed);
      }
      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (savedWishlist) {
        const parsed = JSON.parse(savedWishlist);
        if (Array.isArray(parsed)) setWishlistIds(parsed);
      }
      const savedRecent = localStorage.getItem(RECENTLY_VIEWED_KEY);
      if (savedRecent) {
        const parsed = JSON.parse(savedRecent);
        if (Array.isArray(parsed)) setRecentlyViewedIds(parsed);
      }
    } catch {
      // Ignore storage access errors in private browsing
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart, isHydrated]);

  // Sync wishlist to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // Ignore
    }
  }, [wishlistIds, isHydrated]);

  // Sync recently viewed to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(
        RECENTLY_VIEWED_KEY,
        JSON.stringify(recentlyViewedIds)
      );
    } catch {
      // Ignore
    }
  }, [recentlyViewedIds, isHydrated]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  }, []);

  const addToCart = useCallback(
    (item: Omit<CartItem, "cartItemId">, openDrawer = true) => {
      const cartItemId = makeCartItemId(
        item.productId,
        item.selectedSize,
        item.eggPreference,
        item.messageOnCake
      );

      setCart((prev) => {
        const existingIndex = prev.findIndex(
          (i) => i.cartItemId === cartItemId
        );
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + item.quantity,
            preferredDeliveryDate:
              item.preferredDeliveryDate ||
              updated[existingIndex].preferredDeliveryDate,
          };
          return updated;
        }
        return [...prev, { ...item, cartItemId }];
      });

      showToast(`Added "${item.productName}" (${item.selectedSize}) to bag`);
      if (openDrawer) {
        setIsCartOpen(true);
      }
    },
    [showToast]
  );

  const removeFromCart = useCallback(
    (cartItemId: string) => {
      setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
      showToast("Item removed from your bag");
    },
    [showToast]
  );

  const updateQuantity = useCallback((cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  }, []);

  const updateItemSize = useCallback(
    (cartItemId: string, newSizeLabel: string) => {
      setCart((prev) => {
        const target = prev.find((i) => i.cartItemId === cartItemId);
        if (!target) return prev;
        const product: Product | undefined = PRODUCTS.find(
          (p) => p.id === target.productId
        );
        if (!product) return prev;
        const sizeObj = product.sizes.find((s) => s.label === newSizeLabel);
        if (!sizeObj) return prev;

        const newCartItemId = makeCartItemId(
          target.productId,
          sizeObj.label,
          target.eggPreference,
          target.messageOnCake
        );

        // If another item with the same newCartItemId already exists, merge quantities
        const existingOther = prev.find(
          (i) => i.cartItemId === newCartItemId && i.cartItemId !== cartItemId
        );

        if (existingOther) {
          return prev
            .filter((i) => i.cartItemId !== cartItemId)
            .map((i) =>
              i.cartItemId === newCartItemId
                ? { ...i, quantity: i.quantity + target.quantity }
                : i
            );
        }

        return prev.map((i) =>
          i.cartItemId === cartItemId
            ? {
                ...i,
                cartItemId: newCartItemId,
                selectedSize: sizeObj.label,
                unitPrice: sizeObj.price,
              }
            : i
        );
      });
      showToast(`Updated size to ${newSizeLabel}`);
    },
    [showToast]
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleWishlist = useCallback(
    (productId: string) => {
      setWishlistIds((prev) => {
        const exists = prev.includes(productId);
        const product = PRODUCTS.find((p) => p.id === productId);
        if (exists) {
          showToast(
            `Removed ${product ? product.name : "item"} from Wishlist`
          );
          return prev.filter((id) => id !== productId);
        } else {
          showToast(`Saved ${product ? product.name : "item"} to Wishlist`);
          return [productId, ...prev];
        }
      });
    },
    [showToast]
  );

  const isInWishlist = useCallback(
    (productId: string) => wishlistIds.includes(productId),
    [wishlistIds]
  );

  const addRecentlyViewed = useCallback((productId: string) => {
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 8);
    });
  }, []);

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      wishlistIds,
      recentlyViewedIds,
      isCartOpen,
      isSearchOpen,
      isWishlistOpen,
      toastMessage,
      setIsCartOpen,
      setIsSearchOpen,
      setIsWishlistOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateItemSize,
      clearCart,
      toggleWishlist,
      isInWishlist,
      addRecentlyViewed,
      showToast,
      cartCount,
      cartSubtotal,
      isHydrated,
    }),
    [
      cart,
      wishlistIds,
      recentlyViewedIds,
      isCartOpen,
      isSearchOpen,
      isWishlistOpen,
      toastMessage,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateItemSize,
      clearCart,
      toggleWishlist,
      isInWishlist,
      addRecentlyViewed,
      showToast,
      cartCount,
      cartSubtotal,
      isHydrated,
    ]
  );

  return React.createElement(ShopContext.Provider, { value }, children);
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return ctx;
}
