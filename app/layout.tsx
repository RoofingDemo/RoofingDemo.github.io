import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Roofing Contractor | Free Quotes | Licensed & Insured",
  description:
    "Professional roofing services including roof replacement, repair, storm damage restoration, and inspections. Licensed, insured, and certified. Get your free quote today!",
  keywords:
    "roofing contractor, roof replacement, roof repair, storm damage, gutter cleaning, roof inspection",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileBottomBar />
        </Suspense>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
