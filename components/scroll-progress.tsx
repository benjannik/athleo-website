"use client"

import { motion, useScroll } from "framer-motion"
import ClientSafeWrapper from "./client-safe-wrapper"
import ErrorBoundary from "./error-boundary"

function ScrollProgressInner() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#E4FD90] z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default function ScrollProgress() {
  return (
    <ErrorBoundary fallback={null}>
      <ClientSafeWrapper>
        <ScrollProgressInner />
      </ClientSafeWrapper>
    </ErrorBoundary>
  )
}
