"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"

interface ClientSafeWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function ClientSafeWrapper({ children, fallback = null }: ClientSafeWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
