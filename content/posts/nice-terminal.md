---
id: 005
title: "Nice Terminal"
created_at: "2025-09-05"
description: "Pynte litt med terminalen."
slug: "nice-terminal"
tags:
  - Programmering
  - Produktivitet
---

## Motivasjon

Når man jobber som utvikler så sitter man mye i terminalen, og det vinduet er ikke kjent for å være skal vi si estetisk
eller veldig intuitivt. Jeg har gjort noen små endringer til min terminal ved å legge til noen få linjer konfigurasjon i
.zshrc-filen på Mac-en.

```bash
setopt PROMPT_SUBST

# Colors
COLOR_USER='%F{cyan}'
COLOR_DIR='%F{yellow}'
COLOR_GIT='%F{green}'
COLOR_RESET='%f'

# Git branch function
parse_git_branch() {
  git branch 2>/dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
}

# Prompt
PROMPT="${COLOR_USER}%n ${COLOR_DIR}%1~ ${COLOR_GIT}$(parse_git_branch)${COLOR_RESET} %# "
```

Dette gir meg litt kortere prompt enn standaren, siden jeg ikke trenger å se navnet på maskinen jeg sitter på. Så litt
farger og til slutt en liten funksjon som viser hvilken gren jeg er i git prosjektet om det finnes i mappen jeg er i.
Det er ikke mye endring, men jeg prøver ut dette oppsettet før jeg kanskje legger til noe mer.

Hvordan ser din terminal ut? ✨