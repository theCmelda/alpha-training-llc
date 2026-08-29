"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/lib/company";

import { SiteLogo } from "./site-logo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-cream/90 backdrop-blur-md">
      <div className="container-site flex h-[4.75rem] items-center justify-between">
        <SiteLogo />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="relative py-2 text-sm font-medium text-ink/75 transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-copper after:transition-transform hover:text-ink hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper aria-[current=page]:text-ink aria-[current=page]:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="h-10 rounded-none px-5 text-xs tracking-[0.08em] uppercase"
          >
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-none border-ink/25 bg-transparent md:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[88%] border-ink/20 bg-ink text-cream [&_button]:focus-visible:ring-copper-light sm:max-w-md"
            aria-describedby="mobile-navigation-description"
          >
            <SheetHeader className="border-b border-cream/15 px-6 py-6">
              <SiteLogo inverted />
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription
                id="mobile-navigation-description"
                className="sr-only"
              >
                Navigate the Alpha Training website.
              </SheetDescription>
            </SheetHeader>
            <nav
              className="flex flex-1 flex-col px-6 pt-10"
              aria-label="Mobile navigation"
            >
              <SheetClose asChild>
                <Link
                  href="/"
                  className="border-b border-cream/15 py-5 font-heading text-4xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-light"
                >
                  Home
                </Link>
              </SheetClose>
              {navigation.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="border-b border-cream/15 py-5 font-heading text-4xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-light"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="px-6 pb-8 text-xs leading-5 tracking-[0.08em] text-cream/60 uppercase">
              Online marketing consulting
              <br />
              Sheridan, Wyoming
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
