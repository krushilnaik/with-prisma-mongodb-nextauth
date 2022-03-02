This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and the `with-prisma-nextauth-typescript` template.

## What's included (besides, obviously, Next.js)

- [Prisma ORM](https://www.prisma.io/)
- [NextAuth](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

The Prisma adapter for NextAuth and all the essential types/schemas are pre-configured. The boilerplate for Google, Apple, and GitHub login is also there, but you can obviously delete and add stuff as needed.

If you your project won't need authentication, just delete `pages/api/auth/*`, `pages/auth/*`, and `graphql/types/User.ts` then get rid of the User, Account, and Session models from `prisma/schema.prisma`.

Aside from what's on the label, this template comes pre-packaged with:

- MongoDB
- GraphQL (with Nexus and Apollo)
- SCSS

## Getting Started

First, rename `.env.example` to `.env` then fill out the environment variables.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

To fire up Prisma Studio:

```bash
npm run studio
# or
yarn studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Netlify](https://www.netlify.com/) also supports Next.js projects if you're already familiar with that platform.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
