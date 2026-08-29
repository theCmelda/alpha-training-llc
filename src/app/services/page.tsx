import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Compass,
  LayoutTemplate,
  Presentation,
} from "lucide-react";

import { ContactCta } from "@/components/site/contact-cta";
import { PageIntro } from "@/components/site/page-intro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Marketing consulting and online training for advertising strategy, funnel planning, and customer acquisition.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · ALPHA TRAINING LLC",
    description:
      "Focused marketing consulting and structured digital training, delivered online.",
    url: "/services",
  },
};

const consultingDeliverables = [
  "Current-state marketing and funnel review",
  "Prioritized findings and opportunity map",
  "Audience, offer, and messaging framework",
  "Campaign or funnel architecture",
  "Measurement plan and decision criteria",
  "Working sessions and implementation guidance",
];

const trainingDeliverables = [
  "Structured, self-paced online lessons",
  "Practical examples and guided exercises",
  "Planning templates and working documents",
  "Module summaries and action prompts",
  "Clear course access and completion terms",
  "Material designed for real-world application",
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Guidance when you need it. Training you can keep using."
        description="Two ways to build a clearer marketing system: direct consulting around a current business question, and digital training that develops practical capability."
      />

      <section
        id="consulting"
        className="container-site scroll-mt-24 py-20 md:py-28"
      >
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center justify-between border-b border-ink/25 pb-5">
              <p className="eyebrow text-copper">01 · Consulting</p>
              <Compass
                className="size-6 text-copper"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
            <h2 className="section-title mt-8">
              A working partnership around a live challenge.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-ink/65">
              Advisory and done-with-you support helps translate a marketing
              question into a practical plan. The engagement is shaped around
              the decision at hand rather than a preset package.
            </p>
            <Button
              asChild
              className="mt-9 h-11 rounded-none px-5 text-xs tracking-[0.08em] uppercase"
            >
              <Link href="/contact">
                Discuss consulting
                <ArrowRight className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="border border-ink/20 bg-paper p-7 sm:p-10">
              <h3 className="font-heading text-3xl">Typical focus areas</h3>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ["Advertising", "Campaign logic, channel role, creative direction, and measurement."],
                  ["Funnels", "Journey mapping, page sequence, conversion points, and follow-up."],
                  ["Acquisition", "Audience priorities, offer alignment, testing, and decision rules."],
                  ["Operations", "Planning cadence, reporting structure, and next-action clarity."],
                ].map(([title, copy]) => (
                  <article
                    key={title}
                    className="border-t border-ink/25 pt-4"
                  >
                    <h4 className="text-sm font-semibold">{title}</h4>
                    <p className="mt-2 text-xs leading-5 text-ink/65">{copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow text-ink/65">Potential deliverables</p>
              <ul className="mt-5 grid gap-3">
                {consultingDeliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-ink/15 pb-3 text-sm"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-copper"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-5 text-ink/65">
                Final scope and deliverables are documented in a written
                proposal before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="training"
        className="scroll-mt-24 bg-ink py-20 text-cream md:py-28"
      >
        <div className="container-site grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center justify-between border-b border-cream/20 pb-5">
              <p className="eyebrow text-copper-light">
                02 · Digital training
              </p>
              <Presentation
                className="size-6 text-copper-light"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
            <h2 className="section-title mt-8">Online courses with a job to do.</h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-cream/65">
              Digital training organizes essential marketing concepts into a
              clear sequence. Lessons are designed to help learners understand
              the principle, apply it to their situation, and leave with a
              usable output.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-9 h-11 rounded-none border-cream/40 bg-transparent px-5 text-xs tracking-[0.08em] text-cream uppercase hover:bg-cream hover:text-ink"
            >
              <Link href="/contact">
                Ask about training
                <ArrowRight className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="grid gap-px bg-cream/15 sm:grid-cols-2">
              {[
                {
                  icon: LayoutTemplate,
                  title: "Structured",
                  copy: "Lessons progress from core ideas to planning and application.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Applied",
                  copy: "Exercises and templates turn concepts into useful working material.",
                },
              ].map((item) => (
                <article key={item.title} className="bg-ink p-7 sm:p-9">
                  <item.icon
                    className="size-6 text-copper-light"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-10 font-heading text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-cream/65">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <p className="eyebrow text-cream/60">Course format can include</p>
              <ul className="mt-5 grid gap-3">
                {trainingDeliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-cream/15 pb-3 text-sm text-cream/85"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-copper-light"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-copper">Who it is for</p>
            <h2 className="section-title mt-5">
              For people responsible for making marketing work.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="max-w-2xl text-lg leading-8 text-ink/68">
              Services are designed for business owners and marketing
              decision-makers who need a more coherent approach to advertising,
              funnels, or customer acquisition.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                ["A specific decision", "You need a clear recommendation on a campaign, funnel, offer, or acquisition question."],
                ["A system to improve", "Marketing is active, but the parts are not working together as clearly as they should."],
                ["Capability to build", "You want structured training that helps turn concepts into practical work."],
                ["A direct partner", "You value focused communication, defined deliverables, and an online working model."],
              ].map(([title, copy]) => (
                <article key={title} className="border-t border-ink/25 pt-5">
                  <h3 className="font-heading text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/20 bg-paper">
        <div className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow text-copper">Common questions</p>
            <h2 className="mt-5 font-heading text-5xl">Before we begin.</h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="md:col-span-7 md:col-start-6"
          >
            <AccordionItem value="online">
              <AccordionTrigger className="py-5 text-base hover:no-underline">
                Is all work delivered online?
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 text-ink/65">
                Yes. ALPHA TRAINING LLC operates online. Meetings, working
                sessions, document delivery, and digital training access are
                handled remotely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="scope">
              <AccordionTrigger className="py-5 text-base hover:no-underline">
                How is consulting scoped?
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 text-ink/65">
                We begin with the question you need to resolve. A written
                proposal then defines the services, deliverables, timing, and
                fees for the engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="results">
              <AccordionTrigger className="py-5 text-base hover:no-underline">
                Do you guarantee marketing results?
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 text-ink/65">
                No. Marketing outcomes depend on many factors outside any
                consultant&apos;s control. The work provides analysis,
                recommendations, training, and agreed deliverables—not a
                guarantee of a particular result.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
