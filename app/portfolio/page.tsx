"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CTAStrip } from "@/components/cta-strip"
import { useShopInfo, usePreservedLink } from "@/hooks/use-shop-info"

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "roof-replacement", label: "Roof Replacement" },
  { id: "roof-repair", label: "Roof Repair" },
  { id: "storm-damage", label: "Storm Damage" },
  { id: "gutters", label: "Gutters" },
]

// PLACEHOLDER: Project data — client to provide actual photos and details
const PROJECTS = [
  {
    id: 1,
    category: "roof-replacement",
    title: "Complete Roof Replacement",
    description: "GAF Timberline HDZ architectural shingles in Charcoal",
    location: "Charlotte, NC",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: 2,
    category: "roof-replacement",
    title: "Full Roof Replacement",
    description: "Owens Corning Duration shingles in Brownwood",
    location: "Matthews, NC",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: 3,
    category: "storm-damage",
    title: "Hail Damage Restoration",
    description: "Complete replacement after severe hail storm",
    location: "Mint Hill, NC",
    image: "/images/portfolio-3.jpg",
  },
  {
    id: 4,
    category: "roof-repair",
    title: "Leak Repair",
    description: "Flashing repair and shingle replacement",
    location: "Huntersville, NC",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: 5,
    category: "roof-replacement",
    title: "Premium Roof Installation",
    description: "Designer shingles with copper accents",
    location: "Davidson, NC",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: 6,
    category: "storm-damage",
    title: "Wind Damage Repair",
    description: "Emergency restoration after tornado",
    location: "Concord, NC",
    image: "/images/portfolio-3.jpg",
  },
  {
    id: 7,
    category: "gutters",
    title: "Gutter Replacement",
    description: "Seamless aluminum gutters with leaf guards",
    location: "Charlotte, NC",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: 8,
    category: "roof-repair",
    title: "Chimney Flashing Repair",
    description: "Complete flashing replacement around chimney",
    location: "Rock Hill, SC",
    image: "/images/portfolio-2.jpg",
  },
]

export default function PortfolioPage() {
  const { shopName, city } = useShopInfo()
  const getLink = usePreservedLink()
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentProject(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentProject(null)
  }

  const nextProject = () => {
    if (currentProject !== null) {
      setCurrentProject((currentProject + 1) % filteredProjects.length)
    }
  }

  const prevProject = () => {
    if (currentProject !== null) {
      setCurrentProject(
        currentProject === 0 ? filteredProjects.length - 1 : currentProject - 1
      )
    }
  }

  return (
    <div className="pb-14 lg:pb-0">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Browse our recent projects and see the quality of our craftsmanship across the {city} area.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-secondary border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3]">
                  {/* PLACEHOLDER: Before/After photos — client to provide (800x600px) */}
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                      {CATEGORIES.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold">{project.title}</p>
                    <p className="text-white/80 text-sm">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-12 bg-primary rounded-lg p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-2">
              Like What You See?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Request a free inspection and let us show you what we can do for your home.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-white font-bold"
            >
              <Link href={getLink("/contact")}>
                Request a Free Inspection
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentProject !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-white/80"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={prevProject}
            className="absolute left-4 text-white hover:text-white/80"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div className="max-w-4xl w-full mx-4">
            <div className="relative aspect-[4/3]">
              <Image
                src={filteredProjects[currentProject].image}
                alt={filteredProjects[currentProject].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white font-serif text-xl font-bold">
                {filteredProjects[currentProject].title}
              </h3>
              <p className="text-white/80">
                {filteredProjects[currentProject].description}
              </p>
              <p className="text-white/60 text-sm">
                {filteredProjects[currentProject].location}
              </p>
            </div>
          </div>

          <button
            onClick={nextProject}
            className="absolute right-4 text-white hover:text-white/80"
            aria-label="Next project"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
        </div>
      )}

      {/* Bottom CTA Strip */}
      <CTAStrip headline="Ready to Transform Your Roof? Get Your Free Quote Today." />
    </div>
  )
}
