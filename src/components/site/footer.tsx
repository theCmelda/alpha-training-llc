import Link from "next/link";

import { company, navigation } from "@/lib/company";

import { SiteLogo } from "./site-logo";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="container-site">
        <div className="grid gap-12 border-b border-cream/15 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <SiteLogo inverted />
            <p className="mt-8 max-w-sm font-heading text-3xl leading-tight text-cream/90">
              Clearer marketing systems, built for practical use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:col-start-7">
            <div>
              <p className="eyebrow mb-5 text-cream/60">Explore</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link className="text-link-dark" href="/">
                    Home
                  </Link>
                </li>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link className="text-link-dark" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5 text-cream/60">Legal</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link className="text-link-dark" href="/privacy">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-link-dark" href="/terms">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-cream/60">Company</p>
            <address className="space-y-3 text-sm leading-6 not-italic text-cream/75">
              <p>{company.legalName}</p>
              <p>
                {company.addressLine}
                <br />
                {company.cityLine}
                <br />
                {company.country}
              </p>
            </address>
            <Link
              href="/contact"
              className="text-link-dark mt-6 inline-block text-sm"
            >
              Start a conversation
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-6 text-[0.67rem] tracking-[0.11em] text-cream/50 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.legalName}</p>
          <p>Wyoming · United States</p>
        </div>
      </div>
    </footer>
  );
}
