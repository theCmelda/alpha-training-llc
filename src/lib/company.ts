export const company = {
  legalName: "ALPHA TRAINING LLC",
  shortName: "Alpha Training",
  addressLine: "30 N Gould St Ste R",
  cityLine: "Sheridan, WY 82801",
  country: "United States",
  fullAddress:
    "30 N Gould St Ste R, Sheridan, WY 82801, United States",
} as const;

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tryalpha.training",
);

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
