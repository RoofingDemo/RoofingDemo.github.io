"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"

interface CTAStripProps {
  headline?: string
  subheadline?: string
}

export function CTAStrip({
  headline = "Ready for a New Roof? Get Your Free Quote Today.",
  subheadline,
}: CTAStripProps) {
  const { shopName, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")

  return (
    <section className="bg-destructive py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-destructive-foreground mb-2 text-balance">
          {headline}
        </h2>
        {subheadline && (
          <p className="text-destructive-foreground/90 mb-6">{subheadline}</p>
        )}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <Button
            asChild
            size="lg"
            className="bg-white text-destructive hover:bg-white/90 font-bold"
          >
            <Link href={getLink("/contact")}>Request a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-bold bg-transparent"
          >
            <a
              href={`tel:${formattedPhone}`}
              aria-label={`Call ${shopName} at ${phone}`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call {phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
