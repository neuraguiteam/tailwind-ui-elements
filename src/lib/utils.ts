
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createComponentPrefix(component: string) {
  return `n-${component}`
}

/**
 * Creates a handler that only fires once per event
 */
export function createChainedHandler<E>(...handlers: Array<undefined | null | ((event: E) => void)>) {
  return (event: E) => {
    for (const handler of handlers) {
      if (typeof handler === 'function') {
        handler(event)
      }
    }
  }
}

/**
 * Determines if the current environment is a browser
 */
export const isBrowser = typeof window !== 'undefined'

/**
 * Creates a globally unique ID
 */
export function uniqueId(prefix = 'id-') {
  return `${prefix}${Math.random().toString(36).substring(2, 9)}`
}
