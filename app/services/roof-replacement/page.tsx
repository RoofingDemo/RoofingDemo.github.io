"use client"

import { Home, Wrench, CloudLightning, Droplets, Search } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function RoofReplacementPage() {
  return (
    <ServicePageLayout
      title="Roof Replacement"
      description="Complete roof replacement with premium materials, expert installation, and industry-leading warranties."
      heroImage="/images/hero-roof.jpg"
      icon={Home}
      serviceSlug="roof-replacement"
      detailedDescription={[
        "A complete roof replacement is one of the most important investments you can make in your home. When repairs are no longer sufficient to protect your property, a full roof replacement provides lasting peace of mind and protection for decades to come.",
        "At our company, we use only premium roofing materials from trusted manufacturers like GAF and Owens Corning. Our certified installers follow strict quality standards to ensure your new roof is built to last and backed by comprehensive warranties.",
        "From the initial inspection to the final cleanup, we handle every aspect of your roof replacement project. We'll work with you to select the perfect shingle style and color to enhance your home's curb appeal while providing maximum protection against the elements.",
        "Our team completes most residential roof replacements in just 1-2 days, minimizing disruption to your daily life. We also offer flexible financing options to make your investment more manageable."
      ]}
      benefits={[
        "Increased home value and curb appeal",
        "Improved energy efficiency and lower utility bills",
        "Enhanced protection against weather damage",
        "Elimination of ongoing repair costs",
        "Comprehensive manufacturer and workmanship warranties",
        "Modern roofing technology and materials"
      ]}
      warningSigns={[
        "Roof is 20+ years old",
        "Multiple missing or damaged shingles",
        "Visible sagging or structural issues",
        "Frequent leaks in multiple locations",
        "Extensive granule loss in gutters",
        "Daylight visible through roof boards"
      ]}
      processSteps={[
        {
          title: "Free Inspection",
          description: "We thoroughly assess your current roof condition and document any issues."
        },
        {
          title: "Detailed Quote",
          description: "You receive a transparent, itemized estimate with material options and pricing."
        },
        {
          title: "Scheduling",
          description: "We coordinate a convenient installation date that works for your schedule."
        },
        {
          title: "Expert Installation",
          description: "Our certified crew completes your roof replacement with attention to every detail."
        }
      ]}
      relatedServices={[
        { title: "Roof Repair", href: "/services/roof-repair", icon: Wrench },
        { title: "Storm Damage", href: "/services/storm-damage", icon: CloudLightning },
        { title: "Roof Inspection", href: "/services/roof-inspection", icon: Search }
      ]}
      reviews={[
        {
          name: "Jennifer M.",
          rating: 5,
          text: "They replaced our entire roof in just one day. The crew was professional, cleaned up perfectly, and the new roof looks amazing. Highly recommend!"
        },
        {
          name: "Robert H.",
          rating: 5,
          text: "After getting quotes from several companies, we chose them for their transparency and quality materials. Best decision we made for our home."
        }
      ]}
    />
  )
}
