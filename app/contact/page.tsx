"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CTAStrip } from "@/components/cta-strip"
import { useShopInfo } from "@/hooks/use-shop-info"

const SERVICES = [
  { value: "roof-replacement", label: "Roof Replacement" },
  { value: "roof-repair", label: "Roof Repair" },
  { value: "storm-damage", label: "Storm Damage" },
  { value: "gutter-cleaning", label: "Gutter Cleaning" },
  { value: "roof-inspection", label: "Roof Inspection" },
  { value: "other", label: "Other / Not Sure" },
]

const CONTACT_TIMES = [
  { value: "morning", label: "Morning (8am - 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
  { value: "evening", label: "Evening (5pm - 8pm)" },
  { value: "anytime", label: "Any Time" },
]

// PLACEHOLDER: Business hours — client to customize
const BUSINESS_HOURS = [
  { day: "Monday", hours: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
  { day: "Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactPage() {
  const { shopName, city, phone } = useShopInfo()
  const formattedPhone = phone.replace(/[^0-9]/g, "")
  
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // PLACEHOLDER: Connect to CRM or email endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="pb-14 lg:pb-0">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Ready to get started? Contact us today for a free inspection and quote.
          </p>
          
          {/* Prominent Phone Number */}
          <a
            href={`tel:${formattedPhone}`}
            className="inline-flex items-center gap-3 bg-destructive hover:bg-destructive/90 text-white font-bold text-2xl md:text-3xl px-8 py-4 rounded-lg transition-colors"
            aria-label={`Call ${shopName} at ${phone}`}
          >
            <Phone className="h-8 w-8" />
            {phone}
          </a>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <a
                  href={`tel:${formattedPhone}`}
                  className="phone-link text-xl"
                  aria-label={`Call ${shopName} at ${phone}`}
                >
                  {phone}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                {/* PLACEHOLDER: Email address — client to provide */}
                <a
                  href="mailto:info@example.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  info@example.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                {/* PLACEHOLDER: Business address — client to provide */}
                <p className="text-muted-foreground">
                  123 Main Street<br />
                  {city}, NC 28202
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                Request Your Free Quote
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We&apos;ve received your request and will contact you within 24 hours to schedule your free inspection.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Need immediate assistance? Call us at{" "}
                      <a href={`tel:${formattedPhone}`} className="phone-link">
                        {phone}
                      </a>
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="address">Service Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      placeholder="123 Main Street, Charlotte, NC 28202"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select name="service" required>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="contactTime">Preferred Contact Time</Label>
                      <Select name="contactTime">
                        <SelectTrigger id="contactTime">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {CONTACT_TIMES.map((time) => (
                            <SelectItem key={time.value} value={time.value}>
                              {time.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">
                      Tell Us About Your Project{" "}
                      <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Please describe your roofing needs, any damage you've noticed, or questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-destructive hover:bg-destructive/90 text-white font-bold"
                  >
                    {isSubmitting ? "Submitting..." : "Request My Free Quote"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    <Clock className="h-4 w-4 inline mr-1" />
                    We respond to all requests within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Business Info */}
            <div>
              {/* Hours */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    {BUSINESS_HOURS.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-foreground font-medium">
                          {item.day}
                        </span>
                        <span className="text-muted-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                    24/7 emergency service available for storm damage
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  {/* PLACEHOLDER: Google Maps embed — client to provide Place ID */}
                  <div className="aspect-video bg-secondary flex items-center justify-center rounded-t-lg">
                    <div className="text-center p-8">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                      <p className="text-muted-foreground">
                        Google Maps Embed
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {/* PLACEHOLDER: Google Maps iframe — client to provide */}
                        Replace with Google Maps iframe
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-foreground">{shopName}</p>
                    {/* PLACEHOLDER: Full address — client to provide */}
                    <p className="text-sm text-muted-foreground">
                      123 Main Street, {city}, NC 28202
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Response Commitment */}
              <div className="mt-6 bg-primary/5 rounded-lg p-6 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Our Commitment to You
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    We respond to all requests within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Free, no-obligation inspections and quotes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Licensed, insured, and certified contractors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <CTAStrip headline="Have Questions? We're Here to Help." />
    </div>
  )
}
