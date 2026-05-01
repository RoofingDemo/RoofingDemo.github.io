"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"

const SERVICES = [
  { href: "/services/roof-replacement", label: "Roof Replacement" },
  { href: "/services/roof-repair", label: "Roof Repair" },
  { href: "/services/storm-damage", label: "Storm Damage" },
  { href: "/services/gutter-cleaning", label: "Gutter Cleaning" },
  { href: "/services/roof-inspection", label: "Roof Inspection" },
]

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/financing", label: "Financing" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  const { shopName, city, phone } = useShopInfo()
  const getLink = usePreservedLink()
  const formattedPhone = phone.replace(/[^0-9]/g, "")

  return (
    <footer className="bg-primary text-primary-foreground pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">{shopName}</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted local roofing experts serving {city} and surrounding
              areas.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${formattedPhone}`}
                className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
                aria-label={`Call ${shopName} at ${phone}`}
              >
                <Phone className="h-4 w-4" />
                <span className="font-bold">{phone}</span>
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{/* PLACEHOLDER: Email — client to provide */}info@example.com</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>{/* PLACEHOLDER: Address — client to provide */}123 Main St, {city}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Our Services</h4>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={getLink(service.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLink(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {/* PLACEHOLDER: Certification logos — client to provide */}
              <div className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-sm">
                GAF Certified
              </div>
              <div className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-sm">
                Owens Corning
              </div>
              <div className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-sm">
                BBB Accredited
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-4">
              Licensed &amp; Insured
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} {shopName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href={getLink("/contact")}
              className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
            >
              Request a Quote
            </Link>
            <span className="text-primary-foreground/40">|</span>
            <a
              href={`tel:${formattedPhone}`}
              className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
              aria-label={`Call ${shopName} at ${phone}`}
            >
              Call {phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
