# Progetto-Counter
Contatore dinamico con pulsanti di decremento e incremento che, a seconda del valore visualizzato cambia l'immagine e il colore di sfondo.

## Descrizione
Progetto di un'applicazione che funzioni come contatore con a disposizione due pulsanti che incrementano o decrementano il valore visualizzato a schermo in tempo reale.    
Per dare un contesto di utilizzo, ho trasformato il contatore in un termometro dove possiamo alzare o abbassare la temperatura con i pulsanti ed in base ad essa l'immagine di sfondo e il colore cambiano.

## Linguaggi utilizzati
- HTML
- CSS    
   Utilizzato maggiormente nella formattazione del contatore:
   - Per creare un effetto 3D nei pulsanti sia visivamente che nell'interazione con essi;
   - Posizionare il contatore in basso a destra e dargli un aspetto più ordinato e pulito;
- JAVASCRIPT    
  Utilizzato per:
  - Creare gli elementi del contatore ed i bottoni.
  - Rendere funzionanti i pulsanti di decremento e incremento;
  - Restituire a schermo il valore modificato in tempo reale;
  - Rendere l'immagine e il colore di sfondo dinamici in base al valore restituito a schermo;

## Logica di lavoro in Javascript
1)  Inizializzare le variabili.
2)  Creare una funzione con delle if che in base al valore abbia un'immagine e un colore di sfondo.    
   Troviamo 6 range di valori nella funzione:
       
    if (temp >= 10 && temp <= 16) {    
          imageUrl = '';    
          colorBg = '';    
      } else if (temp >= 17 && temp <= 24) {    
          imageUrl = '';    
          colorBg = '';    
      } else if (temp >= 25 && temp <= 44) {    
          imageUrl = '';    
          colorBg = '';    
      } else if (temp >= 45 ) {    
          imageUrl = '';    
          colorBg = '';    
      } else if (temp <= -16) {    
          imageUrl = '';    
          colorBg = '';    
      } else {    
          imageUrl = '';    
          colorBg = '';    
      }
3) Creare gli elementi del contatore e dei pulsanti.   
4) Ascoltare l'evento 'Click' del button e creare una funzione che incrementa o decrementa il valore, restituisca il valore aggiornato e la funzione che modifica lo sfondo in base ad esso.

## Link diretto all'applicazione
https://l-falcone.github.io/Progetto-Counter-JS/
