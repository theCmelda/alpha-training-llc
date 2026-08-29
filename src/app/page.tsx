import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChartNoAxesCombined,
  CircleDot,
  Layers3,
} from "lucide-react";

import { ContactCta } from "@/components/site/contact-cta";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Marketing Consulting & Digital Training",
  description:
    "Practical online consulting and training for clearer advertising, stronger funnels, and more disciplined customer acquisition.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marketing Consulting & Digital Training \u00b7 ALPHA TRAINING LLC",
    description:
      "Practical online consulting and training for advertising, funnels, and customer acquisition.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-site grid min-h-[calc(100svh-4.75rem)] md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-between border-ink/20 py-12 md:col-span-9 md:border-r md:py-16 lg:py-20">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-copper" />
              <p className="eyebrow text-ink/65">
                Independent marketing practice \u00b7 Sheridan, Wyoming
              </p>
            </div>
            <div className="py-16 md:py-20">
              <h1 className="display-title max-w-6xl">
                Marketing,
                <br />
                made <em className="font-normal text-copper">useful.</em>
              </h1>
              <div className="mt-10 grid gap-8 border-t border-ink/20 pt-8 sm:grid-cols-2 md:max-w-3xl">
                <p className="text-lg leading-8 text-ink/72">
                  Online consulting and digital training for advertising,
                  funnels, and customer acquisition.
                </p>
                <p className="text-sm leading-6 text-ink/65">
                  We help turn scattered marketing activity into a clear,
                  measurable operating plan\u2014without unnecessary complexity.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-none px-6 text-xs tracking-[0.08em] uppercase">
                <Link href="/services">
                  Explore our services
                  <ArrowRight className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-none border-ink/30 bg-transparent px-6 text-xs tracking-[0.08em] uppercase">
                <Link href="/contact">Discuss a project</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden overflow-hidden md:col-span-3 md:block" aria-hidden="true">
            <div className="absolute inset-8 border border-ink/20" />
            <div className="absolute top-[14%] left-1/2 h-[72%] w-px -translate-x-1/2 bg-ink/20" />
            <div className="absolute top-1/2 left-[14%] h-px w-[72%] -translate-y-1/2 bg-ink/20" />
            <div className="absolute top-1/2 left-1/2 size-32 -translate-1/2 rotate-45 border border-copper bg-cream" />
            <div className="absolute top-1/2 left-1/2 size-16 -translate-1/2 rounded-full bg-ink" />
            <div className="absolute right-8 bottom-8 flex items-center gap-2">
              <ArrowDown className="size-4 text-copper" />
              <span className="eyebrow text-ink/65">Est. 2026</span>
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
