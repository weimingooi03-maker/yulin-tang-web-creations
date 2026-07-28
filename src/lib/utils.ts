import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type PriceRegion = "MY" | "SG";

export function formatPrice(
  amount: number,
  region: PriceRegion,
  options?: { decimals?: number; compact?: boolean }
): string {
  const decimals = options?.decimals ?? 2;
  const symbol = region === "MY" ? "RM" : "$";
  const locale = region === "MY" ? "en-MY" : "en-SG";
  const formatted = Math.abs(amount).toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  const sign = amount < 0 ? "−" : "";
  return `${sign}${symbol} ${formatted}`;
}

