"use client"

import Link from "next/link"
import { MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteForm } from "@/components/quote-form"
import { CTAStrip } from "@/components/cta-strip"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"
import serviceAreasData from "@/data/serviceAreas.json"

// PLACEHOLDER: Service area locations — client to customize
const SERVICE_AREAS = [
  {
    name: "Charlotte",
    description: "Our home base and primary service area. We know Charlotte neighborhoods inside and out.",
    isPrimary: true,
  },
  {
    name: "Matthews",
    description: "Serving homeowners throughout Matthews with quality roofing services.",
    isPrimary: false,
  },
  {
    name: "Mint Hill",
    description: "Fast response times and local expertise for Mint Hill residents.",
    isPrimary: false,
  },
  {
    name: "Huntersville",
    description: "Professional roofing solutions for the Huntersville community.",
    isPrimary: false,
  },
  {
    name: "Cornelius",
    description: "Lake Norman area roofing experts serving Cornelius homeowners.",
    isPrimary: false,
  },
  {
    name: "Davidson",
    description: "Quality roofing services for Davidson homes and businesses.",
    isPrimary: false,
  },
  {
    name: "Concord",
    description: "Serving Concord with comprehensive roofing solutions.",
    isPrimary: false,
  },
  {
    name: "Kannapolis",
    description: "Expert roofing services for Kannapolis residents.",
    isPrimary: false,
  },
  {
    name: "Gastonia",
    description: "Extending our quality services to the Gastonia area.",
    isPrimary: false,
  },
  {
    name: "Rock Hill",
    description: "Crossing the border to serve our South Carolina neighbors in Rock Hill.",
    isPrimary: false,
  },
  {
    name: "Fort Mill",
    description: "Quality roofing for the growing Fort Mill community.",
    isPrimary: false,
  },
  {
    name: "Indian Trail",
    description: "Professional roofing services for Indian Trail homeowners.",
    isPrimary: false,
  },
  {
    name: "Monroe",
    description: "Serving Monroe and Union County with expert roofing.",
    isPrimary: false,
  },
  {
    name: "Pineville",
    description: "Local roofing solutions for Pineville residents.",
    isPrimary: false,
  },
  {
    name: "Mooresville",
    description: "Lake Norman area expertise for Mooresville homeowners.",
    isPrimary: false,
  },
]

export default function ServiceAreaPage() {
  const { shopName, city, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")
  
  // Match city from useShopInfo against service areas JSON (case-insensitive)
  const matchedKey = Object.keys(serviceAreasData).find(
    key => key !== "_parents" && key.toLowerCase() === city.toLowerCase()
  )

  let dynamicAreas: string[] = []

  if (matchedKey) {
    dynamicAreas = (serviceAreasData as Record<string, string[]>)[matchedKey]
  } else {
    const parents = (serviceAreasData as { _parents?: Record<string, string> })._parents || {}
    const parentKey = Object.keys(parents).find(
      key => key.toLowerCase() === city.toLowerCase()
    )
    if (parentKey) {
      const parentCity = parents[parentKey]
      dynamicAreas = (serviceAreasData as Record<string, string[]>)[parentCity].filter(
        (a: string) => a.toLowerCase() !== city.toLowerCase()
      )
    } else {
      dynamicAreas = ["Surrounding Areas"]
    }
  }
  
  const primaryArea = SERVICE_AREAS.find((area) => area.isPrimary) || SERVICE_AREAS[0]

  return (
    <div className="pb-14 lg:pb-0">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Roofing Services in {city} and Surrounding Areas
          </h1>

        </div>
      </section>

      {/* Map and Primary Location */}
      {/* <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 bg-secondary rounded-lg border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-20 w-20 text-primary mx-auto mb-4" />
                <p className="font-serif text-xl font-bold text-foreground mb-2">
                  Service Area Map
                </p>
                <p className="text-muted-foreground">
                  Coverage radius around {city}
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Interactive map showing our service coverage
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                {primaryArea.name} — Our Home Base
              </h2>
              <p className="text-muted-foreground mb-6">
                {primaryArea.description} As longtime {city} residents ourselves, we understand the unique challenges our local climate presents for roofs — from summer heat to severe storms.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team provides fast response times throughout the {city} metro area. Whether you need a complete roof replacement, emergency storm damage repair, or routine maintenance, we&apos;re just a call away.
              </p>

              <div className="bg-secondary rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Why Choose a Local Roofer?
                </h3>
                <ul className="space-y-2">
                  {[
                    "We know local building codes and permit requirements",
                    "Fast response times for emergencies",
                    "Understanding of regional weather patterns",
                    "Strong relationships with local suppliers",
                    "Accountability to our community",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 font-bold">
                  <Link href={getLink("/contact")}>Request a Free Quote</Link>
                </Button>
                <a
                  href={`tel:${formattedPhone}`}
                  className="phone-link text-xl flex items-center justify-center gap-2 px-4 py-2"
                  aria-label={`Call ${shopName} at ${phone}`}
                >
                  <Phone className="h-5 w-5" />
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Dynamic Service Areas Chips */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert roofing services near you
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We proudly provide professional roofing services to homeowners throughout the greater {city} metropolitan area.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {dynamicAreas.map((area) => (
              <div
                key={area}
                className="inline-flex items-center justify-center gap-1.5 bg-card text-foreground px-4 py-2.5 rounded-full text-sm font-medium border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
              >
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Areas Grid */}
      {/* <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Service Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We serve homeowners throughout these communities with the same dedication to quality and customer service.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Card key={area.name} className={area.isPrimary ? "border-primary" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      area.isPrimary ? "bg-primary" : "bg-primary/10"
                    }`}>
                      <MapPin className={`h-5 w-5 ${
                        area.isPrimary ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        {area.name}
                        {area.isPrimary && (
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                            HQ
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Location-specific SEO sections */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Roofing Services By Location
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {dynamicAreas.slice(0, 4).map((area) => (
              <div key={area.name} className="prose prose-sm max-w-none">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  Roofing in {area}
                </h3>
                {/* PLACEHOLDER: Location-specific content — client to customize for SEO */}
                <p className="text-muted-foreground">
                  Looking for a reliable roofer in {area}? {shopName} provides comprehensive roofing services including roof replacement, roof repair, storm damage restoration, and routine maintenance. Our team serves {area.name} homeowners with the same commitment to quality that has made us a trusted name in the {city} area for over 20 years.
                </p>
        
                <p className="text-muted-foreground">
                  Contact us today for a free inspection at your {area} home. We offer flexible financing, work with all insurance carriers, and stand behind our work with comprehensive warranties.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving Your Area — Get a Free Quote Today
              </h2>
              <p className="text-muted-foreground mb-6">
                No matter where you are in our service area, we provide the same great service. Fill out the form to schedule your free inspection.
              </p>
              <p className="text-muted-foreground mb-6">
                Not sure if we serve your area? Give us a call — we&apos;re always happy to help neighbors in need.
              </p>
              <a
                href={`tel:${formattedPhone}`}
                className="phone-link text-2xl flex items-center gap-2"
                aria-label={`Call ${shopName} at ${phone}`}
              >
                <Phone className="h-6 w-6" />
                {phone}
              </a>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <CTAStrip headline="Ready to Get Started? Request Your Free Quote Today." />
    </div>
  )
}
