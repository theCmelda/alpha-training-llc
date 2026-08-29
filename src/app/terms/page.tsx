import type { Metadata } from "next";

import { LegalDocument } from "@/components/site/legal-document";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the ALPHA TRAINING LLC website, consulting services, and digital training.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use \u00b7 ALPHA TRAINING LLC",
    description: "Terms for the ALPHA TRAINING LLC website and service information.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalDocument
      label="Legal"
      title="Terms of use"
      updated="August 29, 2026"
      introduction="These terms govern your use of this website. Consulting engagements and digital training purchases may also be governed by a proposal, service agreement, order, or course terms provided at the time of purchase."
      sections={[
        {
          title: "Acceptance of these terms",
          content: (
            <p>
              By accessing or using this website, you agree to these terms and
              our Privacy Policy. If you do not agree, do not use the website.
            </p>
          ),
        },
        {
          title: "Website purpose",
          content: (
            <p>
              This website provides general information about ALPHA TRAINING
              LLC, its marketing consulting services, and its digital training.
            </p>
          ),
        },
        {
          title: "No guaranteed outcomes",
          content: (
            <p>
              We do not guarantee revenue, leads, conversion rates, or any other
              particular outcome from website content, consulting, or training.
            </p>
          ),
        },
        {
          title: "Governing law",
          content: (
            <p>
              These website terms are governed by the laws of the State of
              Wyoming, without regard to conflict-of-law principles.
            </p>
          ),
        },
        {
          title: "Contact",
          content: (
            <address className="not-italic">
              {company.legalName}
              <br />
              {company.addressLine}
              <br />
              {company.cityLine}
              <br />
              {company.country}
            </address>
          ),
        },
      ]}
    />
  );
}
