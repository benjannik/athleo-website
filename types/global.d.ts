import type React from "react"
/**
 * Global type definitions for the application
 */

declare global {
  interface Window {
    // Add any global window properties here
    gtag?: (...args: any[]) => void
  }
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimationProps {
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

// Agent types
export interface Agent {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  image: string
  features: string[]
}

// Animation step types
export interface AnimationStep {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

// Environment types
export type Environment = "development" | "production" | "test"
