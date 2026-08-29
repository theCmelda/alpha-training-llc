import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { PageIntro } from "@/components/site/page-intro";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ALPHA TRAINING LLC about online marketing consulting or digital training.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · ALPHA TRAINING LLC",
    description:
      "Start a conversation about marketing consulting or digital training.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with the question in front of you."
        description="Tell us what you are working through and whether you are interested in consulting, digital training, or a general conversation."
      />

      <section className="container-site grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <aside className="md:col-span-4">
          <p className="eyebrow text-copper">Direct contact</p>
          <div className="mt-7 space-y-0 border-t border-ink/25">
            <a
              href={`mailto:${company.email}`}
              className="group flex gap-4 border-b border-ink/25 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              <Mail
                className="mt-0.5 size-5 shrink-0 text-copper"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>
                <span className="eyebrow block text-ink/65">Email</span>
                <span className="mt-1 block text-sm group-hover:text-copper">
                  {company.email}
                </span>
              </span>
            </a>
            <a
              href={company.phoneHref}
              className="group flex gap-4 border-b border-ink/25 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              <Phone
                className="mt-0.5 size-5 shrink-0 text-copper"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>
                <span className="eyebrow block text-ink/65">Phone</span>
                <span className="mt-1 block text-sm group-hover:text-copper">
                  {company.phoneDisplay}
                </span>
              </span>
            </a>
            <div className="flex gap-4 border-b border-ink/25 py-5">
              <MapPin
                className="mt-0.5 size-5 shrink-0 text-copper"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <address className="not-italic">
                <span className="eyebrow block text-ink/65">
                  Business address
                </span>
                <span className="mt-1 block text-sm leading-6">
                  {company.addressLine}
                  <br />
                  {company.cityLine}
                  <br />
                  {company.country}
                </span>
              </address>
            </div>
          </div>

          <div className="mt-9 border-l-2 border-copper pl-5">
            <p className="text-sm leading-6 text-ink/65">
              ALPHA TRAINING LLC operates online and does not maintain a
              physical retail location.
            </p>
          </div>
        </aside>

        <div className="md:col-span-7 md:col-start-6">
          <div className="border border-ink/20 bg-paper p-6 sm:p-9 lg:p-11">
            <div className="mb-9">
              <p className="eyebrow text-copper">Project inquiry</p>
              <h2 className="mt-3 font-heading text-4xl">How can we help?</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-ink/65">
                Required fields are marked with an asterisk. Submitting the form
                prepares a message in your email application; the website does
                not store your entry.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
