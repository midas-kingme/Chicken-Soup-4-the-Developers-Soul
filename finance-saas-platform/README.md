This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
---------------------

## 🚀 Project Structure

```bash
.
├── app
│   ├── components
│   ├── hooks
│   ├── layout
│   ├── pages
│   ├── public
│   ├── styles
│   ├── tailwind.config.js
│   └── app.tsx
├── config
│   ├── config.ts
│   └── types.ts
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── README.md
├── package.json
├── tsconfig.json
├── next-env.d.ts
└── next.config.js
```

## 📝 License

Copyright © 2023 [King Midas](https://github.com/kingmidas).<br />
This project is [MIT](https://github.com/kingmidas/chicken-soup-4-the-developers-soul/blob/main/LICENSE) licensed.      

## Build
TypeScript
ESLint
Tailwind CSS
not using src directory
App Router 
not customizing the default import alias (@/*) ... We're using the default alias of @/components
Bun for the build tool 
ShadCN/UI ~> CLI for building a custom component libary ~> for the base color (using Slate) .. Also using CSS variables in app/globals.css

Running dev server with `bun run dev`



components/ui/ ~> typically contains code from ShadCN/UI after installing a component library..To which we can then modify classes and/or variants

app folder ~> is where our client and server routing is defined. More specifically, the page and layout files
  ~> page.tsx ~> a reserved file name for Next.js pages which indicates a route (Since Next.js uses file and folder based routing)
