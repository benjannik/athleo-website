import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "athleo - Mehr Mitglieder mit KI-Automatisierung",
  description: "Gewinne automatisch neue Fitnessstudio-Mitglieder mit athleo's KI-System. Kostenloser 30-Tage Test.",
  keywords: ["Fitnessstudio", "KI", "Automatisierung", "Mitgliedergewinnung", "athleo"],
  authors: [{ name: "athleo GmbH" }],
  creator: "athleo GmbH",
  publisher: "athleo GmbH",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://athleo.de",
    title: "athleo - Mehr Mitglieder mit KI-Automatisierung",
    description: "Gewinne automatisch neue Fitnessstudio-Mitglieder mit athleo's KI-System.",
    siteName: "athleo",
  },
  twitter: {
    card: "summary_large_image",
    title: "athleo - Mehr Mitglieder mit KI-Automatisierung",
    description: "Gewinne automatisch neue Fitnessstudio-Mitglieder mit athleo's KI-System.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
