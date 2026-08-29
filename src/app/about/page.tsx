import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";

import { ContactCta } from "@/components/site/contact-cta";
import { PageIntro } from "@/components/site/page-intro";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ALPHA TRAINING LLC, an independent Wyoming marketing consulting and digital training firm.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · ALPHA TRAINING LLC",
    description:
      "An independent online practice built to make marketing decisions clearer and more practical.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About the firm"
        title="A small practice with a focused mandate."
        description="ALPHA TRAINING LLC is an independent online consulting and education business focused on advertising, funnels, and customer acquisition."
      />

      <section className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-copper">Why Alpha Training</p>
          <h2 className="section-title mt-5">Make the work understandable.</h2>
        </div>
        <div className="space-y-8 text-lg leading-8 text-ink/70 md:col-span-7 md:col-start-6">
          <p>
            Marketing work often becomes fragmented: one conversation about
            advertisements, another about a page, and another about reporting.
            The firm was formed to connect those decisions into one practical
            system.
          </p>
          <p>
            Our role is to help clients understand what they are doing, why it
            matters, and what should happen next. That can take the form of
            focused advisory work, done-with-you planning, or structured online
            training.
          </p>
          <p>
            The approach is intentionally measured. Recommendations are tied to
            the client&apos;s goals, constraints, and available information—not
            broad promises or one-size-fits-all tactics.
          </p>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-copper">How we operate</p>
            <h2 className="section-title mt-5">Focused and project-led.</h2>
          </div>
          <div className="grid gap-px bg-ink/20 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            {[
              [
                "Defined scope",
                "Consulting engagements begin with a written scope covering the work, deliverables, timing, and fees.",
              ],
              [
                "Clear legal identity",
                "Proposals and business communications identify the company by its legal name, ALPHA TRAINING LLC.",
              ],
            ].map(([title, copy]) => (
              <article key={title} className="bg-cream p-7 lg:p-9">
                <ArrowDownRight
                  className="size-5 text-copper"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-10 font-heading text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/20 bg-paper">
        <div className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <p className="eyebrow text-copper">Company</p>
            <h2 className="mt-5 font-heading text-5xl">Where we are.</h2>
          </div>
          <address className="not-italic md:col-span-7 md:col-start-6">
            <p className="font-heading text-4xl">{company.legalName}</p>
            <p className="mt-6 text-base leading-7 text-ink/70">
              {company.addressLine}
              <br />
              {company.cityLine}
              <br />
              {company.country}
            </p>
          </address>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
