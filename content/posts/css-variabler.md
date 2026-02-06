---
id: 006
title: "CSS variabler"
created_at: "2026-02-01"
description: "CSS variabler - hva er det og hva kan det brukes til?"
slug: "css-variabler"
tags:
  - Programmering
---

## CSS variabler - hva er det og hva kan det brukes til?

CSS-variabler (også kalt custom properties) lar deg definere gjenbrukbare verdier direkte i CSS, for eksempel farger, 
spacing og typografi. Du deklarerer dem ofte på :root eller i en global fil, og bruker dem deretter med var(--navn). 
Dette gir et mer konsistent design, enklere vedlikehold og mindre duplisering på tvers av komponenter.

Du finner CSS-variabler brukt i alt fra design systemer og temaer (lys/mørk) til komponentbibliotek, 
hvor de fungerer som enkle "design tokens" som kan endres ett sted og automatisk oppdateres overalt.

## Kort eksempel

```css
:root {
  --color-primary: #2563eb;
  --color-text: #0f172a;
  --space-md: 16px;
  --radius-md: 12px;
}

.button {
  color: var(--color-text);
  background: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}
```

## Scenario: refaktorering av en kodebase med hardkodede verdier

Tenk deg en kodebase der knappene dine har hardkodede farger og marginer i hver komponent. Noen bruker #2563eb, 
andre #1d4ed8, og spacing varierer fra 12px til 16px uten noe tydelig system. Når du senere skal justere primærfargen 
eller stramme inn spacing, må du lete gjennom mange filer og risikerer å overse noe.

Ved å samle farger, spacing og typografi i en global CSS-fil med variabler (f.eks. :root { --color-primary: ...; --space-md: ...; }), 
kan du endre designet sentralt. Fordelene er konkrete:
- Konsistent uttrykk på tvers av hele UI-et
- Mindre duplisering og enklere vedlikehold
- Raskere designjusteringer og temastøtte
- Enklere onboarding for nye utviklere

Resultatet er en mer robust og skalerbar CSS-arkitektur der designendringer faktisk blir enkle, 
i stedet for tidkrevende og feilutsatte.
