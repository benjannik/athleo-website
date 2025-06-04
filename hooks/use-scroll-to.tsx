"use client"

import { useCallback } from "react"

interface ScrollToOptions {
  offset?: number
  behavior?: ScrollBehavior
}

export function useScrollTo() {
  const scrollTo = useCallback((target: string | HTMLElement, options: ScrollToOptions = {}) => {
    const { offset = 64, behavior = "smooth" } = options

    setTimeout(() => {
      let element: HTMLElement | null = null

      if (typeof target === "string") {
        if (target.startsWith("#")) {
          element = document.getElementById(target.substring(1))
        } else {
          element = document.getElementById(target)
        }
      } else {
        element = target
      }

      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior,
        })
      }
    }, 100)
  }, [])

  return scrollTo
}
