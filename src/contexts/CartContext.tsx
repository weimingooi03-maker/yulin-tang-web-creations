import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type Region = "MY" | "SG";

export type CartProduct = {
  id: string;
  nameZh: string;
  nameEn: string;
  qtyLabel: string;
  image: string;
  priceMY: number; // RM
  priceSG: number; // SGD
};

export type CartItem = CartProduct & { quantity: number };

type CartContextType = {
  items: CartItem[];
  region: Region;
  setRegion: (r: Region) => void;
  addItem: (p: CartProduct, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  currency: string;
  currencySymbol: string;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "yulin_cart_v1";
const REGION_KEY = "yulin_cart_region";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [region, setRegionState] = useState<Region>(() => {
    return (localStorage.getItem(REGION_KEY) as Region) || "MY";
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(REGION_KEY, region);
  }, [region]);

  const addItem = (p: CartProduct, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) {
        return prev.map((i) => (i.id === p.id ? { ...i, quantity: i.quantity + qty } : i));
      }
      return [...prev, { ...p, quantity: qty }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return removeItem(id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)));
  };
  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + (region === "MY" ? i.priceMY : i.priceSG) * i.quantity, 0),
    [items, region]
  );

  const value: CartContextType = {
    items,
    region,
    setRegion: setRegionState,
    addItem,
    removeItem,
    updateQty,
    clear,
    count,
    subtotal,
    currency: region === "MY" ? "RM" : "SGD",
    currencySymbol: region === "MY" ? "RM" : "S$",
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
