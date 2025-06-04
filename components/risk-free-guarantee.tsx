"use client"

import { Shield, CheckCircle, RefreshCw, Award } from 'lucide-react'
import AnimatedSection from "./animated-section"

export default function RiskFreeGuarantee() {
  const guarantees = [
    {
      icon: Shield,
      title: "30-Tage Geld-zurück-Garantie",
      description: "Nicht zufrieden? Wir erstatten dir 100% deines Geldes zurück. Ohne Wenn und Aber.",
    },
    {
      icon: RefreshCw,
      title: "Kostenlose Einrichtung",
      description: "Unser Expertenteam richtet athleo kostenlos für dich ein. Keine versteckten Kosten.",
    },
    {
      icon: Award,
      title: "Erfolgsgarantie",
      description: "Wir garantieren mindestens 50% mehr Leads in den ersten 60 Tagen oder Geld zurück.",
    },
    {
      icon: CheckCircle,
      title: "Keine Vertragsbindung",
      description: "Monatlich kündbar. Du gehst kein Risiko ein und behältst volle Flexibilität.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">100% Risikofrei testen</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir sind so überzeugt von athleo, dass wir dir eine bedingungslose Garantie geben.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center h-full">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#E4FD90] rounded-full p-3">
                    <guarantee.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{guarantee.title}</h3>
                <p className="text-sm text-gray-600">{guarantee.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.5} className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border-2 border-[#E4FD90]">
            <div className="flex justify-center mb-4">
              <div className="bg-[#E4FD90] rounded-full p-4">
                <Shield className="h-8 w-8 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Deine Investition ist geschützt</h3>
            <p className="text-gray-600 mb-6">
              Teste athleo 30 Tage lang völlig risikofrei. Solltest du nicht mindestens 50% mehr Leads generieren,
              erstatten wir dir dein Geld zurück - ohne Fragen zu stellen.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-semibold">
                ✅ 30-Tage Geld-zurück-Garantie
                <br />✅ Keine Einrichtungsgebühren
                <br />✅ Keine Vertragsbindung
                <br />✅ Kostenloser Support
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
