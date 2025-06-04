"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import ClientSafeWrapper from "./client-safe-wrapper"
import ErrorBoundary from "./error-boundary"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  className?: string
  suffix?: string
  prefix?: string
}

function AnimatedCounterInner({
  from,
  to,
  duration = 2,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })
  const [currentValue, setCurrentValue] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)

        const easeOut = 1 - Math.pow(1 - progress, 3)
        const value = from + (to - from) * easeOut

        setCurrentValue(Math.round(value))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      animate()
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, from, to, duration, delay])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {prefix}
      {currentValue}
      {suffix}
    </motion.span>
  )
}

export default function AnimatedCounter(props: AnimatedCounterProps) {
  const fallback = (
    <span className={props.className}>
      {props.prefix}
      {props.to}
      {props.suffix}
    </span>
  )

  return (
    <ErrorBoundary fallback={fallback}>
      <ClientSafeWrapper fallback={fallback}>
        <AnimatedCounterInner {...props} />
      </ClientSafeWrapper>
    </ErrorBoundary>
  )
}
