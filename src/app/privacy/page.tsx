import type { Metadata } from "next";

import { LegalDocument } from "@/components/site/legal-document";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the ALPHA TRAINING LLC website and business inquiries.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy · ALPHA TRAINING LLC",
    description:
      "How ALPHA TRAINING LLC handles website and business inquiry information.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      label="Legal"
      title="Privacy policy"
      updated="August 29, 2026"
      introduction="This policy explains how ALPHA TRAINING LLC handles information associated with this website, business inquiries, consulting services, and digital training."
      sections={[
        {
          title: "Information you provide",
          content: (
            <>
              <p>
                You may provide information when you contact us or work with us,
                including your name, email address, phone number, company name,
                inquiry details, correspondence, and information needed to
                deliver requested services.
              </p>
              <p>
                The contact form on this website does not send information to a
                website database. It prepares an email in your own email
                application. Information is transmitted only when you choose to
                send that email through your email provider.
              </p>
            </>
          ),
        },
        {
          title: "Technical information",
          content: (
            <p>
              Our website hosting and network providers may automatically
              process technical information such as IP address, browser type,
              device type, request time, referring page, and pages requested.
              This information may be used to deliver, secure, maintain, and
              troubleshoot the website. We do not use advertising pixels or
              behavioral advertising cookies on this website.
            </p>
          ),
        },
        {
          title: "How information is used",
          content: (
            <>
              <p>We may use information to:</p>
              <ul>
                <li>Respond to questions and evaluate service inquiries;</li>
                <li>Prepare proposals and communicate about engagements;</li>
                <li>Provide consulting or digital training you request;</li>
                <li>Maintain business and legal records;</li>
                <li>Protect the website, company, and users; and</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
            </>
          ),
        },
        {
          title: "How information is shared",
          content: (
            <p>
              We do not sell personal information. Information may be shared
              with service providers that support website hosting, email,
              document delivery, communications, or other business operations;
              with professional advisers when appropriate; or when required to
              comply with law, legal process, or protect legal rights. Providers
              process information under their own terms and privacy practices.
            </p>
          ),
        },
        {
          title: "Retention and security",
          content: (
            <>
              <p>
                We retain inquiry, client, and business records for as long as
                reasonably necessary for the purposes described in this policy,
                including service delivery, recordkeeping, dispute resolution,
                and legal compliance.
              </p>
              <p>
                We use reasonable administrative and technical measures suited
                to a small online business. No email, storage system, or internet
                transmission can be guaranteed completely secure.
              </p>
            </>
          ),
        },
        {
          title: "Your choices",
          content: (
            <p>
              You may ask about, correct, or request deletion of personal
              information you have provided, subject to records we need to keep
              for legal or legitimate business purposes. You may also choose not
              to provide optional information. To make a request, email{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          ),
        },
        {
          title: "Third-party services and links",
          content: (
            <p>
              This website may link to services we do not operate, including
              your email provider when you use a mail link. Their privacy
              practices are governed by their own policies. We are not
              responsible for third-party websites or services.
            </p>
          ),
        },
        {
          title: "Children's privacy",
          content: (
            <p>
              This website and our services are intended for business and
              professional audiences, not children under 13. We do not knowingly
              collect personal information from children under 13.
            </p>
          ),
        },
        {
          title: "Policy changes",
          content: (
            <p>
              We may update this policy as our services or legal obligations
              change. The effective date at the top of this page identifies the
              current version.
            </p>
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
