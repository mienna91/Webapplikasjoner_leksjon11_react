# Webapplikasjoner_leksjon11_react

### .ENV variabler for server
- BASEURL=/api/v1
- NODE_ENV=development
- PORT=5000
- DATABASE_LOCAL=mongodb://localhost:27017/leksjon11

### .ENV variabler for client
- BASE_URL=http://localhost:5000
- API_VERSION=/api/v1

### For å kjøre appen må du:
1. Starte opp mongoDb
2. Kjøre scriptet "client-dev" på client siden (husk å være i riktig mappe når du skal kjøre script --> client)
3. Kjøre scriptet "dev" på server siden (husk å være i riktig mappe når du skal kjøre script --> server)

### Kjøre test
 Kjør scriptet "test" på client-siden
 

### Utfordringer i applikasjonen min
Løsningen har et problem: hvis du prøver å navigere til/tilbake til Question via Nav linken får man 404 (pga router løsningen min). Dette er vunky! men for å kunne vise at funksjonaliteten for vote counting fungerer kan man navigere fram/tilbake mellom Question og Results ved hjelp av fram/tilbake i browser etter man har svart på poll (Question).
 
 Ellers av ting som er verdt å nevne:
 - Har ikke lagt opp får å vise feil i grensesnittet (har dog satt opp den globale errror håndteringen på serverside)
 - Fjernet required fra user feltet i Question schema(som er modell for poll i mitt tilfelle), slik at man kan opprette poll uten å opprette bruker (dette er kun for å forhindre krash (siden feilen ikke blir håndtert i client). MEN funksjonaliteten for å knytte bruker til en poll (Question) fungerer hvis du oppretter bruker før du lager pollen.
 - For at du skal kunne lage bruker må navn med, email må inneholde valid email adresse (test@test.no f.eks).
 - For å lage spørsmål må spørsmål inneholde teskt samme med hvert svar alternativ. (Ellers går det ikke gjennom, alle feltene er reqiured)
 
 Med det sagt så fungerer backenden som den skal og frontenden er der problemet kommer, pga router løsningen min. 
   

