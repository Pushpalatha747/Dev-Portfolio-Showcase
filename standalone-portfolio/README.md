# Pushpalatha Jammu — Portfolio

A personal portfolio website built with React, TypeScript, Vite, Tailwind CSS,
and Framer Motion. This is a standalone project — it does not depend on any
workspace, monorepo, or external internal packages, so it can be cloned and
deployed on its own.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Radix UI primitives / shadcn-style components
- wouter (routing)

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

```bash
npm run serve
```

Preview the production build locally.

## Type Checking

```bash
npm run typecheck
```

## Deploying to Vercel

This project includes a `vercel.json` preconfigured for a standard Vite app:

1. Push this repository to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Vercel auto-detects the Vite framework; no extra configuration is required.
4. Deploy.

## Project Structure

```
src/
  components/
    layout/       Header, footer, nav
    sections/     Hero, About, Skills, Experience, Projects, Certifications, Contact, etc.
    ui/           Reusable UI primitives (shadcn-style)
  hooks/          Custom React hooks
  lib/            Utilities
  pages/          Route-level pages (e.g. 404)
  App.tsx
  main.tsx
  index.css
public/           Static assets (images, resume, favicon, robots.txt)
```
