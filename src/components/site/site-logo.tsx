import Link from "next/link";

import { company } from "@/lib/company";

export function SiteLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${
        inverted
          ? "focus-visible:outline-copper-light"
          : "focus-visible:outline-copper"
      }`}
      aria-label={`${company.legalName} home`}
    >
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="size-9 shrink-0"
      >
        <path
          d="M4 4h40v40H4z"
          fill={inverted ? "#f4f0e8" : "#173b31"}
        />
        <path
          d="M13 35 24 11l11 24M17.2 27h13.6M24 11v24"
          fill="none"
          stroke={inverted ? "#173b31" : "#f4f0e8"}
          strokeWidth="2.2"
        />
      </svg>
      <span
        className={`text-[0.72rem] leading-[1.05] font-semibold tracking-[0.14em] uppercase ${
          inverted ? "text-cream" : "text-ink"
        }`}
      >
        Alpha
        <br />
        Training
      </span>
    </Link>
  );
}
