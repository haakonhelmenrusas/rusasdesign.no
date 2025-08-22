---
id: 003
title: "Sette opp utviklermiljø på Mac"
created_at: "2025-02-09"
description: "En utvikler trenger sine verktøy og oppsett gjort etter et spesielt sett med tanker."
slug: "setup-utvikling-mac"
tags:
  - Apple
  - Produktivitet
---

## Motivasjon

Dette oppsettet har jeg kommet frem til gjennom mye prøving og feiling, og flere iterasjoner. Det fungerer for meg for
øyeblikket, men det betyr ikke at det fungerer for deg rett ut av boksen. Det er basert på mine behov som utvikler av
web-tjenester og mobilapper. Bruk det gjerne som inspirasjon om du vil!

### Start her

Mitt motto er hold alt oppdatert hele tiden, om det ikke har kommet frem at nyeste versjon knekker noe.
Så jeg har en vane om å sjekke oppdateringer på Mac-en og programmer jeg bruker minst en gang i uka.

#### Homebrew

Installer Homebrew som er et terminalprogram for å installere og administrere programvare.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Også sørger vi får at alt er oppdatert før vi går videre

```bash
brew update
```

### Installere programmer

Her er en liste med programmer jeg bruker

- Git - versjonshåndtering av kode
- Visual Studio Code - kode-editor for python, C# og lignende
- WebStorm - IDE for webutvikling og app-utvikling med React Native
- Xcode - IDE for iOS app-utvikling, nødvendig onde
- Google Chrome - nettleser som er bransjestandard for mye av web-utvikling
- Firefox - min daglige nettleser
- Slack - kommunikasjon og chat
- Spotify - musikk til arbeidet
- Docker - utvikling med konteinere f.eks. postgres
- Postman - API-verktøy
- AnyType - alt av notater

#### Kjør kommando

```bash
## Shell Programs
brew install git

# GUI programs
brew install --cask \
  rider \
  google-chrome \
  vivaldi \
  docker \
  slack \
  spotify \
  anytype \
  postman \
  xcode \
  android-studio \
  webstorm
```

### Webutvikling

For de som jobber med Javascript og web-apper så trengs det NodeJS. Ved å kjøre kommandoen under så installerer du siste
LTS versjon av NodeJS, om det er ønskelig med en spesifikk versjon kan du f.eks. legge  "@22" på slutten for å
installere versjon 22.

```bash
# Installer NodeJS
brew install node

# Sjekke versjon
node -v
```

#### Git-oppsett

Etter jeg har installert Git så setter jeg opp en global konfigurasjon

```bash
touch ~/.gitconfig
```

I den nye filen så kan vi sette noen innstillinger som skal brukes i alle prosjekter

```bash
# .gitconfig

[user]
  name   = Your Name
  email  = your_email@example.com
[github]
  user   = username
[push]
	autoSetupRemote = true
```

Med den siste linjen så vil du kunne skrive "git push" i en "branch" uten å måtte spesifisere hvilken "branch" på
serveren du vil peke mot.

### macOS oppsett

Jeg liker å ha det ganske minimalt på skriverbordet og i menyene, så dette er noe av de innstillingene jeg setter opp

- skjuler docken - så jeg får mer plass på skrivebordet til programmene som kjører
- fjerner unødvendige mapper og innstillinger i Finder-vinduet
    - Apper
    - Dokumenter
    - Nedlastninger
    - "home"-mappen
    - eksterne HDD og skylagring
- setter et mørkt tema på OS-et
- setter Vivaldi, eller din foretrukne nettleser til standard

#### Program-oppsett

#### Vivaldi

- Installere uBlock Origin
- Installere React DevTools

### Konklusjon

Dette er noen av de mest brukte innstillingene jeg bruker når jeg skal sette opp utviklermiljøet på en ny Mac.
Det vil nok forandre seg litt i løpet av året så kan hende jeg må inn å oppdatere artikkelen. Håper det var nyttig!