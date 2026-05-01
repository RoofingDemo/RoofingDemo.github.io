"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, DollarSign, Clock, CheckCircle, FileText, Shield, HelpCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { QuoteForm } from "@/components/quote-form"
import { CTAStrip } from "@/components/cta-strip"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"

const FINANCING_BENEFITS = [
  {
    icon: DollarSign,
    title: "Low Monthly Payments",
    description: "Spread the cost of your new roof over time with affordable monthly payments.",
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get approved in minutes with our simple application process.",
  },
  {
    icon: CheckCircle,
    title: "No Prepayment Penalty",
    description: "Pay off your balance early at any time with no additional fees.",
  },
]

const INSURANCE_STEPS = [
  {
    number: 1,
    title: "We Inspect Your Roof",
    description: "Our certified inspectors thoroughly document all storm damage with photos and detailed reports.",
  },
  {
    number: 2,
    title: "We Document All Damage",
    description: "We prepare a comprehensive damage assessment that meets insurance company requirements.",
  },
  {
    number: 3,
    title: "We Work With Your Adjuster",
    description: "We meet directly with your insurance adjuster to ensure all damage is properly assessed.",
  },
  {
    number: 4,
    title: "We Complete the Repairs",
    description: "Once approved, we restore your roof to pre-storm condition with quality materials.",
  },
]

const INSURANCE_FAQS = [
  {
    question: "Will filing a claim raise my insurance rates?",
    answer: "In most cases, filing a claim for storm damage does not raise your rates because the damage was caused by a covered weather event beyond your control. However, insurance policies vary, so we recommend checking with your insurance provider for specific details about your policy.",
  },
  {
    question: "How long does the insurance process take?",
    answer: "The timeline varies depending on your insurance company and the extent of the damage. Typically, from initial claim to completed repairs takes 2-4 weeks. We work to expedite the process by providing thorough documentation and meeting with adjusters promptly.",
  },
  {
    question: "What if my claim is denied?",
    answer: "If your initial claim is denied, don't worry — we can help you file an appeal. We've successfully helped many homeowners overturn initial denials by providing additional documentation and working directly with insurance companies. We're on your side throughout the process.",
  },
  {
    question: "Do I have to pay anything out of pocket?",
    answer: "In most cases, you are only responsible for your insurance deductible. The insurance company pays the rest directly. We'll explain exactly what to expect during your free inspection.",
  },
]

// PLACEHOLDER: Insurance carrier logos — client to provide
const INSURANCE_CARRIERS = [
  "State Farm",
  "Allstate",
  "USAA",
  "Liberty Mutual",
  "Farmers",
  "Nationwide",
]

export default function FinancingPage() {
  const { shopName, city, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")

  return (
    <div className="pb-14 lg:pb-0">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Financing &amp; Insurance
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Don&apos;t let cost or paperwork stop you from protecting your home. We make it easy.
          </p>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don&apos;t Let Cost Stop You
              </h2>
              <p className="text-muted-foreground mb-6">
                A new roof is a significant investment, but it shouldn&apos;t be out of reach. We&apos;ve partnered with leading financing providers to offer flexible payment options that fit your budget.
              </p>
              <p className="text-muted-foreground mb-8">
                With quick approval and competitive rates, you can get the roof you need now and pay over time. Our team will help you explore your options and find the best solution for your situation.
              </p>

              <div className="grid gap-4 mb-8">
                {FINANCING_BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-destructive hover:bg-destructive/90 font-bold"
              >
                {/* PLACEHOLDER: Financing application link — client to provide */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Apply for Financing
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src="/images/portfolio-1.jpg"
                alt="Quality roof installation"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Storm Damage? We Handle the Hard Part.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigating insurance claims can be stressful and confusing. Let us handle it for you so you can focus on what matters.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {INSURANCE_STEPS.map((step) => (
              <Card key={step.number}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Callout */}
          <div className="bg-destructive/10 border-l-4 border-destructive rounded-r-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-destructive text-lg mb-1">
                  Need Emergency Storm Damage Help?
                </p>
                <p className="text-foreground">
                  Call us now for 24/7 emergency response. We&apos;ll be there when you need us.
                </p>
              </div>
              <a
                href={`tel:${formattedPhone}`}
                className="phone-link text-2xl flex items-center gap-2 whitespace-nowrap"
                aria-label={`Call ${shopName} at ${phone}`}
              >
                <Phone className="h-6 w-6" />
                {phone}
              </a>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {INSURANCE_FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Insurance Carriers */}
      <section className="py-12 bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              We Work With All Major Insurance Carriers
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {/* PLACEHOLDER: Insurance carrier logos — client to provide */}
            {INSURANCE_CARRIERS.map((carrier) => (
              <div
                key={carrier}
                className="bg-secondary rounded-lg px-4 py-3 border border-border"
              >
                <span className="font-medium text-foreground">{carrier}</span>
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
                Schedule Your Free Insurance Inspection
              </h2>
              <p className="text-muted-foreground mb-6">
                Think you might have storm damage? Let us inspect your roof for free. We&apos;ll document any damage and help you navigate the insurance process.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Free, no-obligation inspection",
                  "Complete damage documentation",
                  "Help filing your insurance claim",
                  "Direct communication with adjusters",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <QuoteForm preSelectedService="storm-damage" />
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <CTAStrip headline="Need Help With Financing or Insurance? We're Here to Help." />
    </div>
  )
}
