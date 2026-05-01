"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Star, Home, Wrench, CloudLightning, Droplets, Search, Users, Shield, DollarSign, AlertTriangle, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrustBar } from "@/components/trust-bar"
import { QuoteForm } from "@/components/quote-form"
import { CTAStrip } from "@/components/cta-strip"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"
import serviceAreas from "@/data/serviceAreas.json"

const SERVICES = [
  {
    icon: Home,
    title: "Roof Replacement",
    description: "Complete roof replacement with premium materials and expert installation.",
    href: "/services/roof-replacement",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description: "Fast, reliable repairs to fix leaks, damaged shingles, and more.",
    href: "/services/roof-repair",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "24/7 emergency response for storm and hail damage restoration.",
    href: "/services/storm-damage",
  },
  {
    icon: Droplets,
    title: "Gutter Cleaning",
    description: "Professional gutter cleaning and maintenance services.",
    href: "/services/gutter-cleaning",
  },
  {
    icon: Search,
    title: "Roof Inspection",
    description: "Comprehensive inspections to assess your roof&apos;s condition.",
    href: "/services/roof-inspection",
  },
]

const WHY_CHOOSE_US = [
  {
    icon: Users,
    title: "Local Experts",
    description: "We&apos;re your neighbors. We know the local weather patterns and building codes that affect your roof.",
  },
  {
    icon: Shield,
    title: "Certified & Insured",
    description: "GAF and Owens Corning certified. Fully licensed and insured for your complete protection.",
  },
  {
    icon: DollarSign,
    title: "Financing Available",
    description: "Don&apos;t let cost hold you back. We offer flexible financing options to fit your budget.",
  },
  {
    icon: AlertTriangle,
    title: "Storm Damage Specialists",
    description: "We work directly with your insurance company to make the claims process seamless.",
  },
]

const REVIEWS = [
  {
    name: "Michael T.",
    rating: 5,
    text: "Excellent service from start to finish. The crew was professional, cleaned up after themselves, and the new roof looks amazing!",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "After the hail storm, they were out within hours to assess the damage. Made the insurance process so easy. Highly recommend!",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Fair pricing, quality materials, and the work was completed on time. These guys are the real deal.",
  },
]

export default function HomePage() {
  const { shopName, city, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")
  
  // Match city from useShopInfo against service areas JSON (case-insensitive)
  const matchedKey = Object.keys(serviceAreas).find(
    key => key !== "_parents" && key.toLowerCase() === city.toLowerCase()
  )

  let areas: string[] = []

  if (matchedKey) {
    areas = (serviceAreas as Record<string, string[]>)[matchedKey]
  } else {
    const parents = (serviceAreas as { _parents?: Record<string, string> })._parents || {}
    const parentKey = Object.keys(parents).find(
      key => key.toLowerCase() === city.toLowerCase()
    )
    if (parentKey) {
      const parentCity = parents[parentKey]
      areas = (serviceAreas as Record<string, string[]>)[parentCity].filter(
        (a: string) => a.toLowerCase() !== city.toLowerCase()
      )
    } else {
      areas = ["Surrounding Areas"]
    }
  }

  return (
    <div className="pb-14 lg:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* PLACEHOLDER: Hero background image — client to provide (1920x1080px) */}
        <div className="absolute inset-0 bg-primary">
          <Image
            src="/images/hero-roof.jpg"
            alt={`Professional roofing services in ${city}`}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:text-left">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Expert Roofing in {city}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Licensed. Insured. {shopName}-Certified.
            </p>
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
                  Call Now {phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Roofing Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From complete roof replacements to emergency storm damage repairs, we provide comprehensive roofing solutions for homeowners in {city}.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SERVICES.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
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
      </section>

      {/* Social Proof - Reviews */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">
              {/* PLACEHOLDER: Rating — client to provide actual numbers */}
              5.0 Average Rating from 150+ Reviews
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">&quot;{review.text}&quot;</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{review.name}</span>
                    {/* PLACEHOLDER: Google logo badge */}
                    <span className="text-xs text-muted-foreground">via Google</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* PLACEHOLDER: Google Reviews link — client to provide */}
              See All Reviews on Google
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Recent Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the quality of our craftsmanship in these before and after transformations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  {/* PLACEHOLDER: Before/After photo pairs — client to provide (800x600px) */}
                  <Image
                    src={`/images/portfolio-${item}.jpg`}
                    alt={`Roof replacement project ${item} in ${city}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                      Roof Replacement
                    </span>
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                      {city}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href={getLink("/portfolio")}>
                View Full Portfolio
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose {shopName}?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re not just roofers — we&apos;re your neighbors, committed to protecting your home.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving {city} and Surrounding Areas
              </h2>
              <p className="text-muted-foreground mb-6">
                We proudly serve homeowners throughout the greater {city} area. Click on any location below to learn more about our services in your area.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {areas.map((area) => (
                  <Link
                    key={area}
                    href={getLink("/service-area")}
                    className="inline-flex items-center justify-center gap-1.5 bg-secondary text-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors border border-border hover:border-primary"
                  >
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="truncate">{area}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href={getLink("/service-area")}>
                    View All Service Areas
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* PLACEHOLDER: Service area map image — client to provide (600x600px) */}
              <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Service Area Map</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {/* PLACEHOLDER: Map image — client to provide */}
                    Map showing coverage radius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Certified By Industry Leaders
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* PLACEHOLDER: Certification logos — client to provide */}
            {["GAF", "Owens Corning", "BBB", "CertainTeed"].map((cert) => (
              <div
                key={cert}
                className="bg-card rounded-lg px-6 py-4 border border-border"
              >
                <span className="font-serif font-bold text-primary">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Your Free Roofing Quote
              </h2>
              <p className="text-muted-foreground mb-6">
                Ready to protect your home with a quality roof? Fill out the form and one of our roofing experts will contact you within 24 hours to schedule your free inspection.
              </p>
              <ul className="space-y-3">
                {[
                  "Free, no-obligation roof inspection",
                  "Detailed written estimate",
                  "Transparent pricing — no hidden fees",
                  "Flexible financing options available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <CTAStrip />
    </div>
  )
}
