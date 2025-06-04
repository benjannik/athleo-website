import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Check if we're in browser environment
 */
const isBrowser = typeof window !== "undefined"

/**
 * Safe localStorage access with error handling
 */
export function getLocalStorage(key: string, defaultValue = ""): string {
  if (!isBrowser) return defaultValue

  try {
    const item = localStorage.getItem(key)
    return item !== null ? item : defaultValue
  } catch (error) {
    console.warn(`Failed to get localStorage item "${key}":`, error)
    return defaultValue
  }
}

/**
 * Safe localStorage setter with error handling
 */
export function setLocalStorage(key: string, value: string): boolean {
  if (!isBrowser) return false

  try {
    localStorage.setItem(key, value)
    return true
  } catch (error) {
    console.warn(`Failed to set localStorage item "${key}":`, error)
    return false
  }
}

/**
 * Format numbers with proper locale
 */
export function formatNumber(num: number, locale = "de-DE"): string {
  return new Intl.NumberFormat(locale).format(num)
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Safe JSON parsing with fallback
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json)
  } catch {
    return fallback
  }
}

/**
 * Environment checks
 */
export const isProduction = process.env.NODE_ENV === "production"
export const isDevelopment = process.env.NODE_ENV === "development"
