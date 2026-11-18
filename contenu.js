/* =====================================================================
   📝 CONTENU DU SITE — c'est le SEUL fichier à modifier pour ajouter
   une séquence, une étapa, un document ou une vidéo.
   Règles : garder les guillemets "…", une virgule après chaque bloc,
   et les crochets [ ] / accolades { } bien fermés.
   ===================================================================== */

var SITE = {
  titre: "¡Español con el profe!",
  sousTitre: "Les cours d'espagnol de M. Villarroel",
  // Laisser "" pour cacher un bouton
  liens: {
    ecoledirecte: "https://www.ecoledirecte.com",
    youtube: "",          // lien de votre chaîne YouTube
    drive: "",            // lien d'un dossier Google Drive partagé
    kahoot: ""            // lien de votre page Kahoot
  },
  // Empreinte du code professeur (ouvre tous les niveaux).
  // Pour la changer : ouvrir changer-code.html. Code de départ : profe-chris
  codeProf: "a0b9e8fb42ea3a052cea00b2cf439873d946c365873d3660360db737373f3356"
};

/* ---------------------------------------------------------------------
   🧩 ESPACE PUBLIC — vidéos de grammaire (ouvert à tous, sans code)
   youtube : l'adresse de la vidéo (ex. "https://youtu.be/abc123") ou "" si pas encore prête
   niveaux : "5", "4", "1", "0" (Terminale), "B" (Bachelor)
   fiche : lien d'un PDF de résumé (facultatif)
   --------------------------------------------------------------------- */
var GRAMMAIRE = [
  { id: "presente", emoji: "⏰", titre: "El presente de indicativo", sousTitre: "Le présent", niveaux: ["5", "4"],
    videos: [{ titre: "Le présent des verbes réguliers", youtube: "" }], fiche: "" },
  { id: "ser-estar", emoji: "⚖️", titre: "Ser y estar", sousTitre: "Les deux verbes « être »", niveaux: ["5", "4"],
    videos: [{ titre: "Ser ou estar ?", youtube: "" }], fiche: "" },
  { id: "gustar", emoji: "❤️", titre: "Me gusta / me gustan", sousTitre: "Exprimer ses goûts", niveaux: ["5"],
    videos: [{ titre: "Le verbe gustar", youtube: "" }], fiche: "" },
  { id: "posesivos", emoji: "🎒", titre: "Los posesivos", sousTitre: "Mi, tu, su…", niveaux: ["5"],
    videos: [{ titre: "Les adjectifs possessifs", youtube: "" }], fiche: "" },
  { id: "diptongos", emoji: "🔀", titre: "Los verbos con diptongo", sousTitre: "e → ie, o → ue", niveaux: ["5", "4"],
    videos: [{ titre: "Les verbes à diphtongue", youtube: "" }], fiche: "" },
  { id: "preterito", emoji: "⏪", titre: "El pretérito indefinido", sousTitre: "Le passé simple", niveaux: ["4", "1", "0"],
    videos: [{ titre: "Le prétérit des verbes réguliers", youtube: "" }], fiche: "" },
  { id: "imperfecto", emoji: "🕰️", titre: "El pretérito imperfecto", sousTitre: "L'imparfait", niveaux: ["4", "1", "0"],
    videos: [{ titre: "L'imparfait", youtube: "" }], fiche: "" },
  { id: "imperativo", emoji: "📣", titre: "El imperativo", sousTitre: "Donner un ordre", niveaux: ["4", "1"],
    videos: [{ titre: "L'impératif", youtube: "" }], fiche: "" },
  { id: "futuro", emoji: "🚀", titre: "El futuro", sousTitre: "Le futur", niveaux: ["4", "1", "0"],
    videos: [{ titre: "Le futur simple", youtube: "" }], fiche: "" },
  { id: "subjuntivo", emoji: "🌈", titre: "El presente de subjuntivo", sousTitre: "Le subjonctif présent", niveaux: ["1", "0", "B"],
    videos: [{ titre: "Le subjonctif présent", youtube: "" }], fiche: "" }
];

/* ---------------------------------------------------------------------
   🔒 ESPACES PAR NIVEAU (protégés par un code)
   Types de ressources possibles :
     "fiche" 📄  "vocabulaire" 📚  "grammaire" 🧩  "video" 🎬 (YouTube, s'affiche dans la page)
     "co" 🎧 (compréhension orale, YouTube)  "projet" 🏆  "flashcards" 🃏  "jeu" 🎮
     "kahoot" 🟣  "evaluation" 📝  "lien" 🔗
   lien : chemin du fichier dans le site (ex. "docs/4-Quatrieme/4-S1/E1-fiche.pdf")
          ou adresse internet complète. "" = « Bientôt disponible ».
   notions : identifiants de vidéos de grammaire (voir plus haut) liées à la séquence.
   --------------------------------------------------------------------- */
var NIVEAUX = [
  {
    id: "5", dossier: "5-Cinquieme", nom: "5ème", emoji: "🌱", couleur: "#FF8A00",
    code: "f46fb2d7b6fdacedd0de5d3cbd7ad5a564b0077a4f6fa6012d17c16c30fb4b07", // cinco2026
    sequences: [
      { id: "5-S1", emoji: "👋", titre: "Séquence 1", sousTitre: "Titre à compléter", notions: ["presente"],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Vocabulaire", ressources: [
            { type: "fiche", titre: "Fiche de l'étapa", lien: "" },
            { type: "flashcards", titre: "Flashcards du vocabulaire", lien: "" }
          ]}
        ]}
    ]
  },
  {
    id: "4", dossier: "4-Quatrieme", nom: "4ème", emoji: "🚀", couleur: "#E63946",
    code: "14e3b7e202052c9fb15ee35a77a9fd97c409b42451b5d8c10f8b2e0388f7443b", // cuatro2026
    sequences: [
      { id: "4-S1", emoji: "🗺️", titre: "Séquence 1", sousTitre: "Exemple complet à remplacer", notions: ["preterito", "ser-estar"],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Découverte du vocabulaire", ressources: [
            { type: "fiche", titre: "Fiche de l'étapa 1", lien: "" }, // ex. "docs/4-Quatrieme/4-S1/E1-fiche.pdf",
            { type: "vocabulaire", titre: "Tableau de vocabulaire", lien: "" },
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire", lien: "" }
          ]},
          { titre: "Etapa 2", sousTitre: "Compréhension orale", ressources: [
            { type: "co", titre: "Vidéo à regarder à la maison", lien: "" },
            { type: "fiche", titre: "Fiche de compréhension", lien: "" }
          ]},
          { titre: "Etapa 3", sousTitre: "Grammaire", ressources: [
            { type: "grammaire", titre: "Fiche de grammaire", lien: "" },
            { type: "flashcards", titre: "Flashcards sonores — conjugaison", lien: "" },
            { type: "jeu", titre: "Jeu en ligne", lien: "" },
            { type: "kahoot", titre: "Kahoot de révision", lien: "" }
          ]},
          { titre: "Etapa 4", sousTitre: "Conversación", ressources: [
            { type: "fiche", titre: "Fiche de la conversación", lien: "" }
          ]},
          { titre: "Proyecto final", emoji: "🏆", sousTitre: "Évaluation de fin de séquence", ressources: [
            { type: "projet", titre: "Consigne du projet", lien: "" },
            { type: "evaluation", titre: "Grille d'évaluation", lien: "" }
          ]}
        ]}
    ]
  },
  {
    id: "1", dossier: "1-Premiere", nom: "1ère", emoji: "🎓", couleur: "#2A9D8F",
    code: "62f7d1a18f4bf2185a0b6bdb0c24b73bb436bcd959beb86cd3dcc11df7e63306", // uno2026
    sequences: [
      { id: "1-S1", emoji: "📘", titre: "Séquence 1", sousTitre: "Titre à compléter", notions: [],
        etapas: [ { titre: "Etapa 1", sousTitre: "", ressources: [ { type: "fiche", titre: "Fiche de l'étapa", lien: "" } ] } ] }
    ]
  },
  {
    id: "0", dossier: "0-Terminale", nom: "Terminale", emoji: "🏅", couleur: "#6A4C93",
    code: "abeab405ec7459ddafbc80bec99a5a1d042503c61c60f80dfaddcbb3ac23512b", // tle2026
    sequences: [
      { id: "T-S1", emoji: "📗", titre: "Séquence 1", sousTitre: "Titre à compléter", notions: [],
        etapas: [ { titre: "Etapa 1", sousTitre: "", ressources: [ { type: "fiche", titre: "Fiche de l'étapa", lien: "" } ] } ] }
    ]
  },
  {
    id: "B", dossier: "Bachelor", nom: "Bachelor", emoji: "💼", couleur: "#1D3557",
    code: "ad72e4c45c1716f12eb5bdf3e2b1ac37c9a13167f3b7624b76ad578476547b44", // bachelor2026
    sequences: [
      { id: "B-S1", emoji: "🤝", titre: "Module 1", sousTitre: "Négociation commerciale", notions: [],
        etapas: [ { titre: "Sesión 1", sousTitre: "", ressources: [ { type: "fiche", titre: "Support de cours", lien: "" } ] } ] }
    ]
  }
];
