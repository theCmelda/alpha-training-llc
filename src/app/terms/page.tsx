import type { Metadata } from "next";

import { LegalDocument } from "@/components/site/legal-document";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the ALPHA TRAINING LLC website, consulting services, and digital training.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use · ALPHA TRAINING LLC",
    description:
      "Terms for the ALPHA TRAINING LLC website and service information.",
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
              You must be legally able to enter into these terms.
            </p>
          ),
        },
        {
          title: "Website purpose",
          content: (
            <p>
              This website provides general information about ALPHA TRAINING
              LLC, its marketing consulting services, and its digital training.
              Website content is not a proposal, professional opinion tailored
              to your circumstances, or guarantee that a service is available
              or suitable for you.
            </p>
          ),
        },
        {
          title: "Consulting services",
          content: (
            <p>
              Any consulting engagement is subject to a separate written
              proposal or agreement identifying the scope, deliverables, timing,
              responsibilities, fees, and other applicable terms. If that
              agreement conflicts with these website terms, the engagement
              agreement controls for the consulting services.
            </p>
          ),
        },
        {
          title: "Digital training",
          content: (
            <>
              <p>
                Access to paid training is personal to the purchaser or
                authorized user unless the applicable order states otherwise.
                Training materials may not be copied, republished, resold,
                shared publicly, or used to create a competing product without
                written permission.
              </p>
              <p>
                Course access periods, included materials, fees, and any
                cancellation or refund terms will be disclosed with the
                applicable offering or order.
              </p>
            </>
          ),
        },
        {
          title: "No guaranteed outcomes",
          content: (
            <p>
              Marketing and business outcomes depend on factors outside our
              control, including your decisions, implementation, offer, market,
              budget, platform changes, and customer behavior. We do not
              guarantee revenue, leads, conversion rates, cost levels, or any
              other particular outcome from website content, consulting, or
              training.
            </p>
          ),
        },
        {
          title: "Your responsibilities",
          content: (
            <>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for unlawful or fraudulent purposes;</li>
                <li>
                  Attempt to disrupt, probe, or gain unauthorized access to the
                  website or related systems;
                </li>
                <li>
                  Copy or exploit site content except as allowed by law or
                  written permission;
                </li>
                <li>Misrepresent your identity or authority; or</li>
                <li>
                  Use our materials in a way that infringes another person&apos;s
                  rights.
                </li>
              </ul>
              <p>
                You are responsible for your business decisions, implementation,
                legal compliance, advertising claims, platform accounts, and the
                accuracy of information you provide.
              </p>
            </>
          ),
        },
        {
          title: "Intellectual property",
          content: (
            <p>
              The website, brand elements, written content, graphics, and
              training materials are owned by ALPHA TRAINING LLC or used with
              permission and are protected by applicable intellectual property
              laws. These terms provide only a limited, revocable right to use
              the website for its intended informational purpose.
            </p>
          ),
        },
        {
          title: "Third-party services",
          content: (
            <p>
              References or links to third-party platforms and services do not
              constitute an endorsement or warranty. Third parties control their
              own availability, terms, policies, and performance. You are
              responsible for reviewing the terms that apply to any third-party
              service you use.
            </p>
          ),
        },
        {
          title: "Disclaimers",
          content: (
            <p>
              To the extent permitted by law, the website and its general
              content are provided “as is” and “as available,” without warranties
              of any kind, express or implied. We do not warrant that the website
              will always be available, error-free, or complete. Nothing on this
              website is legal, tax, accounting, or financial advice.
            </p>
          ),
        },
        {
          title: "Limitation of liability",
          content: (
            <p>
              To the extent permitted by law, ALPHA TRAINING LLC and its member
              will not be liable for indirect, incidental, special,
              consequential, or punitive damages arising from use of, or
              inability to use, this website. Some jurisdictions do not allow
              certain exclusions, so portions of this section may not apply to
              you. Liability relating to paid services is governed by the
              applicable service agreement or order.
            </p>
          ),
        },
        {
          title: "Governing law and changes",
          content: (
            <>
              <p>
                These website terms are governed by the laws of the State of
                Wyoming, without regard to conflict-of-law principles.
              </p>
              <p>
                We may update these terms from time to time. The effective date
                at the top identifies the current version. Continued use after
                an update means you accept the revised terms.
              </p>
            </>
          ),
        },
        {
          title: "Contact",
          content: (
            <address className="not-italic">
              {company.legalName}
              <br />
              {company.fullAddress}
              <br />
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <br />
              <a href={company.phoneHref}>{company.phoneDisplay}</a>
            </address>
          ),
        },
      ]}
    />
  );
}
