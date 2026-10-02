# Vibe Agent Instructions for Rusås Design

## Project Context

You are working on **Rusås Design** — a Norwegian-language homepage and blog for a web developer. The site uses Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Language Requirements

**ALL USER-FACING CONTENT MUST BE IN NORWEGIAN (nb-NO)**

- Blog posts: Norwegian
- UI text: Norwegian  
- Metadata: Norwegian
- Error messages: Norwegian
- Commit messages: Norwegian (but follow Conventional Commits format)

## Development Workflow

### Before Starting
1. Read relevant files in the project
2. Check `.vibe/VIBE.md` for project details
3. Understand the existing code patterns

### During Development
1. **Test-Driven Development**: Write tests first when adding new functionality
2. **Type Safety**: Always add TypeScript types
3. **Accessibility**: Include ARIA labels, keyboard navigation, semantic HTML
4. **Responsive**: Mobile-first, test on multiple breakpoints
5. **Performance**: Use Next.js static generation where possible

### Commits
Follow **Conventional Commits** format:
- `feat: <beskrivelse>` — Ny funksjonalitet
- `fix: <beskrivelse>` — Feilretting
- `docs: <beskrivelse>` — Dokumentasjonsendringer
- `style: <beskrivelse>` — Stilendringer (CSS, formatering)
- `refactor: <beskrivelse>` — Omskriving uten funksjonsendringer
- `chore: <beskrivelse>` — Vedlikehold (avhengigheter, konfig)
- `perf: <beskrivelse>` — Ytelsesforbedringer

Write commit messages in **Norwegian** when the description is Norwegian-specific.

## File Patterns

### Components
- Use `'use client'` directive for interactive components
- Place components in `components/<name>/<Name>.tsx`
- Export default from component files
- Use PascalCase for component names

### Types
- Define types in `types/` directory
- Use TypeScript interfaces or types
- Export types for reuse

### Content
- Blog posts go in `content/posts/<slug>.md`
- Use YAML frontmatter with required fields:
  ```yaml
  ---
  id: <unique-id>
  title: "<Norwegian title>"
  created_at: "YYYY-MM-DD"
  description: "<Norwegian description>"
  slug: "<url-slug>"
  tags:
    - <tag1>
    - <tag2>
  ---
  ```

### Page Structure
- Pages in `app/(pages)/` for route grouping
- Use Next.js 16 App Router conventions
- Server Components by default
- Add `'use client'` for client-side interactivity

## Styling

### Tailwind CSS v4
- Use utility classes directly
- Custom fonts: Oswald (headings), Noto Sans (body)
- Color scheme: light/dark mode support
- Animations: Use `transition-*`, `duration-*`, `transform` classes

### Color System
- Background: `bg-background`
- Card: `bg-card`
- Border: `border-border`
- Primary: `bg-primary`, `text-primary`
- Accent: `bg-accent`
- Muted: `text-muted-foreground`

## Common Patterns

### Blog Card Animation
```tsx
transition-all duration-500 
hover:shadow-2xl hover:-translate-y-4 hover:scale-105
hover:border-primary
group hover:scale-x-100
```

### Date Formatting (Norwegian)
```tsx
import { format } from 'date-fns';
import { nb } from 'date-fns/locale/nb';

format(new Date(dateString), 'd LLLL, yyyy', { locale: nb })
```

### Markdown Rendering
```tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
```

## Testing

### Test-Driven Development
1. Write test for new functionality first
2. See test fail
3. Write minimal code to pass test
4. Refactor while keeping tests passing

### Test Files
- Place tests alongside source files or in `__tests__` directories
- Use `.test.ts` or `.spec.ts` extension
- Focus on behavior, not implementation

## Deployment

- **Platform**: Netlify
- **Build**: Automatic on push to main
- **Preview**: Netlify deploy previews for PRs
- **Domain**: rusasdesign.no

## Monitoring

- **Lighthouse CI**: Runs on every push (GitHub Actions)
- **Microsoft Clarity**: User behavior analytics
- **Performance**: Monitor Lighthouse scores

## Important Files

- `.vibe/VIBE.md` — Project overview and configuration
- `README.md` — General project documentation
- `package.json` — Dependencies and scripts
- `next.config.ts` — Next.js configuration
- `tailwind.config.ts` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript configuration

## Do This

✅ Write code in Norwegian when appropriate
✅ Follow TDD principles
✅ Use TypeScript types
✅ Make components accessible
✅ Use Conventional Commits
✅ Keep the codebase clean and maintainable
✅ Document new features and patterns

## Don't Do This

❌ Commit without following Conventional Commits
❌ Add content in English (blog posts, UI text)
❌ Skip tests for new functionality
❌ Ignore TypeScript errors
❌ Break existing functionality
❌ Add large dependencies without justification
