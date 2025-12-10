/**
 * Configuration for the english (original) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "Italiano",
  prefix: "/",
  dir: "ltr",
  lang: "it",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "Client HTTP per node e browser, basato sulle Promise.",
    subhead: `Axios è un Client HTTP per node.js e browser, basato sulle Promise.
              Axios fornisce una libreria di semplice utilizzo contenuta in un pacchetto molto piccolo e un'interfaccia estendibile.`,
    sponsors: `<p>Grazie per aver deciso di supportare il progetto.</p>
               <p>Verrai automaticamente aggiunto a questa lista entro 24 ore se il tier che hai scelto lo comprende.</p>
               <div class="social"><a class="link" href="/docs/sponsor">Scopri di più...</a></div>
              `,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Come Iniziare": undefined,
    "Vai al GitHub": undefined,
    Lingue: undefined,
    "Open Source": undefined,
    Contribuisci: undefined,
    "Sorgente su GitHub": undefined,
    Problemi: undefined,
    "Pull Requests": undefined,
    "Codice di Condotta": undefined,
    "Fai un Fork su GitHub": undefined,
    "Fai un Fork del Sito Web": undefined,
    "Segnala un problema": undefined,
    Successivo: undefined,
    Precedente: undefined,
    "Website Copy Right Footer": undefined,
    "Vai al Github": undefined,
    "Axios Project Copy Right Footer": undefined,
    "License Label Footer": undefined,
    Sponsors: undefined,
    "Diventa uno Sponsor": undefined,
    "Sponsor Oro": undefined,
  },
  sidebar: [
    {
      type: "heading",
      text: "Come Iniziare",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "Introduzione",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "Esempio di Utilizzo",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "Richieste POST",
    },
    {
      type: "heading",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/docs/api_intro",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/docs/instance",
      text: "L'Istanza Axios",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "Configurazione della Richiesta",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "Schema della Risposta",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "Valori Predefiniti",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "Interceptors",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "Gestione degli Errori",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "Annullamento delle Richieste",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "🆕 Corpo con URL-Encoding",
    },
    {
      type: "link",
      href: "/docs/multipart",
      text: "🆕 Corpo Multipart",
    },
    {
      type: "heading",
      text: "Altro",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "Note",
    },
    {
      type: "heading",
      text: "Collaboratori",
    },
    {
      type: "link",
      href: "/docs/sponsor",
      text: "Sponsorizzare Axios",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md",
      text: "Codice di Condotta",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/v1.x/COLLABORATOR_GUIDE.md",
      text: "Guida per la Collaborazione",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md",
      text: "Contribuire ad Axios",
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "Tradurre la documentazione",
    },
  ],
};
