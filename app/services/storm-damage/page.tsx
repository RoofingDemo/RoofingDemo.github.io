"use client"

import { CloudLightning, Home, Wrench, Search, Droplets } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function StormDamagePage() {
  return (
    <ServicePageLayout
      title="Storm Damage Restoration"
      description="24/7 emergency response for storm and hail damage. We work directly with your insurance company."
      heroImage="/images/hero-roof.jpg"
      icon={CloudLightning}
      serviceSlug="storm-damage"
      showEmergencyCallout={true}
      detailedDescription={[
        "When severe weather strikes, your roof takes the brunt of the damage. Hail, high winds, fallen trees, and heavy rain can all compromise your roof's integrity and leave your home vulnerable to further damage.",
        "Our storm damage specialists are available 24/7 to respond to emergencies. We'll quickly assess the damage, secure your property with emergency tarping if needed, and develop a comprehensive restoration plan.",
        "Navigating insurance claims can be stressful and confusing. That's why we handle the entire process for you — from documenting damage and meeting with adjusters to ensuring your claim covers all necessary repairs. We work with all major insurance carriers.",
        "Don't wait to address storm damage. What starts as a small leak can quickly lead to mold, structural damage, and costly repairs. Contact us immediately after a storm for a free inspection — even if you're not sure your roof was affected."
      ]}
      benefits={[
        "24/7 emergency response available",
        "We work directly with your insurance company",
        "Complete documentation of all damage",
        "Emergency tarping to prevent further damage",
        "No out-of-pocket costs beyond your deductible (in most cases)",
        "Full restoration to pre-storm condition"
      ]}
      warningSigns={[
        "Visible dents or damage on shingles",
        "Missing shingles or exposed underlayment",
        "Dented gutters, downspouts, or vents",
        "Debris or tree limbs on the roof",
        "New leaks or water stains after a storm",
        "Cracked or broken skylights"
      ]}
      processSteps={[
        {
          title: "Emergency Response",
          description: "We arrive quickly to assess damage and secure your property if needed."
        },
        {
          title: "Damage Documentation",
          description: "We thoroughly document all damage with photos and detailed reports."
        },
        {
          title: "Insurance Coordination",
          description: "We work directly with your adjuster to ensure your claim is properly handled."
        },
        {
          title: "Complete Restoration",
          description: "We restore your roof to pre-storm condition using quality materials."
        }
      ]}
      relatedServices={[
        { title: "Roof Replacement", href: "/services/roof-replacement", icon: Home },
        { title: "Roof Repair", href: "/services/roof-repair", icon: Wrench },
        { title: "Roof Inspection", href: "/services/roof-inspection", icon: Search }
      ]}
      reviews={[
        {
          name: "Amanda C.",
          rating: 5,
          text: "After the hail storm, they were at my house within hours. They handled everything with my insurance company and I barely had to lift a finger. Amazing service!"
        },
        {
          name: "Tom W.",
          rating: 5,
          text: "The storm took out half my roof. These guys had it tarped that night and fully replaced within a week. They made the insurance process so easy. Highly recommend!"
        }
      ]}
    />
  )
}
