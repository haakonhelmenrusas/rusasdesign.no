---
id: 001
title: "Kode-blokk med Sanity og React"
created_at: "2025-06-15"
description: "Legg til kode i innlegg fra Sanity, og vis de i en React-komponent"
slug: "kodeblokk-med-sanity-og-react"
categories: 
  - programming
---

### Intro
Om du vil skrive et innlegg eller en tekst som kan publiseres fra Sanity.io sitt CMS kan du bruke dette oppsettet. Alt du trenger er å installere en plugin, et par pakker for og kunne vise koden på en fin måte og sette det hele sammen i en gjenbrukbar komponent.

#### Oppsett

1. Først installere vi pakkene som trengs:

```bash
# Plugin fra Sanity.io
npm i @sanity/code-input

# For å vise koden i frontend
npm i react-syntax-highlighter 
npm i --save-dev @types/react-syntax-highlighter
```

Så kobler vi opp plugin med sanity.config.ts
```typescript
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import { codeInput } from '@sanity/code-input' // Den nye pakken
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(), // Bruk den her
  ],
})
```
Legg til en kode-seksjon i blockContent-schema, ved å legge til en ny defineArrayMember med en type for kode-blokk. Plugin vil automatisk legge til en ny knapp i grensesnittet av typen kode.

```typescript
import { defineType, defineArrayMember } from 'sanity'
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Caption', value: 'figcaption' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Caption',
            value: 'caption',
            icon: () => 'CAP'
          },
          {
            title: 'Inline Code', // Denne delen
            value: 'inlineCode',
            icon: () => '</>',
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'height',
          type: 'number',
          title: 'Height',
        },
        {
          name: 'width',
          type: 'number',
          title: 'Width',
        },
      ],
    }),
    defineArrayMember({
      type: 'code', // Og denne
    }),
  ],
})
```

Om du nå starter opp serveren og navigerer til Sanity Studio editoren så vil du se en ny knapp i menyen for å skrive inn kode i hoveddelen av et innlegg.
Når du klikker på "Code" vil det dukke opp et vindu som lar deg velge språk og skrive inn kode.

### Vise kode i frontend

Nå kan vi produsere innhold med kode, så må vi lage en komponent som skal vise koden sammen med innholdet på nettsiden. Da lager vi en egen komponent som tar i bruk react-syntax-highlighter pakken. Den lar oss stilisere koden som vi ønsker, med bl.a. legge til tall for hver linje og velge fargetema.

```tsx
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  value: {
    code: string
    language: string
  }
}

const CodeBlock = ({ value }: Props) => {
  const { code, language } = value
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      showInlineLineNumbers={true}
      language={language}
      style={solarizedDark}
      customStyle={{
        padding: '1em',
        marginBottom: '2em',
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

```

Denne pakken kommer med en god del fargetema, så om du vil redusere det digitale fotavtrykket så kan du bare importere det tema du ønsker å bruke, eller bygge ditt eget. Her er en lenke til dokumentasjonen.

### Koble det sammen

Så kobler vi vår nye kodevisningskomponent til PortableText, som er ansvarlig for å vise innholdet som vi henter fra Sanity.

```tsx
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity';
import Code from './components/Code';
import ImageComponent from './components/Image';

export default function CustomPortableText({ className, value }: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      p: ({ children }) => <p className="mb-4 dark:text-gray-50">{children}</p>,
      h1: ({ children }) => (
        <h1 className="mb-4 text-3xl font-semibold dark:text-gray-50">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-4 text-2xl font-semibold dark:text-gray-50">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-3 text-lg font-semibold dark:text-gray-50">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="mb-2 text-base font-semibold dark:text-gray-50">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold dark:text-gray-50">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold dark:text-gray-50">{children}</h6>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="mb-2 mt-0 dark:text-gray-50">{children}</ul>,
      number: ({ children }) => <ol className="mb-4 dark:text-gray-50">{children}</ol>,
    },
    listItem: ({ children }) => <li className="mb-2 dark:text-gray-50">{children}</li>,
    types: {
      image: ({ value, isInline }) => <ImageComponent value={value} isInline={isInline} />,
      code: ({ value }) => <Code value={value} />, // Denne delen er ny!
    },
  };

  return (
    <div className={['prose', className].filter(Boolean).join(' ')}>
      <PortableText components={components} value={value} />
    </div>
  );
}
```
Da får vi kode skrevet ut på nettsiden vår