---
id: 007
title: "Bygg et Tilgjengelig Kontaktskjema med HTML og CSS"
created_at: "2026-02-10"
description: "Lær hvordan du bygger et enkelt og tilgjengelig kontaktskjema fra bunnen av med bare HTML og CSS."
slug: "html-form"
tags:
  - Programmering
  - HTML
  - CSS
  - WCAG
---

I en verden full av avanserte rammeverk og biblioteker, er det lett å glemme hvor utrolig mye du kan få til med helt vanlig HTML og CSS. Å kunne det grunnleggende skikkelig er som å ha et hemmelig superverktøy. Det gir deg friheten til å bygge akkurat det du ser for deg, uten å måtte dra inn tunge avhengigheter.

Se for deg dette: Du har snekret sammen en enkel nettside for et produkt, og nå vil du gi folk en måte å stille deg spørsmål. Du trenger et kontaktskjema. I stedet for å lete etter et plugin eller et npm-bibliotek, kan vi bygge et lynraskt og tilgjengelig skjema selv.

Et godt prinsipp er å bare be om den informasjonen du *faktisk* trenger. Jo færre felter, jo lavere er terskelen for å fylle ut skjemaet.

### Hvorfor gidde å lære det grunnleggende?

- **For en raskere nettside:** Ren HTML og CSS er fjærlett. Du slipper å laste inn masse JavaScript som gjør siden din treg.
- **Full kontroll:** Du bestemmer over koden, strukturen og stilen. Ingen rare `div`-er eller klassenavn du ikke har bedt om.
- **Tilgjengelighet for alle (WCAG):** Når du bygger fra bunnen av, er det enklere å sørge for at løsningen din kan brukes av alle, også de som er avhengige av skjermleser.

## La oss bygge!

Vi starter med selve hjertet i et skjema: `<form>`-elementet. Dette forteller nettleseren at alt inni her hører sammen.

```html
<form>
  <!-- Her skal feltene våre bo -->
</form>
```

### Navn og E-post: En god start

For å spørre om noe, trenger vi felter. Men et felt uten en god ledetekst er som en dør uten håndtak. For at skjemaet skal være tilgjengelig og lett å forstå, må hvert felt ha en `<label>`. Dette er superviktig for at brukere med skjermlesere skal skjønne hva de skal fylle ut.

Vi kobler en `<label>` til en `<input>` ved å gi input-feltet en unik `id`, og så bruke den samme `id`-en i `for`-attributtet til etiketten.

```html
<div class="form-group">
  <label for="name">Navn</label>
  <input type="text" id="name" name="user_name" required />
</div>

<div class="form-group">
  <label for="email">E-post</label>
  <input type="email" id="email" name="user_email" required />
</div>
```

**Hva betyr dette?**
- **`type="text"`:** Et helt vanlig tekstfelt.
- **`type="email"`:** Et felt spesielt for e-post. Nettleseren kan selv sjekke om det ser ut som en gyldig e-postadresse. Smart, ikke sant?
- **`required`:** Dette betyr at feltet *må* fylles ut.

### Plass til spørsmål: `<textarea>`

For lengre meldinger er `<textarea>` perfekt. Siden dette feltet ikke er kritisk for oss, markerer vi det som valgfritt i ledeteksten.

```html
<div class="form-group">
  <label for="question">Ditt spørsmål (valgfritt)</label>
  <textarea id="question" name="user_question" rows="4"></textarea>
</div>
```
- **`rows="4"`:** Gir feltet en starthøyde på fire linjer.

### Send inn-knappen

Til slutt, en knapp for å sende avgårde herligheten.

```html
<button type="submit">Send inn spørsmål</button>
```
- **`type="submit"`:** Forteller nettleseren at "når noen klikker her, skal skjemaet sendes".

## Litt sminke med CSS Modules

Et nakent skjema er funksjonelt, men kanskje litt kjedelig. Med CSS kan vi pynte på det. Her er et forslag til hvordan du kan gjøre det med CSS Modules, som er en fin måte å unngå at stilene dine kræsjer med andre ting på siden.

```css
/* Form.module.css */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.formGroup {
  display: flex;
  flex-direction: column;
}

.formGroup label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.formGroup input,
.formGroup textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.formGroup input:focus,
.formGroup textarea:focus {
  outline: 2px solid blue;
  border-color: blue;
}

.submitButton {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submitButton:hover {
  background-color: #005bb5;
}
```

Legg merke til `:focus`-stilen vi har lagt til. Dette er kjempeviktig for universell utforming! Det gir en tydelig visuell markering av hvilket felt du står i, noe som er essensielt for de som navigerer med tastatur, men også nyttig for absolutt alle.

## Hva skjer når brukeren trykker "Send"?

Ok, så vi har et flott skjema, men hvor blir det av dataene når noen trykker på "Send inn spørsmål"? Siden nettsiden vår ligger på Netlify, kan vi bruke en av deres smarteste funksjoner: **Netlify Forms**. Dette lar oss ta imot skjemadata uten å måtte skrive noe backend-kode i det hele tatt.

For å få det til å funke, trenger vi bare å gjøre en liten justering i HTML-koden vår. Vi legger til et par attributter i `<form>`-taggen:

```html
<form name="contact" method="POST" data-netlify="true">
  <!-- ... resten av feltene dine kommer her ... -->
</form>
```

**Hva har vi gjort?**
- **`name="contact"`:** Vi gir skjemaet et navn. Dette hjelper Netlify å identifisere det i administrasjonspanelet.
- **`method="POST"`:** Vi spesifiserer at dataene skal sendes med POST-metoden, som er standard for skjemainnsendinger.
- **`data-netlify="true"`:** Dette er den magiske bryteren som forteller Netlify: "Hei, ta dere av dette skjemaet for meg!"

Når du publiserer siden din med denne endringen, vil Netlify automatisk oppdage skjemaet. Hver gang en bruker sender inn en melding, vil den dukke opp trygt og sikkert i Netlify-dashboardet ditt under "Forms".

Og det var det! Et fullt funksjonelt, tilgjengelig og pent kontaktskjema, bygget fra bunnen av. Dette viser hvorfor det er så verdifullt å kunne sine grunnleggende byggeklosser.

### Nyttige lenker
- **[Uu-tilsynet (Tilsynet for universell utforming av ikt)](https://www.uutilsynet.no/)**: Informasjon om hvordan du lager tilgjengelige nettsider i Norge. De har mange gode veiledere og eksempler.
- **[Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)**: For mer detaljert informasjon om hvordan du kan tilpasse skjemahåndteringen.
