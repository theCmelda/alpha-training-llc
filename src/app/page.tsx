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
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Marketing Consulting & Digital Training",
  description:
    "Practical online consulting and training for clearer advertising, stronger funnels, and more disciplined customer acquisition.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marketing Consulting & Digital Training · ALPHA TRAINING LLC",
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
                Independent marketing practice · Sheridan, Wyoming
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
                  measurable operating plan—without unnecessary complexity.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-none px-6 text-xs tracking-[0.08em] uppercase"
              >
                <Link href="/services">
                  Explore our services
                  <ArrowRight className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-none border-ink/30 bg-transparent px-6 text-xs tracking-[0.08em] uppercase"
              >
                <Link href="/contact">Discuss a project</Link>
              </Button>
            </div>
          </div>

          <div
            className="relative hidden overflow-hidden md:col-span-3 md:block"
            aria-hidden="true"
          >
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

      <section className="bg-ink text-cream">
        <div className="container-site grid gap-14 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <p className="eyebrow text-copper-light">What we do</p>
            <h2 className="section-title mt-5">
              Clear thinking before more activity.
            </h2>
          </div>
          <div className="space-y-10 md:col-span-7 md:col-start-6">
            {[
              {
                icon: ChartNoAxesCombined,
                number: "01",
                title: "Advertising strategy",
                copy: "Clarify the offer, audience, channel role, campaign structure, and measures that matter before budget is committed.",
              },
              {
                icon: Layers3,
                number: "02",
                title: "Funnel planning",
                copy: "Map the path from first attention to qualified action, with practical recommendations for messaging, pages, and follow-up.",
              },
              {
                icon: CircleDot,
                number: "03",
                title: "Customer acquisition",
                copy: "Build a repeatable decision framework for attracting, evaluating, and converting the right prospects.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="grid gap-5 border-t border-cream/20 pt-7 sm:grid-cols-[3rem_1fr]"
              >
                <item.icon
                  className="size-6 text-copper-light"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-3xl">{item.title}</h3>
                    <span className="eyebrow text-cream/60">{item.number}</span>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-cream/65">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-copper">How we work</p>
            <h2 className="section-title mt-5">
              A focused path from question to action.
            </h2>
          </div>
          <ol className="grid border-t border-ink/25 sm:grid-cols-3 md:col-span-7 md:col-start-6">
            {[
              ["01", "Diagnose", "Define the business question, current constraints, and useful evidence."],
              ["02", "Design", "Build a practical strategy, sequence, and measurement plan."],
              ["03", "Transfer", "Put the work into usable documents, training, and next actions."],
            ].map(([number, title, copy]) => (
              <li
                key={number}
                className="border-b border-ink/25 py-7 sm:border-r sm:px-5 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0"
              >
                <span className="eyebrow text-copper">{number}</span>
                <h3 className="mt-10 font-heading text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-ink/20 bg-paper">
        <div className="container-site grid md:grid-cols-2">
          <article className="border-b border-ink/20 py-16 md:border-r md:border-b-0 md:py-20 md:pr-12">
            <p className="eyebrow text-copper">Consulting</p>
            <h2 className="mt-6 font-heading text-5xl leading-none">
              Advisory built around a live marketing challenge.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ink/65">
              Focused advisory and done-with-you support for decisions involving
              campaigns, funnels, offers, and acquisition systems.
            </p>
            <Link
              href="/services#consulting"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-link"
            >
              View consulting
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
          <article className="py-16 md:py-20 md:pl-12">
            <p className="eyebrow text-copper">Training</p>
            <h2 className="mt-6 font-heading text-5xl leading-none">
              Structured learning for practical application.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ink/65">
              Online courses that organize core marketing concepts into clear
              lessons, exercises, and reusable working tools.
            </p>
            <Link
              href="/services#training"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-link"
            >
              View training
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-copper">Company snapshot</p>
            <h2 className="mt-5 font-heading text-5xl leading-none">
              Independent by design.
            </h2>
          </div>
          <dl className="grid border-t border-ink/25 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            {[
              ["Legal name", company.legalName],
              ["Jurisdiction", "Wyoming"],
              ["Formed", company.formed],
              ["Filing ID", company.filingId],
              ["Business address", company.fullAddress],
              ["Primary contact", company.contactName],
              ["Email", company.email],
              ["Phone", company.phoneDisplay],
              ["Service delivery", "Online"],
            ].map(([term, detail]) => (
              <div
                key={term}
                className="border-b border-ink/25 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                <dt className="eyebrow text-ink/65">{term}</dt>
                <dd className="mt-2 text-sm font-medium">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
