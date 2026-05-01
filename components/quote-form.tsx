"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

const SERVICES = [
  { value: "roof-replacement", label: "Roof Replacement" },
  { value: "roof-repair", label: "Roof Repair" },
  { value: "storm-damage", label: "Storm Damage" },
  { value: "gutter-cleaning", label: "Gutter Cleaning" },
  { value: "roof-inspection", label: "Roof Inspection" },
]

interface QuoteFormProps {
  compact?: boolean
  preSelectedService?: string
  className?: string
}

export function QuoteForm({
  compact = false,
  preSelectedService,
  className = "",
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // PLACEHOLDER: Connect to CRM or email endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className={`bg-card border border-border rounded-lg p-6 text-center ${className}`}
      >
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ve received your request and will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-card border border-border rounded-lg p-6 ${className}`}
    >
      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
        Request Your Free Quote
      </h3>

      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              placeholder="John"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" required placeholder="Doe" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Service Needed</Label>
          <Select
            name="service"
            defaultValue={preSelectedService}
            required
          >
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!compact && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">
              Brief Description{" "}
              <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Tell us about your project..."
              rows={3}
            />
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold mt-2"
        >
          {isSubmitting ? "Submitting..." : "Request My Free Quote"}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        We respond to all requests within 24 hours.
      </p>
    </form>
  )
}
