"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import ClientSafeWrapper from "./client-safe-wrapper"
import ErrorBoundary from "./error-boundary"

interface StaggeredListProps {
  children: ReactNode[]
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  staggerDelay?: number
  once?: boolean
  threshold?: number
}

function StaggeredListInner({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggeredListProps) {
  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref, { once, threshold })

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: delay + i * staggerDelay,
              duration,
              ease: "easeOut",
            },
          }),
        }
      case "down":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: delay + i * staggerDelay,
              duration,
              ease: "easeOut",
            },
          }),
        }
      case "left":
        return {
          hidden: { opacity: 0, x: 20 },
          visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: delay + i * staggerDelay,
              duration,
              ease: "easeOut",
            },
          }),
        }
      case "right":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: delay + i * staggerDelay,
              duration,
              ease: "easeOut",
            },
          }),
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: {
              delay: delay + i * staggerDelay,
              duration,
              ease: "easeOut",
            },
          }),
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: delay + i * staggerDelay,
              duration,
              ease: "easeOut",
            },
          }),
        }
    }
  }

  const variants = getDirectionVariants()

  return (
    <ul ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.li key={i} custom={i} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
          {child}
        </motion.li>
      ))}
    </ul>
  )
}

export default function StaggeredList(props: StaggeredListProps) {
  const fallback = (
    <ul className={props.className}>
      {props.children.map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  )

  return (
    <ErrorBoundary fallback={fallback}>
      <ClientSafeWrapper fallback={fallback}>
        <StaggeredListInner {...props} />
      </ClientSafeWrapper>
    </ErrorBoundary>
  )
}
