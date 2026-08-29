import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="bg-copper text-cream">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12 md:items-end md:py-24">
        <div className="md:col-span-8">
          <p className="eyebrow text-cream">Let&apos;s talk</p>
          <h2 className="mt-5 max-w-4xl font-heading text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.92] font-medium tracking-[-0.04em]">
            Bring structure to your next marketing decision.
          </h2>
        </div>
        <div className="md:col-span-4 md:flex md:justify-end">
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-none border-cream/50 bg-transparent px-6 text-cream hover:bg-cream hover:text-ink"
          >
            <Link href="/contact">
              Start a conversation
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
