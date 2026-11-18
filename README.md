# 🇪🇸 ¡Español con el profe! — mode d'emploi

Site de cours d'espagnol de M. Villarroel, hébergé gratuitement sur GitHub Pages.

## 📁 Ce qu'il y a dans le dossier

| Fichier | À quoi il sert | À modifier ? |
|---|---|---|
| `contenu.js` | **Tout le contenu** : vidéos de grammaire, niveaux, séquences, étapas, documents | ✅ Oui, c'est le seul |
| `docs/` | Les PDF, flashcards et jeux, rangés par niveau puis par séquence | ✅ On y dépose les fichiers |
| `changer-code.html` | Petit outil pour fabriquer un nouveau code d'accès | Non |
| `index.html`, `app.js`, `style.css`, `sha256.js` | Le fonctionnement et l'apparence du site | Non |

## 🚀 1. Adresse du site

Le site est en ligne à l'adresse **https://daftprof.github.io/sr.villarroel/**
(dépôt GitHub `DaftProf/sr.villarroel`, publié avec GitHub Pages). Chaque modification enregistrée sur GitHub apparaît sur le site 1 à 2 minutes plus tard.

## 📄 2. Ajouter un document (PDF, flashcards, jeu)

1. Sur GitHub, ouvrir le dossier `docs/4-Quatrieme/4-S1/` (par exemple) → **Add file → Upload files** → déposer le PDF.
   Conseil : des noms simples sans accents ni espaces, ex. `E2-fiche-CO.pdf`.
2. Ouvrir `contenu.js` → ✏️ → dans la bonne étapa, écrire le chemin dans `lien` :
   ```js
   { type: "fiche", titre: "Fiche de l'étapa 2", lien: "docs/4-Quatrieme/4-S1/E2-fiche-CO.pdf" },
   ```
3. **Commit changes**. C'est en ligne 1 à 2 minutes plus tard.

Un fichier sur Google Drive ou un Kahoot ? On met simplement l'adresse complète (`https://…`) dans `lien`.

## 🎬 3. Ajouter une vidéo de grammaire YouTube

Dans `contenu.js`, partie `GRAMMAIRE`, coller l'adresse de la vidéo dans `youtube: ""` :
```js
videos: [{ titre: "Le présent des verbes réguliers", youtube: "https://youtu.be/XXXXXXXXXXX" }],
```
Sur YouTube, mettre la vidéo en **Publique** ou **Non répertoriée** (pas « Privée »), sinon elle ne s'affiche pas.
Pour une nouvelle notion, copier un bloc `{ id: "…", … },` entier et le modifier (l'`id` doit être unique, sans espace ni accent).

## ➕ 4. Ajouter une étapa ou une séquence

- **Étapa** : copier un bloc `{ titre: "Etapa 1", … ] },` et le coller juste après, puis changer le titre et les ressources.
- **Séquence** : copier un bloc `{ id: "4-S1", … },` entier ; changer l'`id` (ex. `4-S2`), le titre et les étapas. Créer le dossier `docs/4-Quatrieme/4-S2/`.

⚠️ Après chaque bloc : une **virgule**. Si le site devient tout blanc, c'est presque toujours une virgule ou un guillemet oublié : revenir sur la dernière modification (GitHub garde l'historique).

## 🔑 5. Les codes d'accès

Les codes ne sont **pas écrits** dans ce dépôt (il est public) : seule leur « empreinte » figure dans `contenu.js`. Garder la liste des codes de son côté.

Pour changer un code : ouvrir `https://daftprof.github.io/sr.villarroel/changer-code.html`, taper le nouveau code, copier l'empreinte et la coller dans `contenu.js` (sans écrire le code en clair à côté).
L'appareil retient le code : l'élève ne le tape qu'une fois. Le bouton « 🔒 Verrouiller les niveaux » en bas de page l'efface (utile sur le TBI ou un iPad partagé).

ℹ️ Le code est un portillon, pas un coffre-fort : il empêche d'entrer par hasard, mais avec un dépôt GitHub public, une personne qui fouille le dépôt peut trouver les PDF. Ne rien mettre de confidentiel (notes, corrigés d'évaluation…).

## 📊 6. Voir le nombre de visites

Les visites sont comptées par **GoatCounter** (gratuit, sans cookie, sans publicité).
Tableau de bord : **https://sr-villarroel.goatcounter.com** (se connecter avec le compte GoatCounter).
On y voit le nombre de visiteurs par jour, les pages les plus consultées (niveaux, séquences, étapas), les appareils utilisés (iPad, téléphone, ordinateur).
