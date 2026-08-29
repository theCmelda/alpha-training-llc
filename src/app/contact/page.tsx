import type { Metadata } from "next";

import { PageIntro } from "@/components/site/page-intro";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Company address for ALPHA TRAINING LLC.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · ALPHA TRAINING LLC",
    description: "Company address for ALPHA TRAINING LLC.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="ALPHA TRAINING LLC"
        description={`${company.addressLine}, ${company.cityLine}, ${company.country}.`}
      />

      <section className="container-site py-20 md:py-28">
        <address className="max-w-xl not-italic">
          <p className="eyebrow text-copper">Address</p>
          <p className="mt-6 font-heading text-5xl leading-none">
            {company.legalName}
          </p>
          <p className="mt-8 text-lg leading-8 text-ink/70">
            {company.addressLine}
            <br />
            {company.cityLine}
            <br />
            {company.country}
          </p>
        </address>
      </section>
    </>
  );
}
