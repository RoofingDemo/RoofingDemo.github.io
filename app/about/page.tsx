"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Award, Users, Home, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteForm } from "@/components/quote-form"
import { CTAStrip } from "@/components/cta-strip"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"

const TEAM_MEMBERS = [
  {
    name: "John Smith",
    title: "Founder & CEO",
    bio: "25+ years of roofing experience and a commitment to quality.",
  },
  {
    name: "Sarah Johnson",
    title: "Operations Manager",
    bio: "Ensures every project runs smoothly from start to finish.",
  },
  {
    name: "Mike Williams",
    title: "Lead Estimator",
    bio: "Expert in assessing roof conditions and providing accurate quotes.",
  },
  {
    name: "Emily Davis",
    title: "Customer Relations",
    bio: "Your point of contact for questions and scheduling.",
  },
]

const STATS = [
  { value: "20+", label: "Years in Business" },
  { value: "5,000+", label: "Roofs Completed" },
  { value: "15+", label: "Cities Served" },
  { value: "500+", label: "5-Star Reviews" },
]

const CERTIFICATIONS = [
  {
    name: "GAF Certified Contractor",
    description: "Certified to install GAF roofing systems with enhanced warranty coverage.",
  },
  {
    name: "Owens Corning Preferred",
    description: "Recognized for commitment to quality installation and customer satisfaction.",
  },
  {
    name: "BBB Accredited",
    description: "Maintaining an A+ rating with the Better Business Bureau.",
  },
  {
    name: "Licensed & Insured",
    description: "Fully licensed contractor with comprehensive liability coverage.",
  },
]

export default function AboutPage() {
  const { shopName, city, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")

  return (
    <div className="pb-14 lg:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-primary">
          <Image
            src="/images/hero-roof.jpg"
            alt={`${shopName} team serving ${city}`}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center lg:text-left">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              About {shopName}
            </h1>
            <p className="text-xl text-white/90 mb-2">
              Serving {city} Since 2004
            </p>
            <p className="text-2xl text-white font-semibold">
              Your Neighbors in Roofing
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              {/* PLACEHOLDER: Company story — client to customize */}
              <div className="prose prose-lg">
                <p className="text-muted-foreground mb-4">
                  Founded in 2004, {shopName} began with a simple mission: to provide homeowners in {city} with honest, quality roofing services at fair prices. What started as a small family operation has grown into one of the region&apos;s most trusted roofing contractors.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, a third-generation roofer, built this company on the values he learned growing up: hard work, integrity, and treating every home like it was his own. Those values remain at the core of everything we do today.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we&apos;ve completed thousands of roofing projects across the greater {city} area. From small repairs to complete roof replacements, storm damage restoration to commercial projects, we&apos;ve built our reputation one roof at a time.
                </p>
                <p className="text-muted-foreground">
                  Today, we&apos;re proud to be GAF and Owens Corning certified contractors, recognized for our commitment to quality installation and customer satisfaction. But what we&apos;re most proud of is the trust our neighbors place in us to protect their homes.
                </p>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* PLACEHOLDER: Company photo — client to provide (600x600px) */}
              <Image
                src="/images/portfolio-1.jpg"
                alt={`${shopName} team at work`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                  {/* PLACEHOLDER: Stats — client to provide actual numbers */}
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing exceptional service on every project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  {/* PLACEHOLDER: Team member photo — client to provide (300x300px) */}
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards and certifications to ensure quality workmanship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {/* PLACEHOLDER: Certification name and logo — client to provide */}
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-video max-w-lg mx-auto lg:mx-0">
              {/* PLACEHOLDER: Community/local photo — client to provide (800x450px) */}
              <Image
                src="/images/portfolio-2.jpg"
                alt={`${shopName} serving the ${city} community`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proudly Serving {city} and Surrounding Areas
              </h2>
              <p className="text-muted-foreground mb-4">
                We&apos;re not just a roofing company — we&apos;re members of this community. Our team lives and works here, and we take pride in helping our neighbors protect their homes.
              </p>
              <p className="text-muted-foreground mb-6">
                From sponsoring local little league teams to participating in community cleanup events, we believe in giving back to the place we call home.
              </p>
              <Button asChild>
                <Link href={getLink("/service-area")}>
                  View Our Service Area
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Work With a Team You Can Trust?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact us today for a free inspection and quote. We&apos;ll show you why thousands of homeowners have trusted us with their roofs.
              </p>
              <div className="flex items-center gap-4">
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
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <CTAStrip headline="Ready to Get Started? Request Your Free Quote Today." />
    </div>
  )
}
