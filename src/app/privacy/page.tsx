import type { Metadata } from "next";

import { LegalDocument } from "@/components/site/legal-document";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the ALPHA TRAINING LLC website.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy \u00b7 ALPHA TRAINING LLC",
    description: "How ALPHA TRAINING LLC handles website information.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      label="Legal"
      title="Privacy policy"
      updated="August 29, 2026"
      introduction="This policy explains how ALPHA TRAINING LLC handles information associated with this website and its business operations."
      sections={[
        {
          title: "Information collected",
          content: (
            <p>
              This website does not include a contact form and does not ask
              visitors to submit personal details. If you write to the company
              by post or otherwise choose to share information while working
              with us, that correspondence may include details you decide to
              provide.
            </p>
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
                <li>Operate and secure the website;</li>
                <li>Respond when you choose to contact the company;</li>
                <li>Provide requested consulting or digital training;</li>
                <li>Maintain business and legal records; and</li>
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
              with service providers that support website hosting or other
              business operations; with professional advisers when appropriate;
              or when required to comply with law, legal process, or protect
              legal rights. Providers process information under their own terms
              and privacy practices.
            </p>
          ),
        },
        {
          title: "Retention and security",
          content: (
            <p>
              We retain business records for as long as reasonably necessary
              for recordkeeping, dispute resolution, and legal compliance. We
              use reasonable administrative and technical measures suited to a
              small online business. No storage system or internet transmission
              can be guaranteed completely secure.
            </p>
          ),
        },
        {
          title: "Your choices",
          content: (
            <p>
              You may ask about, correct, or request deletion of personal
              information you have provided, subject to records we need to keep
              for legal or legitimate business purposes. Send written requests
              to the company address below.
            </p>
          ),
        },
        {
          title: "Third-party services and links",
          content: (
            <p>
              This website may link to services we do not operate. Their
              privacy practices are governed by their own policies. We are not
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
