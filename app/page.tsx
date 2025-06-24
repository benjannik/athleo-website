"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, Suspense } from "react"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Smartphone,
  Users,
  FileText,
  Heart,
  TrendingUp,
  Smile,
  MapPin,
  CircleDollarSign,
  RotateCcw,
  UserCheck,
  LineChartIcon as ChartLine,
} from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import ScrollProgress from "@/components/scroll-progress"
import ScrollLink from "@/components/scroll-link"
import BackToTop from "@/components/back-to-top"
import LeadConversionAnimation from "@/components/lead-conversion-animation"
import SafeImage from "@/components/safe-image"
import LoadingFallback from "@/components/loading-fallback"
import ErrorBoundary from "@/components/error-boundary"
import type { Agent } from "@/types/global"

export default function Home() {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([])
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null)

  const agents: Agent[] = [
    {
      id: "mitgliedergewinnung",
      title: "Mitgliedergewinnung",
      subtitle: "Mehr Umsatz",
      icon: TrendingUp,
      image: "/team/mitgliedergewinnung.png",
      features: [
        "Probetrainings vereinbaren",
        "Leads qualifizieren und konvertieren",
        "Anfragen zu Mitgliedschaften beantworten",
        "Automatisierte Follow-ups",
        "Vertragsabschlüsse vorbereiten",
      ],
    },
    {
      id: "mitgliederbindung",
      title: "Mitgliederbindung",
      subtitle: "Weniger Kündigungen",
      icon: Heart,
      image: "/team/mitgliederbindung.png",
      features: [
        "Kündigungen abfangen und reduzieren",
        "Risikomitglieder frühzeitig erkennen",
        "Gezielte Rückgewinnungsmaßnahmen",
        "Mitgliederzufriedenheit steigern",
        "Proaktive Kommunikation",
      ],
    },
    {
      id: "mitgliederservice",
      title: "Mitgliederservice",
      subtitle: "Höhere Zufriedenheit",
      icon: Smile,
      image: "/team/mitgliederservice.png",
      features: [
        "Allgemeine Mitgliederfragen klären",
        "Vertragsdaten ändern und anpassen",
        "Auskunft zu Kursen und Öffnungszeiten",
        "Feedback von Mitgliedern gezielt einholen",
        "Beschwerden empathisch behandeln",
      ],
    },
  ]

  const toggleAgent = (agentId: string) => {
    setSelectedAgents((prev) => (prev.includes(agentId) ? prev.filter((id) => id !== agentId) : [...prev, agentId]))
  }

  const generateMailto = () => {
    const agentStatus = agents.map((agent) => {
      const isSelected = selectedAgents.includes(agent.id)
      return `${isSelected ? "✓" : "☐"} ${agent.title}`
    })

    const mailBody = `Hallo athleo-Team,

ich habe folgende KI-Agenten ausgewählt, die ich gerne testen möchte:

${agentStatus.join("\n")}

Ich freue mich auf die nächsten Schritte!

Beste Grüße
[Dein Name]
[Optional: Name deines Studios / Kontaktdaten]`

    return `mailto:team@athleo.de?subject=KI-Agenten Test Anfrage&body=${encodeURIComponent(mailBody)}`
  }

  const getCheckboxColor = (agentId: string) => {
    if (selectedAgents.includes(agentId)) return "text-green-500"
    if (hoveredAgent === agentId) return "text-green-400"
    return "text-[#A5A395]"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ErrorBoundary>
        <Suspense fallback={null}>
          <ScrollProgress />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={null}>
          <BackToTop />
        </Suspense>
      </ErrorBoundary>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <SafeImage
              src="/logo.svg"
              alt="athleo Logo"
              width={240}
              height={80}
              className="h-14 w-auto"
              fallbackText="athleo"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <ScrollLink href="#leistungen" className="text-sm font-medium text-gray-700 hover:text-black">
              Leistungen
            </ScrollLink>
            <ScrollLink href="#funktionsweise" className="text-sm font-medium text-gray-700 hover:text-black">
              Funktionsweise
            </ScrollLink>
            <ScrollLink href="#vorteile" className="text-sm font-medium text-gray-700 hover:text-black">
              Vorteile
            </ScrollLink>
          </nav>
          <div>
            <Link
              href="https://cal.com/athleo/austausch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#E4FD90] px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-opacity-90 focus:outline-none transition-all hover:scale-105"
            >
              <span className="relative z-10">Demo vereinbaren</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Lead Conversion Focused */}
        <section
          id="hero"
          className="relative overflow-hidden py-16 sm:py-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E4FD90]/80 via-[#A5A395]/20 to-[#E4FD90]/30 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_left,_#E4FD90_0%,_transparent_50%)] before:opacity-30 before:mix-blend-multiply before:pointer-events-none after:absolute after:inset-0 after:bg-[conic-gradient(from_90deg_at_40%_60%,_#A5A395_0deg,_transparent_120deg,_#E4FD90_240deg,_transparent_300deg)] after:opacity-20 after:mix-blend-overlay after:pointer-events-none"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <div className="max-w-4xl">
                      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                        Mehr Mitglieder gewinnen mit KI-gestützter Kommunikation
                      </h1>
                    </div>
                  }
                >
                  <AnimatedSection direction="up" duration={0.7} className="max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                      Mehr Mitglieder gewinnen mit KI-gestützter Kommunikation
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                      athleo konvertiert Interessenten automatisch zu zahlenden Mitgliedern über WhatsApp und E-Mail –
                      während du dich auf dein Kerngeschäft konzentrierst.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="https://cal.com/athleo/austausch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center rounded-md bg-[#E4FD90] px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md z-10"
                      >
                        <span className="relative z-10">Jetzt Demo vereinbaren</span>
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="mailto:team@athleo.de"
                        className="group relative inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md z-10"
                      >
                        <span className="relative z-10">Kontaktiere uns</span>
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Lead Conversion Animation */}
                    <div className="mt-12 relative z-10">
                      <ErrorBoundary>
                        <Suspense fallback={<LoadingFallback text="Animation wird geladen..." />}>
                          <LeadConversionAnimation />
                        </Suspense>
                      </ErrorBoundary>
                    </div>
                  </AnimatedSection>
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </section>

        {/* Leistungsbereiche / Module */}
        <section id="leistungen" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Wähle dein Team aus KI-Agenten
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Unsere KI-Agenten unterstützen dein Studio in allen Bereichen – von der Neukundengewinnung bis zur
                Mitgliederbindung.
              </p>
            </AnimatedSection>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {agents.map((agent, index) => (
                <AnimatedSection key={agent.id} direction="up" delay={0.1 * (index + 1)}>
                  <div
                    className={`rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 h-full cursor-pointer ${
                      selectedAgents.includes(agent.id)
                        ? "ring-2 ring-green-500 shadow-lg scale-105"
                        : "hover:shadow-md hover:scale-105"
                    }`}
                    onMouseEnter={() => setHoveredAgent(agent.id)}
                    onMouseLeave={() => setHoveredAgent(null)}
                    onClick={() => toggleAgent(agent.id)}
                  >
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={agent.image || "/placeholder.svg"}
                          alt={`${agent.title} Experte`}
                          width={128}
                          height={128}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90] -mt-10 mb-4">
                        <agent.icon className="h-6 w-6 text-black" />
                      </div>
                      <h3 className="text-xl font-bold text-black text-center">{agent.title}</h3>
                      <p className="text-sm text-gray-500 text-center mt-1 font-medium">{agent.subtitle}</p>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {agent.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle
                            className={`mr-2 h-5 w-5 flex-shrink-0 transition-colors duration-300 ${getCheckboxColor(
                              agent.id,
                            )}`}
                          />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Call to Action Button */}
            <AnimatedSection direction="up" delay={0.5} className="mt-12 text-center">
              <a
                href={generateMailto()}
                className="group relative inline-flex items-center justify-center rounded-md bg-[#E4FD90] px-8 py-4 text-lg font-medium text-black shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="relative z-10">KI-Agenten auswählen & testen</span>
                <Mail className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
              {selectedAgents.length > 0 && (
                <p className="mt-4 text-sm text-gray-600">
                  {selectedAgents.length} KI-Agent{selectedAgents.length > 1 ? "en" : ""} ausgewählt
                </p>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* So funktioniert athleo */}
        <section id="funktionsweise" className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">So funktioniert athleo</h2>
              <p className="mt-4 text-lg text-gray-600">
                Unsere KI-Agenten kommunizieren nahtlos über WhatsApp und E-Mail mit deinen Mitgliedern und
                Interessenten.
              </p>
            </AnimatedSection>

            <div className="mt-16">
              <div className="relative">
                <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-[#E4FD90]"></div>
                <div className="space-y-16">
                  {/* Schritt 1 */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <AnimatedSection direction="none" className="absolute left-1/2 -translate-x-1/2 transform">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90] text-black">
                          1
                        </div>
                      </AnimatedSection>
                    </div>
                    <div className="ml-12 mt-12 md:ml-0 md:mt-0 md:flex md:items-center md:justify-center">
                      <AnimatedSection direction="right" delay={0.2} className="md:w-2/5 md:pr-12 md:text-right">
                        <h3 className="text-xl font-bold text-black">Eingehende Anfragen</h3>
                        <p className="mt-2 text-gray-600">
                          Interessenten und Mitglieder kontaktieren dein Studio über WhatsApp oder E-Mail – die
                          beliebtesten Kommunikationskanäle.
                        </p>
                      </AnimatedSection>
                      <AnimatedSection direction="left" delay={0.3} className="mt-4 md:mt-0 md:w-2/5 md:pl-12">
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition-all hover:shadow-md hover:scale-105 border-2 border-[#E4FD90]">
                            <Mail className="mr-2 h-5 w-5 text-black" />
                            E-Mail
                          </div>
                          <div className="flex items-center rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition-all hover:shadow-md hover:scale-105 border-2 border-[#E4FD90]">
                            <Smartphone className="mr-2 h-5 w-5 text-black" />
                            WhatsApp
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>

                  {/* Schritt 2 */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <AnimatedSection
                        direction="none"
                        delay={0.4}
                        className="absolute left-1/2 -translate-x-1/2 transform"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90] text-black">
                          2
                        </div>
                      </AnimatedSection>
                    </div>
                    <div className="ml-12 mt-12 md:ml-0 md:mt-0 md:flex md:items-center md:justify-center">
                      <AnimatedSection direction="left" delay={0.5} className="md:w-2/5 md:pr-12 md:text-left">
                        <div className="mt-4 md:mt-0">
                          <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 border-l-4 border-[#E4FD90]">
                            <div className="flex items-center">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90]">
                                <MessageSquare className="h-6 w-6 text-black" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">Automatische Verarbeitung</p>
                                <p className="text-sm text-gray-500">
                                  KI-gestützte Analyse und Bearbeitung in Echtzeit
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection direction="left" delay={0.6} className="mt-4 md:mt-0 md:w-2/5 md:pl-12">
                        <h3 className="text-xl font-bold text-black">Automatische Verarbeitung</h3>
                        <p className="mt-2 text-gray-600">
                          athleo analysiert und verarbeitet die Anfragen sofort mit Hilfe von KI und leitet die
                          entsprechenden Maßnahmen ein – ohne Wartezeit für deine Kunden.
                        </p>
                      </AnimatedSection>
                    </div>
                  </div>

                  {/* Schritt 3 */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <AnimatedSection
                        direction="none"
                        delay={0.7}
                        className="absolute left-1/2 -translate-x-1/2 transform"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90] text-black">
                          3
                        </div>
                      </AnimatedSection>
                    </div>
                    <div className="ml-12 mt-12 md:ml-0 md:mt-0 md:flex md:items-center md:justify-center">
                      <AnimatedSection direction="right" delay={0.8} className="md:w-2/5 md:pr-12 md:text-right">
                        <h3 className="text-xl font-bold text-black">Direkte Systemintegration</h3>
                        <p className="mt-2 text-gray-600">
                          Vertragsdaten werden direkt in deinem Mitgliedermanagementsystem aktualisiert, ohne manuelle
                          Eingaben.
                        </p>
                      </AnimatedSection>
                      <AnimatedSection direction="left" delay={0.9} className="mt-4 md:mt-0 md:w-2/5 md:pl-12">
                        <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 border-l-4 border-[#E4FD90]">
                          <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90]">
                              <FileText className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">API-Anbindung</p>
                              <p className="text-sm text-gray-500">
                                Nahtlose Integration mit deinen bestehenden Systemen
                              </p>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>

                  {/* Schritt 4 */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <AnimatedSection
                        direction="none"
                        delay={1.0}
                        className="absolute left-1/2 -translate-x-1/2 transform"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90] text-black">
                          4
                        </div>
                      </AnimatedSection>
                    </div>

                    <div className="ml-12 mt-12 md:ml-0 md:mt-0 md:flex md:items-center md:justify-center">
                      {/* ➜ Box (gleiches Design wie Schritt 2) */}
                      <AnimatedSection direction="left" delay={1.1} className="md:w-2/5 md:pr-12 md:text-left">
                        <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 border-l-4 border-[#E4FD90]">
                          <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90]">
                              <Users className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">Menschliche Unterstützung</p>
                              <p className="text-sm text-gray-500">Bei komplexen Anfragen oder Aufgaben</p>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="left" delay={1.2} className="mt-4 md:mt-0 md:w-2/5 md:pl-12">
                        <h3 className="text-xl font-bold text-black">Human in the Loop</h3>
                        <p className="mt-2 text-gray-600">
                          Bei Bedarf kann jederzeit an ein menschliches Team übergeben werden – für eine reibungslose
                          Eskalation komplexer Anfragen.
                        </p>
                      </AnimatedSection>
                    </div>
                  </div>

                  {/* Schritt 5 */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <AnimatedSection
                        direction="none"
                        delay={1.3}
                        className="absolute left-1/2 -translate-x-1/2 transform"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90] text-black">
                          5
                        </div>
                      </AnimatedSection>
                    </div>
                    <div className="ml-12 mt-12 md:ml-0 md:mt-0 md:flex md:items-center md:justify-center">
                      <AnimatedSection direction="right" delay={1.4} className="md:w-2/5 md:pr-12 md:text-right">
                        <h3 className="text-xl font-bold text-black">Zufriedene Mitglieder</h3>
                        <p className="mt-2 text-gray-600">
                          Mitglieder erhalten sofortige Rückmeldungen über ihre bevorzugten Kanäle, ihre Anliegen werden
                          effizient geklärt und die Zufriedenheit steigt.
                        </p>
                      </AnimatedSection>
                      <AnimatedSection direction="left" delay={1.5} className="mt-4 md:mt-0 md:w-2/5 md:pl-12">
                        <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 border-l-4 border-[#E4FD90]">
                          <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FD90]">
                              <Smile className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">Glückliche Mitglieder</p>
                              <p className="text-sm text-gray-500">Höhere Zufriedenheit durch schnelle Kommunikation</p>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile auf einen Blick */}
        <section id="vorteile" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Vorteile auf einen Blick</h2>
              <p className="mt-4 text-lg text-gray-600">
                Mit athleo profitierst du von zahlreichen Vorteilen für dein Fitnessstudio.
              </p>
            </AnimatedSection>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* 1 */}
              <AnimatedSection direction="up" delay={0.1}>
                <div className="flex flex-col rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 duration-300 h-full border-b-4 border-[#E4FD90]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4FD90] mb-6">
                    <CircleDollarSign className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Mehr Umsatz</h3>
                  <p className="mt-4 text-gray-600">Höhere Lead-Conversion & automatisches Upselling.</p>
                </div>
              </AnimatedSection>

              {/* 2 */}
              <AnimatedSection direction="up" delay={0.2}>
                <div className="flex flex-col rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 duration-300 h-full border-b-4 border-[#E4FD90]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4FD90] mb-6">
                    <UserCheck className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Weniger Kündigungen</h3>
                  <p className="mt-4 text-gray-600">Erkennt Risiken & reagiert frühzeitig – inkl. Einwandbehandlung.</p>
                </div>
              </AnimatedSection>

              {/* 3 */}
              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex flex-col rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 duration-300 h-full border-b-4 border-[#E4FD90]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4FD90] mb-6">
                    <ChartLine className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">KPIs verbessern</h3>
                  <p className="mt-4 text-gray-600">Jeder AI-Agent arbeitet datenbasiert & messbar.</p>
                </div>
              </AnimatedSection>

              {/* 4 */}
              <AnimatedSection direction="up" delay={0.4}>
                <div className="flex flex-col rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 duration-300 h-full border-b-4 border-[#E4FD90]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4FD90] mb-6">
                    <Clock className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Weniger Aufwand</h3>
                  <p className="mt-4 text-gray-600">Senkt Personalressourcen & schafft Zeit fürs Wesentliche.</p>
                </div>
              </AnimatedSection>

              {/* 5 */}
              <AnimatedSection direction="up" delay={0.5}>
                <div className="flex flex-col rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 duration-300 h-full border-b-4 border-[#E4FD90]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4FD90] mb-6">
                    <RotateCcw className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">24/7 erreichbar</h3>
                  <p className="mt-4 text-gray-600">Immer da für deine Mitglieder für eine höhere Zufriedenheit.</p>
                </div>
              </AnimatedSection>

              {/* 6 */}
              <AnimatedSection direction="up" delay={0.6}>
                <div className="flex flex-col rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 duration-300 h-full border-b-4 border-[#E4FD90]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4FD90] mb-6">
                    <TrendingUp className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Flexibel skalierbar</h3>
                  <p className="mt-4 text-gray-600">Wachse mit einer Lösung, die für die Zukunft gewappnet ist.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Trust-Sektion / Gefördert durch */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Gefördert durch</h2>
              <p className="mt-4 text-lg text-gray-600">athleo wird unterstützt von führenden Institutionen</p>
            </AnimatedSection>

            <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="flex items-center justify-center">
                  <div className="h-24 w-full rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md hover:scale-105 flex items-center justify-center">
                    <Image
                      src="/partners/sib.png"
                      alt="Startup Incubator Berlin"
                      width={240}
                      height={80}
                      className="h-auto max-h-16 w-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <div className="flex items-center justify-center">
                  <div className="h-24 w-full rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md hover:scale-105 flex items-center justify-center">
                    <Image
                      src="/partners/hwr.png"
                      alt="Hochschule für Wirtschaft und Recht Berlin"
                      width={240}
                      height={80}
                      className="h-auto max-h-16 w-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex items-center justify-center">
                  <div className="h-24 w-full rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md hover:scale-105 flex items-center justify-center">
                    <Image
                      src="/partners/eu.png"
                      alt="Kofinanziert von der Europäischen Union"
                      width={240}
                      height={80}
                      className="h-auto max-h-16 w-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="flex items-center justify-center">
                  <div className="h-24 w-full rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md hover:scale-105 flex items-center justify-center">
                    <Image
                      src="/partners/berlin.png"
                      alt="Land Berlin"
                      width={240}
                      height={80}
                      className="h-auto max-h-16 w-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Call-to-Action / Kontakt */}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <SafeImage
                src="/logo.svg"
                alt="athleo Logo"
                width={240}
                height={80}
                className="h-16 w-auto"
                fallbackText="athleo"
              />
              <p className="mt-4 text-sm text-gray-600">
                KI-Agenten für mehr Umsatz, weniger Kündigungen und zufriedene Mitglieder.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black">Leistungen</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <ScrollLink href="#leistungen" className="text-sm text-gray-600 hover:text-black transition-colors">
                    Mitgliedergewinnung
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink href="#leistungen" className="text-sm text-gray-600 hover:text-black transition-colors">
                    Mitgliederbindung
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink href="#leistungen" className="text-sm text-gray-600 hover:text-black transition-colors">
                    Mitgliederservice
                  </ScrollLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black">Kontakt</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                  <a href="mailto:team@athleo.de" className="text-sm text-gray-600 hover:text-black transition-colors">
                    team@athleo.de
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    <div>The Drivery, c/o athleo</div>
                    <div>Mariendorfer Damm 1</div>
                    <div>12099 Berlin</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} athleo UG. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
