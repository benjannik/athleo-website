"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { useScrollTo } from "@/hooks/use-scroll-to"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToHero = () => {
    scrollTo("#hero", { behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToHero}
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-[#E4FD90] p-3 shadow-md transition-all duration-300 hover:bg-[#E4FD90]/80 hover:shadow-lg focus:outline-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Zurück zum Anfang"
    >
      <ArrowUp className="h-6 w-6 text-black" />
    </button>
  )
}
