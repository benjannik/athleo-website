"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserPlus, UserCheck, Bot, Play, Pause } from "lucide-react"
import ClientSafeWrapper from "./client-safe-wrapper"
import ErrorBoundary from "./error-boundary"

interface Step {
  id: string
  icon: typeof UserPlus
  title: string
  description: string
  color: string
}

function LeadConversionAnimationInner() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const steps: Step[] = [
    {
      id: "lead",
      icon: UserPlus,
      title: "Lead erhalten",
      description: "Interessent kontaktiert Studio",
      color: "#A5A395",
    },
    {
      id: "contact",
      icon: Bot,
      title: "KI kontaktiert",
      description: "Automatische Kommunikation",
      color: "#E4FD90",
    },
    {
      id: "convert",
      icon: UserCheck,
      title: "Mitglied konvertiert",
      description: "Erfolgreicher Abschluss",
      color: "#22c55e",
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isPlaying, steps.length])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Animation Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E4FD90]/10 via-transparent to-[#A5A395]/10 rounded-3xl"></div>

        {/* Steps Container */}
        <div className="relative z-10 flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">
              {/* Step Circle */}
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0.6 }}
                animate={{
                  scale: currentStep === index ? 1.2 : 0.8,
                  opacity: currentStep === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  style={{ backgroundColor: currentStep === index ? step.color : "#f3f4f6" }}
                >
                  <step.icon
                    className={`w-8 h-8 md:w-10 md:h-10 ${currentStep === index ? "text-black" : "text-gray-500"}`}
                  />
                </div>

                {/* Pulsating Effect for Active Step */}
                <AnimatePresence>
                  {currentStep === index && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#E4FD90]"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0.3, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#E4FD90]"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 0.1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Step Label */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: currentStep === index ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  className={`text-sm md:text-base font-bold ${currentStep === index ? "text-black" : "text-gray-500"}`}
                >
                  {step.title}
                </h3>
                <p className={`text-xs md:text-sm mt-1 ${currentStep === index ? "text-gray-700" : "text-gray-400"}`}>
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 relative">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#A5A395] via-[#E4FD90] to-[#22c55e] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-lg md:text-xl font-bold text-black">98%</div>
            <div className="text-xs md:text-sm text-gray-600">Öffnungsrate</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-lg md:text-xl font-bold text-black">3x</div>
            <div className="text-xs md:text-sm text-gray-600">Mehr Abschlüsse</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-lg md:text-xl font-bold text-black">100%</div>
            <div className="text-xs md:text-sm text-gray-600">Automatisiert</div>
          </div>
        </div>

        {/* Play/Pause Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={handlePlayPause}
            className="w-12 h-12 rounded-full bg-[#E4FD90] flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
            aria-label={isPlaying ? "Animation pausieren" : "Animation abspielen"}
          >
            {isPlaying ? <Pause className="w-6 h-6 text-black" /> : <Play className="w-6 h-6 text-black ml-0.5" />}
          </button>
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-black">Vollautomatisch:</span> Von der ersten Anfrage bis zum
          Vertragsabschluss
        </p>
      </motion.div>
    </div>
  )
}

export default function LeadConversionAnimation() {
  const fallback = (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
        <div className="text-center">
          <h3 className="text-xl font-bold text-black mb-4">Lead-Konvertierung</h3>
          <p className="text-gray-600">Automatische Konvertierung von Interessenten zu Mitgliedern</p>
        </div>
      </div>
    </div>
  )

  return (
    <ErrorBoundary fallback={fallback}>
      <ClientSafeWrapper fallback={fallback}>
        <LeadConversionAnimationInner />
      </ClientSafeWrapper>
    </ErrorBoundary>
  )
}
