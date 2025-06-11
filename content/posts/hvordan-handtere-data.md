---
id: 002
title: "Hvordan holde orden på dataflyten og hvorfor betyr det noe"
created_at: "2025-05-15"
description: "Hvordan holde orden på data når en web-applikasjon vokser"
slug: "hvordan-handtere-data"
categories: 
  - Programmering
  - React
---

## Hvordan holde orden på dataflyten og hvorfor betyr det noe?

Når man bygger web-applikasjoner må man ofte håndtere data som mellomlagres på applikasjons-nivå, side-nivå eller komponent-nivå. 
Det er flere grunner til at dette er viktig å sette opp riktig fra start:
- Konsekvent - Holde data i applikasjonen i synk med grensesnittet
- Skalerbarhet - kunne holde kontroll over dataflyten mellom komponenter
- Ytelse - sørger for optimalisering for et responsive grensesnitt

### Definere et interface for sikre bedre kontroll av data

Ved å benytte seg av TypeScript i prosjekter så kan man lettere holde orden og sikre seg at dataene man håndterer og sender rundt i 
applikasjonen har den strukturen man forventer. Man får også en bedre opplevelse når man utvikler ved at kode-editoren gir deg 
hjelp underveis med hint om hvordan en struktur ser ut, og om du har brukt det feil.

```typescript
import { useState } from 'react';

interface User {
 name: string;
 age: number;
 city: string | undefined;
}

const [user, setUser] = useState<User>({
 name: '',
 age: 29,
 city: undefined,
});
```

For å oppdatere data må man ta med resten av objektet, før man kan selektivt oppdatere noe av dataen:

```typescript
/**
* Her må funksjonens signatur følge samme datatype i argumentet som det objektet den vil gjøre endring på.
*/
const updateUserName = (newName: string) => {
 setUser({...user, name: newName });
};
```

### Samle kontroll over data der det gir mening

Når du har to komponenter som bruker eller er avhengige av den samme data, bør du vurdere å flytte dataene ut av komponentene, opp til den nærmeste overordnede komponenten, og deretter sende data ned , samt eventuelt en funksjon for å endre tilstanden, til komponentene under i hierarkiet.

```typescript
import { useState } from 'react';

/**
* Overordnet komponent som har kontroll over dataen og 
* funksjonen for å endre den.
*/
const ParentComponents = () => {
  const [active, setActive] = useState(false);

  function handleState() {
    setActive((prev) => !prev)
  }

  return (
   <>
	<ChildComponent active={active} handleState={handleState} />
    <ChildComponent active={active} handleState={handleState} />
   </>
  );
};

/**
* Underkompoent som tar imot data og en funksjon for å endre data
*/
const ChildComponent = ({ active, handleState }) => {
 return (
  <div>
   {active && <Badge />}
   <button onClick={handleState}>
    Activate
   </button>
  </div>
 );
};
```

### Reduser kompleksitet i komponenter som bygger grensesnitt

Hvis en skjema-komponent inneholder mer enn noen få useState-kall, kan administrasjonen av 
tilstandslogikken raskt bli for kompleks. Ved å bruke en useReducer-hook kan vi samle tilstandslogikken på ett 
sted og kun kalle funksjonen for å endre tilstanden i UI-komponenten. Dette gjør at vi kan gjøre skjema komponenten enklere, mindre og lettere å teste.

```typescript
import { useReducer } from 'react';

interface FeedbackFormState {
 rating: number;
 feedback: string;
 name: string;
 nameError: boolean;
 email: string;
 emailError: boolean;
};

export type Action =
 | { type: 'SET_RATING'; payload: number; }
 | { type: 'SET_FEEDBACK'; payload: string; }
 | { type: 'SET_NAME'; payload: string; }
 | { type: 'SET_NAME_ERROR'; payload: boolean; }
 | { type: 'SET_EMAIL'; payload: string; }
 | { type: 'SET_EMAIL_ERROR'; payload: boolean; };

function reducer(state: FeedbackFormState, action: Action): FeedbackFormState {
  switch (action.type) {
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'SET_FEEDBACK':
      return { ...state, feedback: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_NAME_ERROR':
      return { ...state, nameError: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    default:
      return state;
  }
};

export const useFeedbackForm = () => {
  const INITIAL_STATE: FeedbackFormState = {
    rating: 0,
    feedback: '',
    name: '',
    nameError: false,
    email: '',
    emailError: false,
  };
  return useReducer(reducer, INITIAL_STATE);
};
```

### Global tilstandsdata

Ved å bruke Reacts Context API kan vi lagre tilstand på hvilket som helst nivå i appen vår, og komponenter kan hente tilstand uten å sende props nedover flere nivåer.

```typescript
import { createContext } from 'react';
import { User } from './types';

interface UserContextProps {
 user: User | undefined;
};

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserContextProvider = ({ children }) => {
 // Hent brukerdata
 // Vis en midlertidig tilstand mens vi venter på data
 // Når dataene kommer tilbake, gjør de tilgjengelig for alle kompoenter under seg

 return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
```

### Flere veier til mål

Vi har nå sett flere eksempler på hvordan tilstandsdata håndteres i React-applikasjoner. 
Valg av metode avhenger alltid av situasjonen, og det er viktig å finne en god balanse.
Jeg foretrekker å starte med den enkleste og mest lokale løsningen, med mindre jeg vet at data må 
være tilgjengelig på tvers av appen – for eksempel ved autentisering eller brukerinformasjon. 
Om nødvendig kan koden alltid utvides eller refaktoreres senere.
Det er også viktig å forstå fordeler og ulemper ved ulike metoder. React Context API bør ikke brukes ukritisk til all 
tilstandshåndtering, spesielt ikke der det kan føre til unødvendig kompleksitet. Bygg applikasjonen metodisk og systematisk, 
med tester, slik at det blir enklere for både deg og andre utviklere å gjøre endringer – selv seks måneder senere.