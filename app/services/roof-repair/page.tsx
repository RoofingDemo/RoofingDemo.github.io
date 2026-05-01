"use client"

import { Wrench, Home, CloudLightning, Search, Droplets } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      title="Roof Repair"
      description="Fast, reliable roof repairs to fix leaks, damaged shingles, and more. Same-day service available."
      heroImage="/images/hero-roof.jpg"
      icon={Wrench}
      serviceSlug="roof-repair"
      detailedDescription={[
        "Not every roofing problem requires a full replacement. Many issues can be effectively addressed with professional repairs, saving you money while extending the life of your existing roof.",
        "Our experienced repair technicians can diagnose and fix a wide range of roofing problems, from minor shingle damage to more complex leak repairs. We use quality materials that match your existing roof to ensure seamless repairs that last.",
        "We understand that roof problems can't wait. That's why we offer prompt service, with same-day repairs available for urgent issues. Our team arrives equipped to handle most common repairs on the spot.",
        "Every repair we perform is backed by our workmanship warranty, giving you confidence that the job is done right. We'll also let you know honestly if your roof is beyond repair and would benefit from replacement instead."
      ]}
      benefits={[
        "Cost-effective alternative to full replacement",
        "Extends the life of your existing roof",
        "Prevents minor issues from becoming major problems",
        "Fast turnaround times — often same day",
        "Preserves your home's appearance and value",
        "Backed by our repair warranty"
      ]}
      warningSigns={[
        "Water stains on ceilings or walls",
        "Missing, cracked, or curling shingles",
        "Damaged or missing flashing",
        "Granules collecting in gutters",
        "Visible wear around roof penetrations",
        "Light coming through attic roof boards"
      ]}
      processSteps={[
        {
          title: "Assessment",
          description: "We identify the source of the problem and document all damage."
        },
        {
          title: "Quote",
          description: "You receive a clear, upfront estimate before any work begins."
        },
        {
          title: "Repair",
          description: "Our skilled technicians complete the repair using quality materials."
        },
        {
          title: "Verification",
          description: "We verify the repair is complete and your roof is watertight."
        }
      ]}
      relatedServices={[
        { title: "Roof Replacement", href: "/services/roof-replacement", icon: Home },
        { title: "Storm Damage", href: "/services/storm-damage", icon: CloudLightning },
        { title: "Roof Inspection", href: "/services/roof-inspection", icon: Search }
      ]}
      reviews={[
        {
          name: "Lisa T.",
          rating: 5,
          text: "Had a leak that appeared after a storm. They came out the same day, found the problem quickly, and fixed it on the spot. Great service!"
        },
        {
          name: "Mark S.",
          rating: 5,
          text: "Very honest company. They could have sold me a new roof but instead recommended repairs that have held up perfectly for two years now."
        }
      ]}
    />
  )
}
