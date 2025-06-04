"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import ClientSafeWrapper from "./client-safe-wrapper"
import ErrorBoundary from "./error-boundary"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
  threshold?: number
}

function AnimatedSectionInner({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, threshold })

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case "down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }
      case "left":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }
      case "right":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  const variants = getDirectionVariants()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AnimatedSection(props: AnimatedSectionProps) {
  return (
    <ErrorBoundary fallback={<div className={props.className}>{props.children}</div>}>
      <ClientSafeWrapper fallback={<div className={props.className}>{props.children}</div>}>
        <AnimatedSectionInner {...props} />
      </ClientSafeWrapper>
    </ErrorBoundary>
  )
}
