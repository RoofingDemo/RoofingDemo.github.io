"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"

export function MobileBottomBar() {
  const { shopName, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-lg">
      <div className="flex h-14">
        {/* Phone Call Button */}
        <a
          href={`tel:${formattedPhone}`}
          className="flex flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-base"
          aria-label={`Call ${shopName} at ${phone}`}
        >
          <Phone className="h-5 w-5" />
          <span>{phone}</span>
        </a>

        {/* Request Quote Button */}
        <Link
          href={getLink("/contact")}
          className="flex flex-1 items-center justify-center bg-destructive text-destructive-foreground font-bold text-base"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  )
}
