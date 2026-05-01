"use client"

import { Shield, Award, Star, Clock, CheckCircle } from "lucide-react"

const TRUST_SIGNALS = [
  {
    icon: Award,
    label: "GAF Certified",
    description: "Contractor",
  },
  {
    icon: Award,
    label: "Owens Corning",
    description: "Preferred",
  },
  {
    icon: Star,
    label: "5-Star Rated",
    description: "Google Reviews",
  },
  {
    icon: Shield,
    label: "Licensed",
    description: "& Insured",
  },
  {
    icon: Clock,
    label: "20+ Years",
    description: "Experience",
  },
]

export function TrustBar() {
  return (
    <div className="bg-secondary py-4 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {TRUST_SIGNALS.map((signal, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-foreground"
            >
              <signal.icon className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">
                  {signal.label}
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {signal.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
