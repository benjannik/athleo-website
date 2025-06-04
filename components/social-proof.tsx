"use client"

import Image from "next/image"
import { Star, TrendingUp, Users, Award } from 'lucide-react'
import AnimatedSection from "./animated-section"
import StaggeredList from "./staggered-list"

export default function SocialProof() {
  const testimonials = [
    {
      name: "Marcus Weber",
      studio: "FitZone Berlin",
      image: "/placeholder.svg?height=80&width=80&query=fitness+studio+owner+male",
      quote: "In nur 6 Wochen haben wir 127 neue Mitglieder gewonnen. athleo hat unser Studio komplett transformiert.",
      results: "+127 Mitglieder in 6 Wochen",
      rating: 5,
    },
    {
      name: "Sarah Müller",
      studio: "PowerGym Hamburg",
      image: "/placeholder.svg?height=80&width=80&query=fitness+studio+owner+female",
      quote: "Endlich können wir uns aufs Training konzentrieren, während athleo automatisch neue Kunden gewinnt.",
      results: "+89% mehr Leads",
      rating: 5,
    },
    {
      name: "Thomas Klein",
      studio: "SportCenter München",
      image: "/placeholder.svg?height=80&width=80&query=fitness+studio+manager+male",
      quote: "Die Investition hat sich bereits nach 2 Wochen amortisiert. Unglaubliche Conversion-Raten!",
      results: "ROI nach 14 Tagen",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
            Über 500 Studios vertrauen bereits auf athleo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schließe dich erfolgreichen Studiobetreibern an, die ihre Mitgliederzahlen mit athleo verdreifacht haben.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StaggeredList>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.studio}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
                <div className="bg-[#E4FD90] rounded-lg p-3 text-center">
                  <span className="font-bold text-black">{testimonial.results}</span>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>

        {/* Trust indicators */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#E4FD90] rounded-full p-3 mb-2">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-black">500+</div>
              <div className="text-sm text-gray-600">Aktive Studios</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#E4FD90] rounded-full p-3 mb-2">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-black">50k+</div>
              <div className="text-sm text-gray-600">Neue Mitglieder gewonnen</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#E4FD90] rounded-full p-3 mb-2">
                <Award className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-black">4.9/5</div>
              <div className="text-sm text-gray-600">Kundenbewertung</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#E4FD90] rounded-full p-3 mb-2">
                <Star className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-black">98%</div>
              <div className="text-sm text-gray-600">Weiterempfehlung</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
