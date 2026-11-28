/* =====================================================================
   📝 CONTENU DU SITE — c'est le SEUL fichier à modifier pour ajouter
   une séquence, une étapa, un document ou une vidéo.
   Règles : garder les guillemets "…", une virgule après chaque bloc,
   et les crochets [ ] / accolades { } bien fermés.
   ===================================================================== */

var SITE = {
  titre: "¡Español con el profe!",
  sousTitre: "Clases del Sr. Villarroel",
  // Laisser "" pour cacher un bouton
  liens: {
    ecoledirecte: "https://www.ecoledirecte.com",
    youtube: "https://www.youtube.com/@Señor_Villarroel",          // lien de votre chaîne YouTube
    drive: "",            // lien d'un dossier Google Drive partagé
    kahoot: ""            // lien de votre page Kahoot
  },
  // Empreinte du code professeur (ouvre tous les niveaux).
  // Pour la changer : ouvrir changer-code.html.
  codeProf: "6dbe00cf06c8affce8c398eae3a5ad7bce9d2d7d320b642c73172532f58f624e"
};

/* ---------------------------------------------------------------------
   🧩 ESPACE PUBLIC — vidéos de grammaire (ouvert à tous, sans code)
   youtube : l'adresse de la vidéo (ex. "https://youtu.be/abc123") ou "" si pas encore prête
   niveaux : "5", "4", "1", "0" (Terminale), "B" (Bachelor)
   fiche : lien d'un PDF de résumé (facultatif)
   --------------------------------------------------------------------- */
var GRAMMAIRE = [
  { id: "presente", emoji: "⏰", titre: "El presente de indicativo", sousTitre: "Le présent", niveaux: ["5", "4"],
    videos: [{ titre: "Le présent des verbes réguliers (-AR, -ER, -IR)", youtube: "https://youtu.be/PausaCYhVwM" }], fiche: "" },
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
    code: "761b6f9abfc68d5fba2894b0ee4ba67842f9ed241240edbf16a271875cd1ed26",
    sequences: [
      { id: "5-S1", emoji: "👋", titre: "Séquence 1", sousTitre: "Titre à compléter", notions: ["presente"],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Vocabulaire", ressources: [
            { type: "fiche", titre: "Fiche de l'étapa", lien: "" },
            { type: "flashcards", titre: "Flashcards du vocabulaire", lien: "" }
          ]}
        ]},
      { id: "5-S2", emoji: "2️⃣", titre: "Séquence 2", sousTitre: "¡Así soy yo, así eres tú!", notions: [],
        etapas: [
          { titre: "Etapa 1", sousTitre: "CE-EE", ressources: [ ]},
          { titre: "Etapa 2", sousTitre: "CE-EO", ressources: [ ]},
          { titre: "Etapa 3", sousTitre: "CO", ressources: [ ]},
          { titre: "Etapa 4", sousTitre: "Conversación – EO", ressources: [ ]},
          { titre: "Etapa 5", sousTitre: "Evaluación 1 – EO individual", ressources: [ ]},
          { titre: "Etapa 6", sousTitre: "EE", ressources: [ ]},
          { titre: "Etapa 7", sousTitre: "EO", ressources: [ ]},
          { titre: "Etapa 8", sousTitre: "Evaluación 2 – Proyecto", ressources: [
            { type: "jeu", emoji: "🏠", titre: "Repaso — vocabulario y gramática para el proyecto", lien: "docs/5-Cinquieme/5-S2/5e_Etapa8_Repaso(révision).html" },
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire de toute la séquence", lien: "docs/5-Cinquieme/5-S2/5e_S2_Vocabulario_Flashcards.html" }
          ]}
        ]},
      { id: "5-S3", emoji: "3️⃣", titre: "Séquence 3", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "5-S4", emoji: "4️⃣", titre: "Séquence 4", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "5-S5", emoji: "5️⃣", titre: "Séquence 5", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "5-S6", emoji: "6️⃣", titre: "Séquence 6", sousTitre: "Titre à compléter", notions: [], etapas: [] }
    ]
  },
  {
    id: "4", dossier: "4-Quatrieme", nom: "4ème", emoji: "🚀", couleur: "#E63946",
    code: "23c97f3cbbddadf84b693fd87eaa8b9cc9fcb611c4f7907b65165aa0d8ae5081",
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
        ]},
      { id: "4-S2", emoji: "2️⃣", titre: "Séquence 2", sousTitre: "Titre à compléter", notions: [],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Découverte du vocabulaire", ressources: [
            { type: "fiche", titre: "Fiche de l'étapa 1", lien: "" },
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
        ]},
      { id: "4-S3", emoji: "🏃", titre: "Séquence 3", sousTitre: "¡Moviéndonos!", notions: [],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Le tableau de Laura Vidra", ressources: [
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire", lien: "docs/4-Quatrieme/4-S3/E1-flashcards-vocabulaire.html" },
            { type: "flashcards", titre: "Flashcards sonores — grammaire (estar + gérondif)", lien: "docs/4-Quatrieme/4-S3/E1-flashcards-grammaire.html" }
          ]},
          { titre: "Etapa 2", sousTitre: "La vidéo « Estar + gerundio »", ressources: [
            { type: "co", titre: "Vidéo — Estar + gerundio (regulares)", lien: "docs/4-Quatrieme/4-S3/Estar%20%2B%20gerundio%20(regulares).%20Nivel%20A2.mp4" },
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire", lien: "docs/4-Quatrieme/4-S3/E2-flashcards-vocabulaire.html" },
            { type: "flashcards", titre: "Flashcards sonores — grammaire (está / están + gérondif)", lien: "docs/4-Quatrieme/4-S3/E2-flashcards-grammaire.html" }
          ]},
          { titre: "Etapa 3", sousTitre: "", ressources: [
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire", lien: "docs/4-Quatrieme/4-S3/4-S3-E3_Flashcards_vocabulaire.html" },
            { type: "flashcards", titre: "Flashcards sonores — grammaire", lien: "docs/4-Quatrieme/4-S3/4-S3-E3_Flashcards_grammaire.html" }
          ]}
        ]},
      { id: "4-S4", emoji: "4️⃣", titre: "Séquence 4", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "4-S5", emoji: "5️⃣", titre: "Séquence 5", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "4-S6", emoji: "6️⃣", titre: "Séquence 6", sousTitre: "Titre à compléter", notions: [], etapas: [] }
    ]
  },
  {
    id: "1", dossier: "1-Premiere", nom: "1ère", emoji: "🎓", couleur: "#2A9D8F",
    code: "0ef7e5043d737499ff9ea8e0075a44784f53ff438cda37a24256c3457d8a5318",
    sequences: [
      { id: "1-S1", emoji: "📘", titre: "Séquence 1", sousTitre: "Titre à compléter", notions: [],
        etapas: [ { titre: "Etapa 1", sousTitre: "", ressources: [ { type: "fiche", titre: "Fiche de l'étapa", lien: "" } ] } ] },
      { id: "1-S2", emoji: "2️⃣", titre: "Séquence 2", sousTitre: "El arte, ¿instrumento de poder o contrapoder?", notions: ["preterito"],
        etapas: [
          { titre: "Etapa 1", sousTitre: "CE-EE", ressources: [ ]},
          { titre: "Etapa 2", sousTitre: "CE-EE", ressources: [ ]},
          { titre: "Etapa 3", sousTitre: "CO", ressources: [ ]},
          { titre: "Etapa 4", sousTitre: "Conversación – EO", ressources: [ ]},
          { titre: "Etapa 5", sousTitre: "Evaluación 1 – EE", ressources: [ ]},
          { titre: "Etapa 6", sousTitre: "CE", ressources: [ ]},
          { titre: "Etapa 7", sousTitre: "CE-EO", ressources: [
            { type: "kahoot", titre: "Kahoot — Víctor Jara, la voz que no pudieron callar (jusqu'au 19/12)", lien: "https://kahoot.it/challenge/03210287?challenge-id=9d16cdf7-6170-47f4-863f-ed9e6700d129_1795800192170" },
            { type: "kahoot", titre: "Kahoot — Vocabulario y gramática (Víctor Jara) (jusqu'au 19/12)", lien: "https://kahoot.it/challenge/07820426?challenge-id=9d16cdf7-6170-47f4-863f-ed9e6700d129_1795800225138" }
          ]},
          { titre: "Etapa 8", sousTitre: "Evaluación 2 – Proyecto", ressources: [
            { type: "grammaire", emoji: "🏠", titre: "Entrenamiento de gramática — indefinido, perfecto y conectores", lien: "docs/1-Premiere/1-S2/1e_S2_Entrenamiento_gramatica.html" },
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire de toute la séquence", lien: "docs/1-Premiere/1-S2/1e_S2_Flashcards_Vocabulario.html" }
          ]}
        ]},
      { id: "1-S3", emoji: "3️⃣", titre: "Séquence 3", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "1-S4", emoji: "4️⃣", titre: "Séquence 4", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "1-S5", emoji: "5️⃣", titre: "Séquence 5", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "1-S6", emoji: "6️⃣", titre: "Séquence 6", sousTitre: "Titre à compléter", notions: [], etapas: [] }
    ]
  },
  {
    id: "0", dossier: "0-Terminale", nom: "Terminale", emoji: "🏅", couleur: "#6A4C93",
    code: "b56241358f9b0470942bff4a226a9d84f958f458302f8f7f2c2277d5dcfbddbf",
    sequences: [
      { id: "T-S1", emoji: "📗", titre: "Séquence 1", sousTitre: "Titre à compléter", notions: [],
        etapas: [ { titre: "Etapa 1", sousTitre: "", ressources: [ { type: "fiche", titre: "Fiche de l'étapa", lien: "" } ] } ] },
      { id: "T-S2", emoji: "2️⃣", titre: "Séquence 2", sousTitre: "Titre à compléter", notions: [],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Découverte du vocabulaire", ressources: [
            { type: "fiche", titre: "Fiche de l'étapa 1", lien: "" },
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
        ]},
      { id: "T-S3", emoji: "🎨", titre: "Séquence 3", sousTitre: "El arte, ¿poder o contrapoder?", notions: [],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Las Meninas y Equipo Crónica", ressources: [
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire", lien: "docs/0-Terminale/T-S3/Flashcards_T-S3_Etapa1_vocabulario.html" },
            { type: "jeu", emoji: "🏠", titre: "Entrenamiento en casa — grammaire, vocabulaire et phrases", lien: "docs/0-Terminale/T-S3/T_Etapa1_Entrenamiento_casa.html" },
            { type: "kahoot", titre: "Kahoot — Las Meninas y Equipo Crónica (jusqu'au 19/12)", lien: "https://kahoot.it/challenge/09490586?challenge-id=9d16cdf7-6170-47f4-863f-ed9e6700d129_1795799858890" },
            { type: "kahoot", titre: "Kahoot — Arte y poder: gramática (jusqu'au 19/12)", lien: "https://kahoot.it/challenge/09740849?challenge-id=9d16cdf7-6170-47f4-863f-ed9e6700d129_1795800147351" }
          ]},
          { titre: "Etapa 2", sousTitre: "El muralismo mexicano", ressources: [
            { type: "co", titre: "Vidéo — El muralismo mexicano", lien: "docs/0-Terminale/T-S3/El%20muralismo%20mexicano.mp4" },
            { type: "flashcards", titre: "Flashcards sonores — vocabulaire", lien: "docs/0-Terminale/T-S3/Flashcards_T-S3_Etapa2_vocabulario.html" },
            { type: "flashcards", titre: "Flashcards sonores — grammaire", lien: "docs/0-Terminale/T-S3/Flashcards_T-S3_gramatica.html" },
            { type: "kahoot", titre: "Kahoot — El muralismo mexicano (jusqu'au 19/12)", lien: "https://kahoot.it/challenge/06892810?challenge-id=9d16cdf7-6170-47f4-863f-ed9e6700d129_1795867696881" }
          ]}
        ]},
      { id: "T-S4", emoji: "4️⃣", titre: "Séquence 4", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "T-S5", emoji: "5️⃣", titre: "Séquence 5", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "T-S6", emoji: "6️⃣", titre: "Séquence 6", sousTitre: "Titre à compléter", notions: [], etapas: [] }
    ]
  },
  {
    id: "B", dossier: "Bachelor", nom: "Bachelor", emoji: "💼", couleur: "#1D3557",
    code: "b77de3c8f3aa60df68747cbba94ab1854019a33f1577eaf326b051705116c1af",
    sequences: [
      { id: "B-S1", emoji: "🤝", titre: "Module 1", sousTitre: "Négociation commerciale", notions: [],
        etapas: [ { titre: "Sesión 1", sousTitre: "", ressources: [ { type: "fiche", titre: "Support de cours", lien: "" } ] } ] },
      { id: "B-S2", emoji: "2️⃣", titre: "Module 2", sousTitre: "Titre à compléter", notions: [],
        etapas: [
          { titre: "Etapa 1", sousTitre: "Découverte du vocabulaire", ressources: [
            { type: "fiche", titre: "Fiche de l'étapa 1", lien: "" },
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
        ]},
      { id: "B-S3", emoji: "3️⃣", titre: "Module 3", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "B-S4", emoji: "4️⃣", titre: "Module 4", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "B-S5", emoji: "5️⃣", titre: "Module 5", sousTitre: "Titre à compléter", notions: [], etapas: [] },
      { id: "B-S6", emoji: "6️⃣", titre: "Module 6", sousTitre: "Titre à compléter", notions: [], etapas: [] }
    ]
  },
  {
    id: "P", prof: true, dossier: "Prof", nom: "Mes fiches interactives", sousTitre: "Fiches de classe à projeter", emoji: "🧑‍🏫", couleur: "#6D597A",
    code: "",
    sequences: [
      { id: "P-5", emoji: "🌱", titre: "5ème", sousTitre: "Fiches interactives", notions: [], etapas: [] },
      { id: "P-4", emoji: "🚀", titre: "4ème", sousTitre: "Fiches interactives", notions: [], etapas: [] },
      { id: "P-1", emoji: "🎓", titre: "1ère", sousTitre: "Fiches interactives", notions: [], etapas: [] },
      { id: "P-T", emoji: "🏅", titre: "Terminale", sousTitre: "Fiches interactives", notions: [], etapas: [] },
      { id: "P-B", emoji: "💼", titre: "Bachelor", sousTitre: "Fiches interactives", notions: [], etapas: [] }
    ]
  }
];
