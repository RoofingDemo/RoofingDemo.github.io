"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrustBar } from "@/components/trust-bar"
import { QuoteForm } from "@/components/quote-form"
import { CTAStrip } from "@/components/cta-strip"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"
import type { LucideIcon } from "lucide-react"

interface ServicePageLayoutProps {
  title: string
  description: string
  heroImage: string
  icon: LucideIcon
  benefits: string[]
  warningSigns: string[]
  processSteps: {
    title: string
    description: string
  }[]
  relatedServices: {
    title: string
    href: string
    icon: LucideIcon
  }[]
  reviews: {
    name: string
    text: string
    rating: number
  }[]
  serviceSlug: string
  showEmergencyCallout?: boolean
  detailedDescription: string[]
}

export function ServicePageLayout({
  title,
  description,
  heroImage,
  icon: Icon,
  benefits,
  warningSigns,
  processSteps,
  relatedServices,
  reviews,
  serviceSlug,
  showEmergencyCallout = false,
  detailedDescription,
}: ServicePageLayoutProps) {
  const { shopName, city, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")

  return (
    <div className="pb-14 lg:pb-0">
      {/* Emergency Callout for Storm Damage */}
      {showEmergencyCallout && (
        <div className="bg-destructive/10 border-l-4 border-destructive p-4">
          <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-destructive text-lg">
                Storm or Hail Damage? Call Us Now — We Work With All Insurance Companies.
              </p>
            </div>
            <a
              href={`tel:${formattedPhone}`}
              className="phone-link text-2xl flex items-center gap-2"
              aria-label={`Call ${shopName} at ${phone}`}
            >
              <Phone className="h-6 w-6" />
              {phone}
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-primary">
          <Image
            src={heroImage}
            alt={`${title} services in ${city}`}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {title} in {city}
            </h1>
            <p className="text-xl text-white/90 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-white font-bold text-lg h-14"
              >
                <Link href={getLink("/contact")}>Request a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 bg-transparent"
              >
                <a
                  href={`tel:${formattedPhone}`}
                  aria-label={`Call ${shopName} at ${phone}`}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Detailed Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  About Our {title} Services
                </h2>
                {detailedDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Benefits of Professional {title}
                </h2>
                <div className="grid gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Signs */}
              <div className="mb-12 bg-secondary rounded-lg p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Signs You Need {title}
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {warningSigns.map((sign, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-destructive font-bold text-sm">!</span>
                      </div>
                      <span className="text-foreground">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before & After */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Before &amp; After
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {[1, 2].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        {/* PLACEHOLDER: Before/After photos — client to provide (800x600px) */}
                        <Image
                          src={`/images/portfolio-${item}.jpg`}
                          alt={`${title} project ${item} in ${city}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                            {title}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  How It Works
                </h2>
                <div className="grid gap-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financing Banner */}
              <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-12">
                <h3 className="font-serif text-xl font-bold mb-2">
                  Flexible Financing Available
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Don&apos;t let cost hold you back. We offer financing options to fit your budget.
                </p>
                <Button asChild variant="secondary">
                  <Link href={getLink("/financing")}>
                    Learn About Financing
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Related Reviews */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  What Customers Say About Our {title} Services
                </h2>
                <div className="grid gap-4">
                  {reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-foreground mb-3 italic">&quot;{review.text}&quot;</p>
                        <span className="font-semibold text-foreground">{review.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Related Services
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {relatedServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                        <Link
                          href={getLink(service.href)}
                          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Quote Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <QuoteForm preSelectedService={serviceSlug} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <CTAStrip headline={`Need ${title}? Get Your Free Quote Today.`} />
    </div>
  )
}
