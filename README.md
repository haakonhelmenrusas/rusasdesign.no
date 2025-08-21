[![Netlify Status](https://api.netlify.com/api/v1/badges/2a70f8ca-927e-4044-9a94-6abfc460a345/deploy-status)](https://app.netlify.com/sites/rusasdesign/deploys)

# Rusås Design — Homepage and Blog

This repository contains the source for the Rusås Design homepage and blog. It’s a fast, content-focused site powered by
Next.js with Markdown-based posts, styled with Tailwind CSS, and deployed on Netlify.

## Overview

- Markdown-first authoring for posts and pages
- Static generation for speed, with server capabilities where needed
- Clean, responsive typography and code highlighting for a better reading experience
- Zero back-end maintenance for content: write Markdown, commit, and deploy

## Tech stack

- Framework: Next.js (React 19)
- Language: TypeScript
- UI: Tailwind CSS (with Typography plugin)
- Markdown: gray-matter (frontmatter) + react-markdown (rendering) + remark-gfm (GitHub-flavored Markdown)
- Code blocks: react-syntax-highlighter
- Dates/utilities: date-fns
- Tooling: ESLint (eslint-config-next)
- Deployment: Netlify

## How it works

- Content authoring
    - Posts/pages are written in Markdown with YAML frontmatter (title, date, etc.) parsed via gray-matter.
    - Markdown is rendered with react-markdown and enhanced by remark-gfm for tables, strikethrough, and other GFM
      features.
    - Code blocks are highlighted using react-syntax-highlighter.

- Site rendering
    - Next.js handles routing and rendering. Static generation is used where possible for performance and reliability.
    - TypeScript ensures type-safety across components and utilities.

- Styling
    - Tailwind CSS provides utility-first styling.
    - The Typography plugin refines long-form content and blog readability.

- Deployment
    - Netlify builds and deploys the site on pushes to the main branch (see badge above for status).

## Getting started

Prerequisites

- Node.js 22+
- npm

1) Clone the repository `git clone https://github.com/rusas/rusasdesign.git`
2) Install dependencies: `npm install`
3) Run the development server: `npm run dev`

The site will be available at http://localhost:3000.

## Scripts

- Development: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint`

## Deployment

This project is deployed on Netlify.

- Connect the repository in Netlify
- Build command: `next build`
- Start command (for Netlify adapters/environments that run a server) or use the default Next.js output handling
  configured by Netlify
- Environment variables (if any) should be configured in the Netlify dashboard

## Contributing

This project is open source for transparency and learning, but it is not currently accepting external contributions or
pull requests.

- Issues and PRs may be closed without review.
- You are welcome to fork the repository under the terms of the license.

## License and copyright

Copyright © Rusås Design. All rights are reserved unless otherwise noted.

This repository is provided under the terms described in the LICENSE file included with the source. If you did not
receive a copy of the license, please contact the author.
