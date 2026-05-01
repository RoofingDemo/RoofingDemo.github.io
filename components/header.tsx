"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/roof-replacement", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/financing", label: "Financing" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { shopName, phone } = useShopInfo()
  const getLink = usePreservedLink()

  const formattedPhone = phone.replace(/[^0-9]/g, "")

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Company Name */}
          <Link
            href={getLink("/")}
            className="font-serif text-xl font-bold text-primary"
          >
            {shopName}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={getLink(link.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone and CTA - Always Visible */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${formattedPhone}`}
              className="hidden sm:flex items-center gap-2 phone-link text-lg"
              aria-label={`Call ${shopName} at ${phone}`}
            >
              <Phone className="h-4 w-4" />
              <span>{phone}</span>
            </a>
            <Button
              asChild
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold"
            >
              <Link href={getLink("/contact")}>Request a Quote</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={getLink(link.href)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
