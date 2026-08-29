export const company = {
  legalName: "ALPHA TRAINING LLC",
  shortName: "Alpha Training",
  contactName: "Daniel Jedlicka",
  email: "dancmelda@gmail.com",
  phoneDisplay: "+1 209-813-4029",
  phoneHref: "tel:+12098134029",
  addressLine: "30 N Gould St Ste R",
  cityLine: "Sheridan, WY 82801",
  country: "United States",
  fullAddress:
    "30 N Gould St Ste R, Sheridan, WY 82801, United States",
  filingId: "2026-002065256",
  formed: "August 25, 2026",
} as const;

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphatrainingllc.com",
);

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
