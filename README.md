# with-prisma-mongodb-nextauth

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and the `with-prisma-mongodb-nextauth` template.

To use the template, run:

```bash
npx create-next-app --example https://github.com/krushilnaik/with-prisma-nextauth-typescript/ my-app
# or
yarn create next-app --example https://github.com/krushilnaik/with-prisma-nextauth-typescript/ my-app
```

## Table of Contents
- [with-prisma-mongodb-nextauth](#with-prisma-mongodb-nextauth)
	- [Table of Contents](#table-of-contents)
	- [What's included (besides, obviously, Next.js)](#whats-included-besides-obviously-nextjs)
	- [Getting Started](#getting-started)
	- [Deployment](#deployment)
	- [More about Next.js](#more-about-nextjs)

## What's included (besides, obviously, Next.js)

- [Prisma ORM](https://www.prisma.io/)
- [NextAuth](https://next-auth.js.org/)
- [MongoDB](https://www.mongodb.com/)

The Prisma adapter for NextAuth and all the essential types/schemas are pre-configured. The boilerplate for Google, Apple, and GitHub login is also there, but you can obviously delete and add stuff as needed.t

If you don't need authentication, just delete `pages/api/auth/*`, `pages/auth/*`, and `graphql/types/User.ts` then get rid of the User, Account, and Session models from `prisma/schema.prisma`.

Aside from what's on the label, this template comes pre-packaged with:
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/) (with [Nexus](https://nexusjs.org/) and [Apollo](https://www.apollographql.com/))
- [SCSS](https://sass-lang.com/)

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

Visit the [GraphQL Playground](http://localhost/api/graphql) to query your database.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Netlify](https://www.netlify.com/) also supports Next.js projects if you're already familiar with that platform.

Check out the official [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
