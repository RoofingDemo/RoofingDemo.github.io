"use client"

import { Droplets, Home, Wrench, Search, CloudLightning } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function GutterCleaningPage() {
  return (
    <ServicePageLayout
      title="Gutter Cleaning"
      description="Professional gutter cleaning and maintenance to protect your home from water damage."
      heroImage="/images/hero-roof.jpg"
      icon={Droplets}
      serviceSlug="gutter-cleaning"
      detailedDescription={[
        "Clean, properly functioning gutters are essential for protecting your home from water damage. When gutters become clogged with leaves, debris, and sediment, water can overflow and damage your foundation, siding, landscaping, and even your roof.",
        "Our professional gutter cleaning service removes all debris, flushes the downspouts to ensure proper drainage, and inspects your entire gutter system for potential issues. We also clean up all debris from your property.",
        "Regular gutter maintenance is one of the most cost-effective ways to prevent expensive water damage repairs. We recommend cleaning your gutters at least twice a year — in spring and fall — or more frequently if you have overhanging trees.",
        "In addition to cleaning, we can repair damaged gutters, install gutter guards to reduce future maintenance, and replace gutters that are beyond repair. Ask about our seasonal maintenance plans for year-round protection."
      ]}
      benefits={[
        "Prevents water damage to foundation and siding",
        "Protects landscaping from erosion",
        "Reduces risk of basement flooding",
        "Extends the life of your gutter system",
        "Prevents pest infestations in clogged gutters",
        "Maintains your home's curb appeal"
      ]}
      warningSigns={[
        "Water overflowing from gutters during rain",
        "Visible debris or plants growing in gutters",
        "Staining on siding below gutter line",
        "Gutters pulling away from the house",
        "Pooling water near foundation",
        "Birds or pests nesting in gutters"
      ]}
      processSteps={[
        {
          title: "Inspection",
          description: "We assess your gutter system condition and identify problem areas."
        },
        {
          title: "Debris Removal",
          description: "All leaves, twigs, and sediment are removed from gutters by hand."
        },
        {
          title: "Flushing",
          description: "Downspouts are flushed to ensure proper water flow."
        },
        {
          title: "Final Check",
          description: "We verify drainage and clean up all debris from your property."
        }
      ]}
      relatedServices={[
        { title: "Roof Inspection", href: "/services/roof-inspection", icon: Search },
        { title: "Roof Repair", href: "/services/roof-repair", icon: Wrench },
        { title: "Roof Replacement", href: "/services/roof-replacement", icon: Home }
      ]}
      reviews={[
        {
          name: "Patricia L.",
          rating: 5,
          text: "They cleaned out years of debris from our gutters and even fixed a section that was pulling away from the house. Fair price and great work!"
        },
        {
          name: "Steve M.",
          rating: 5,
          text: "We signed up for their seasonal maintenance plan. They come twice a year, clean the gutters, and check the roof. Worth every penny for the peace of mind."
        }
      ]}
    />
  )
}
