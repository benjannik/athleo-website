"use client"

import type React from "react"
import type { ReactNode } from "react"
import { useScrollTo } from "@/hooks/use-scroll-to"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  offset?: number
}

export default function ScrollLink({ href, children, className = "", offset }: ScrollLinkProps) {
  const scrollTo = useScrollTo()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (href.startsWith("#")) {
      scrollTo(href, { offset })
    } else {
      window.location.href = href
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
