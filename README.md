# ALPHA TRAINING LLC website

Company website for ALPHA TRAINING LLC, an online marketing consulting and
digital training business focused on advertising, funnels, and customer
acquisition.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

The site uses Next.js 16 App Router, TypeScript, Tailwind CSS v4, and the
installed shadcn/ui components. The contact form has no backend; validated form
content is passed to the visitor's email application using a `mailto:` link.

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin when using a domain other than
`https://alphatrainingllc.com`.
