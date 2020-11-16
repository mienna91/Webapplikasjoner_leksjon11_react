# Webapplikasjoner_leksjon11_react

### .ENV variabler for server
> BASEURL=/api/v1
NODE_ENV=development
PORT=5000
DATABASE_LOCAL=mongodb://localhost:27017/leksjon11

### .ENV variabler for client
> BASE_URL=http://localhost:5000
API_VERSION=/api/v1

### For å kjøre appen må du:
1. Starte opp mongoDb
2. Kjøre scriptet "client-dev" på client siden (husk å være i riktig mappe når du skal kjøre script --> client)
3. Kjøre scriptet "dev" på server siden (husk å være i riktig mappe når du skal kjøre script --> server)

### Kjøre test
 Kjør scriptet "test" på client-siden
 

### Utfordringer i applikasjonen min
 Jeg fikk mange utfordringer knyttet til å referere til Ider til f.eks user når jeg skal knytte en user til en poll, choices
til et question osv (har en schema løsning som separerer spørsmål og tilknyttede svar, disse er da knyttet sammen via Refs, referansene går via ObjectId som genereres av MongoDb). Så min løsning ble på ingenmåte perfekt. Og den fungerer hvis du først lager en bruker, så lager et question (med svar alternativene), så svarer på det og så får du test resultat av votecounten. MEN hvis du prøver å navigere tilbake til Question via Nav linken får man 404 (pga global state ikke består gjennom flere renders). Dette er vunky! men for å kunne vise at funksjonaliteten for vote counting fungerer kan man navigere fram/tilbake mellom Question og Results ved hjelp av fram/tilbake i browser.
 
 Ellers av ting som er verdt å nevne:
 - Har ikke lagt opp får å vise feil i grensesnittet (har dog satt opp den globale errror håndteringen på serverside)
 - For at du skal kunne lage bruker må navn med, email inneholde valid email adresse (test@test.no f.eks).
 - For å lage spørsmål må spørsmål inneholde teskt samme med hvert svar alternativ. (Ellers går det ikke gjennom, alle feltene er reqiured)
 
 Med det sagt så fungerer backenden som den skal og frontenden er der problemene kommer pga globale staten for user og question ikke består gjennom flere renders.
   

