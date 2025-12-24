"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/podcast", label: "Podcast" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            BoisInMotion
          </Link>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
