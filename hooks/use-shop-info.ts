"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface ShopInfo {
  shopName: string
  city: string
  phone: string
}

const DEFAULTS: ShopInfo = {
  shopName: "Your Company Name",
  city: "Your City",
  phone: "555-123-4567",
}

const STORAGE_KEYS = {
  shopName: "shop",
  city: "city",
  phone: "phone",
}

export function useShopInfo(): ShopInfo {
  const searchParams = useSearchParams()
  const [shopInfo, setShopInfo] = useState<ShopInfo>(DEFAULTS)

  useEffect(() => {
    // Read from URL params first
    const urlShop = searchParams.get("shop")
    const urlCity = searchParams.get("city")
    const urlPhone = searchParams.get("phone")

    // Store URL params in sessionStorage if present
    if (urlShop) {
      sessionStorage.setItem(STORAGE_KEYS.shopName, urlShop)
    }
    if (urlCity) {
      sessionStorage.setItem(STORAGE_KEYS.city, urlCity)
    }
    if (urlPhone) {
      sessionStorage.setItem(STORAGE_KEYS.phone, urlPhone)
    }

    // Priority: URL param → sessionStorage → default
    const shopName =
      urlShop ||
      sessionStorage.getItem(STORAGE_KEYS.shopName) ||
      DEFAULTS.shopName
    const city =
      urlCity || sessionStorage.getItem(STORAGE_KEYS.city) || DEFAULTS.city
    const phone =
      urlPhone || sessionStorage.getItem(STORAGE_KEYS.phone) || DEFAULTS.phone

    setShopInfo({ shopName, city, phone })
  }, [searchParams])

  return shopInfo
}

// Helper to build URLs with current params preserved
export function usePreservedLink() {
  const searchParams = useSearchParams()

  return (path: string): string => {
    const params = new URLSearchParams()
    const shop = searchParams.get("shop")
    const city = searchParams.get("city")
    const phone = searchParams.get("phone")

    if (shop) params.set("shop", shop)
    if (city) params.set("city", city)
    if (phone) params.set("phone", phone)

    const queryString = params.toString()
    return queryString ? `${path}?${queryString}` : path
  }
}
