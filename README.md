# ALPHA TRAINING LLC website

Public company site for **ALPHA TRAINING LLC**, a Wyoming marketing consulting
and digital training practice. Copy covers advertising, funnels, and customer
acquisition. Contact opens a `mailto:` draft to `dancmelda@gmail.com` after
client-side validation. There is no backend, auth, or database.

## Live

- Site: [https://alpha-training-llc.vercel.app](https://alpha-training-llc.vercel.app)
- GitHub: [https://github.com/theCmelda/alpha-training-llc](https://github.com/theCmelda/alpha-training-llc)
- Vercel project: `alpha-training-llc` on the `daniel-9961s-projects` team

Routes: `/` `/about` `/services` `/contact` `/privacy` `/terms`

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Stack

Next.js 16 App Router, TypeScript, Tailwind CSS v4, shadcn/ui.

`NEXT_PUBLIC_SITE_URL` is set on Vercel to the current production origin. When a
custom domain is attached, update that variable and redeploy.

## Custom domain

Buy the domain (suggested: `alphatrainingllc.com`) anywhere. Then send the exact
hostname. The domain will be added to this Vercel project; if DNS is elsewhere,
use the records Vercel shows after add. Do not invent records before the domain
exists.
