---
title: "Sponsorizzare Axios"
---

Grazie per aver deciso di supportare il nostro progetto. La tua donazione verrà utilizzata per manutenere e sviluppare Axios.

Come ricompensa per i nostri sponsor più importanti, offriamo l'opportunità di aggiungere il tuo logo e una breve informazione sul nostro sito e/o [Readme.md](https://github.com/axios/axios) in base al livello di supporto che hai scelto.
Questa operazione viene totalmente automatizzata se effettui la donazione tramite [OpenCollective.com](https://opencollective.com/axios/contribute). Se utilizzi questo metodo, il tuo logo verrà aggiunto entro 24 ore.

Il tuo logo può essere messo:

- Nel carosello della pagina principale
- Nei caroselli di ogni pagina della documentazione
- In cima al [Readme.md](https://github.com/axios/axios) della nostra repo

La posizione nel carosello dipende da:

- data della donazione (gli sponsor nuovi vengono mostrati temporaneamente in cima)
- il tier di supporto scelto
- l'importo della donazione
- consistenza nelle donazioni

Se hai scelto di donare tramite [GitHub](https://github.com/sponsors/axios), dovrai contattarci se desideri promuovere il tuo logo in base ai nostri tier di supporto.

### Tier

Guarda la lista dei tier su [Open Collective](https://opencollective.com/axios/contribute)

|                                                               |   Bronzo   |   Argento   |     Oro     |     Platino      |
| ------------------------------------------------------------- | :--------: | :---------: | :---------: | :--------------: |
| Pagina principale                                             | small logo | medium logo | large logo  | extra large logo |
| Pagine della documentazione                                   |            |             | medium logo |    large logo    |
| [Readme.md](https://github.com/axios/axios)                   |            |             | small logo  |   medium logo    |
| Unione dei dati dalla repo GitHub degli sponsor               |            |      +      |      +      |        +         |
| Blocco dei link nei suggerimenti\*                            |            |             |      +      |        +         |
| Video Youtube incorporato nei suggerimenti\*                  |            |             |      +      |        +         |
| Lunghezza max. della descrizione nel Readme.md (in caratteri) |            |             |     100     |       150        |

> Nota:
> Il blocco dei link extra e dei video può essere impostato solo tramite il file `sponsors.json`

### Tipo di Supporto

Sei libero di creare anche una donazione personalizzata, nel qual caso si otterranno i vantaggi del tier più alto esistente che comprende
l'importo della donazione. L'importo in eccesso verrà poi preso in considerazione per determinare l'ordine
degli sponsor presenti nel carosello.

### Logo dello Sponsor

Il tuo logo verrà scaricato sul nostro server, ottimizzato, rimossi i bordi vuoti e ridimensionato mantenendo le proporzioni.
Se la lunghezza del logo è considerevolmente più grande dell'altezza, la didascalia del testo verrà nascosta,
e il logo riempirà tutto lo spazio disponibile. L'altezza massima del logo è uguale per ogni tier di supporto.

### Descrizione

Se non viene fornita alcuna descrizione, cercheremo di prenderla dai meta-tag del sito dello sponsor.

### GitHub

Se hai aggiunto il tuo profilo GitHub al tuo profilo Open Collective,
puoi creare una repository speciale chiamata `axios-sponsor` con dentro il file `sponsor.json`
inserito nella root. In questo modo puoi gestire lì dentro le informazioni del tuo sponsor.

I dati presenti in questo file verranno uniti con quelli del tuo profilo Open Collective. In questo modo puoi aggiungere informazioni aggiuntive
per farti pubblicità.

Il file `sponsor.json` ha la seguente struttura (ogni campo è opzionale):

```json
{
  "displayName": "Umbrella Corporation",
  "targetLink": "https://umbrellacorp.com/",
  "alt": "Umbrella Corporation",
  "image": "https://fake.com/logo.png",
  "image_dark": "https://fake.com/logo_dark.png",
  "description": "The Umbrella Corporation is a pharmaceutical company",
  "website": "https://google.com/",
  "github": "https://github.com/fakeGitHib",
  "icon": "https://fake.com/icon.png",
  "video": "https://www.youtube.com/embed/isosE4Bowh0",
  "twitter": "https://x.com/profile",
  "showCaption": true,
  "crown": false,
  "hide": false,
  "links": {
    "link1": "https://google.com/",
    "link2": "https://google.com/"
  }
}
```

Il nostro backend scaricherà i dati aggiornati degli sponsor del sito ogni 24 ore.
