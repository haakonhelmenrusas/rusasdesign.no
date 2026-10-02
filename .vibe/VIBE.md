# Rusås Design — Vibe Project Configuration

## Project Overview

**Rusås Design** is a personal homepage and blog for a creative developer with 10+ years of experience in web development, UX design, and app development. The site showcases projects and shares thoughts on design, code, and productivity.

The site is **written in Norwegian (nb-NO)**, targeting a Norwegian audience with content focused on development, productivity, and technology insights.

## Architecture

### Framework & Runtime
- **Next.js 16** — App Router with Server Components
- **React 19** — Latest React features
- **TypeScript 6** — Strict type safety
- **Node.js 22+** — Runtime environment

### UI & Styling
- **Tailwind CSS v4** — Utility-first styling with @tailwindcss/postcss
- **Tailwind Typography** — Enhanced prose styling for blog readability
- **Custom Fonts** — Oswald (headings), Noto Sans (body)
- **Dark/Light Mode** — Theme toggle with system preference detection
- **Animations** — Smooth transitions, hover effects, staggered animations

### Content Management
- **Markdown-based** — Blog posts stored in `content/posts/` as `.md` files
- **Frontmatter** — YAML frontmatter parsed with `gray-matter`
- **Markdown Rendering** — `react-markdown` with `remark-gfm` for GitHub-flavored Markdown
- **Code Highlighting** — `react-syntax-highlighter` for code blocks
- **Norwegian Date Formatting** — `date-fns` with `nb` locale

### State & Data
- **React Context** — Filter state for blog post filtering (FilterContext)
- **Static Generation** — Pre-rendered pages for performance
- **Client Components** — Interactive elements marked with `'use client'`

### Deployment
- **Netlify** — Continuous deployment from main branch
- **Lighthouse CI** — GitHub Actions workflow for performance monitoring

## Project Structure

```
rusås_design/
├── app/
│   ├── (pages)/                    # Route group for page layouts
│   │   ├── blogg/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Blog post page
│   │   ├── layout.tsx              # Pages layout
│   │   └── page.tsx                # Home page
│   ├── layout.tsx                  # Root layout
│   └── not-found.tsx               # 404 page
├── components/                    # Reusable UI components
│   ├── badge/
│   ├── blogCard/
│   ├── button/
│   ├── filterablePosts/
│   ├── footer/
│   ├── markdown/
│   ├── projectCard/
│   ├── relatedPosts/
│   └── themeToggle/
├── context/                       # React Context providers
│   └── FilterContext.tsx          # Tag filtering for blog posts
├── content/                       # Markdown content
│   └── posts/                      # Blog posts in Norwegian
├── lib/                           # Utility functions and data
│   ├── ClarityInit.tsx            # Microsoft Clarity analytics
│   ├── cn.ts                      # Tailwind class merger
│   ├── markdown/                  # Markdown rendering utilities
│   ├── posts.ts                   # Blog post data fetching
│   └── projects.ts                # Project data
├── types/                         # TypeScript types
│   ├── Post.ts                    # Blog post type
│   └── Project.ts                 # Project type
├── public/                        # Static assets
│   └── assets/
├── .github/
│   └── workflows/
│       ├── main.yml              # Lighthouse CI
│       └── lighthouserc.json      # Lighthouse config
└── .vibe/
    └── VIBE.md                    # This file
```

## Key Components

### Blog System
- **Post Type**: `id`, `title`, `created_at`, `description`, `slug`, `tags`, `content`
- **Markdown Processing**: Frontmatter extraction, GFM support, syntax highlighting
- **Blog Card**: Animated card with hover effects, tag filtering, date display
- **Related Posts**: Shows related articles based on tags

### Project Showcase
- **Project Type**: `id`, `title`, `description`, `image`, `url`, `tags`
- **Project Card**: Image placeholder, hover animations, external links
- **Projects Data**: Defined in `lib/projects.ts`

### Filtering
- **FilterContext**: Manages selected tag state for filtering blog posts
- **FilterablePosts**: Component that filters and displays posts by tag

## Norwegian Language Support

The site is **fully in Norwegian (nb-NO)**:
- **Language Tag**: `<html lang="nb-NO">` in root layout
- **Date Formatting**: Uses `date-fns` with Norwegian locale (`nb`)
- **Content**: All blog posts are written in Norwegian
- **Metadata**: OpenGraph and SEO metadata in Norwegian
- **Typography**: Norwegian-optimized fonts (Noto Sans supports Norwegian characters)

## Development Practices

### Test-Driven Development (TDD)
The project follows **Test-Driven Development** principles. Tests should be written before implementation to ensure:
- Code correctness
- Edge case handling
- Maintainable architecture
- Confidence in refactoring

### Conventional Commits
The project uses **Conventional Commits** for consistent commit history:
- `feat:` — New features
- `fix:` — Bug fixes
- `docs:` — Documentation changes
- `style:` — Style changes (CSS, formatting)
- `refactor:` — Code refactoring without feature changes
- `chore:` — Maintenance tasks (dependencies, config)
- `perf:` — Performance improvements

### Code Quality
- **ESLint** — With `eslint-config-next` for Next.js best practices
- **Prettier** — Code formatting
- **TypeScript** — Strict mode enabled
- **Next.js Lint** — Built-in Next.js static analysis

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Requirements

- **Node.js**: 22 or higher
- **npm**: Latest version
- **Dependencies**: Managed via `package.json`

## Dependencies

### Core
- `next` (16.2.9) — Framework
- `react` (19.2.7) & `react-dom` — UI library
- `typescript` (6.0.3) — Type system

### UI & Styling
- `tailwindcss` (4.3.1) — CSS framework
- `@tailwindcss/postcss` — PostCSS plugin
- `@tailwindcss/typography` — Typography plugin
- `class-variance-authority` — Class merging
- `tailwind-merge` — Utility merging
- `react-icons` (5.6.0) — Icon library (Fa icons)

### Content & Markdown
- `gray-matter` (4.0.3) — Frontmatter parsing
- `react-markdown` (10.1.0) — Markdown rendering
- `remark-gfm` (4.0.1) — GitHub-flavored Markdown
- `react-syntax-highlighter` (16.1.1) — Code syntax highlighting
- `@types/react-syntax-highlighter` — Type definitions

### Utilities
- `date-fns` (4.4.0) — Date manipulation with Norwegian locale
- `server-only` — Server component utilities
- `radix-ui` (1.6.0) — UI primitives

### Analytics
- `@microsoft/clarity` (1.0.2) — User behavior analytics

### Dev Dependencies
- `eslint` (9.39.4) — Linting
- `eslint-config-next` (16.2.9) — Next.js ESLint config

## Vibe Instructions

When working on this project:

1. **Write in Norwegian**: All user-facing text, blog posts, and metadata must be in Norwegian (nb-NO)
2. **Follow TDD**: Write tests before implementation where applicable
3. **Use Conventional Commits**: Follow the commit message convention
4. **Maintain Type Safety**: Leverage TypeScript for type checking
5. **Accessibility First**: Ensure WCAG compliance, keyboard navigation, ARIA labels
6. **Performance**: Optimize for fast loading, use Next.js features (static generation, caching)
7. **Responsive Design**: Mobile-first approach with responsive breakpoints

## Deployment

- **Platform**: Netlify
- **Build Command**: `next build`
- **Domain**: rusasdesign.no
- **CI/CD**: GitHub Actions for Lighthouse auditing

## License

- **Code**: MIT License
- **Content**: All Rights Reserved (blog posts, images, documentation)

## Contact

For questions about the project, contact: kontakt@rusåsdesign.no
