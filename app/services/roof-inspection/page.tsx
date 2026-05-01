"use client"

import { Search, Home, Wrench, CloudLightning, Droplets } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function RoofInspectionPage() {
  return (
    <ServicePageLayout
      title="Roof Inspection"
      description="Comprehensive roof inspections to assess condition, identify issues, and plan for the future."
      heroImage="/images/hero-roof.jpg"
      icon={Search}
      serviceSlug="roof-inspection"
      detailedDescription={[
        "A professional roof inspection is the first step in understanding your roof's current condition and planning for its future. Whether you're buying a home, preparing to sell, or simply want to know where you stand, our detailed inspections provide the answers you need.",
        "Our certified inspectors examine every component of your roofing system — shingles, flashing, vents, gutters, and more. We also inspect the attic for signs of leaks, proper ventilation, and insulation issues that can affect your roof's performance.",
        "After the inspection, you'll receive a comprehensive report with photos documenting our findings, along with our professional recommendations. If repairs are needed, we'll provide a detailed estimate. If your roof is in good condition, we'll tell you that too.",
        "Regular inspections can catch small problems before they become expensive repairs. We recommend having your roof inspected at least once a year, and always after severe weather events."
      ]}
      benefits={[
        "Identifies problems before they become expensive",
        "Provides documentation for insurance purposes",
        "Essential for home buying and selling",
        "Helps you plan and budget for future repairs",
        "Verifies roof condition after storms",
        "Ensures your warranty remains valid"
      ]}
      warningSigns={[
        "Roof is 10+ years old and never inspected",
        "Recent severe weather in your area",
        "Buying or selling a home",
        "Noticed any signs of leaks or damage",
        "Planning a major home renovation",
        "Insurance company requires inspection"
      ]}
      processSteps={[
        {
          title: "Scheduling",
          description: "We arrange a convenient time for your inspection."
        },
        {
          title: "Exterior Inspection",
          description: "We examine all exterior roofing components for damage and wear."
        },
        {
          title: "Interior Inspection",
          description: "We check attic spaces for leaks, ventilation, and insulation issues."
        },
        {
          title: "Detailed Report",
          description: "You receive a comprehensive report with photos and recommendations."
        }
      ]}
      relatedServices={[
        { title: "Roof Repair", href: "/services/roof-repair", icon: Wrench },
        { title: "Roof Replacement", href: "/services/roof-replacement", icon: Home },
        { title: "Storm Damage", href: "/services/storm-damage", icon: CloudLightning }
      ]}
      reviews={[
        {
          name: "Nancy D.",
          rating: 5,
          text: "Had them inspect our roof before we sold our house. Very thorough report with photos. The buyers were impressed with the documentation."
        },
        {
          name: "Kevin R.",
          rating: 5,
          text: "Found some minor issues during the inspection that I never would have noticed. Got them fixed before they became major problems. Very grateful!"
        }
      ]}
    />
  )
}
