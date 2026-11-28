/* Fonctionnement du site — pas besoin de modifier ce fichier.
   Tout le contenu se trouve dans contenu.js */
(function () {
  "use strict";

  var TYPES = {
    fiche:       { emoji: "📄", nom: "Fiche" },
    vocabulaire: { emoji: "📚", nom: "Vocabulaire" },
    grammaire:   { emoji: "🧩", nom: "Grammaire" },
    video:       { emoji: "🎬", nom: "Vidéo" },
    co:          { emoji: "🎧", nom: "Compréhension orale" },
    projet:      { emoji: "🏆", nom: "Projet final" },
    flashcards:  { emoji: "🃏", nom: "Flashcards sonores" },
    jeu:         { emoji: "🎮", nom: "Jeu" },
    kahoot:      { emoji: "🟣", nom: "Kahoot" },
    evaluation:  { emoji: "📝", nom: "Évaluation" },
    lien:        { emoji: "🔗", nom: "Lien" }
  };
  var CLE = "profe-espagnol-acces";
  var app = document.getElementById("app");
  var fil = document.getElementById("fil");

  /* ---------- Petits outils ---------- */
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function trouver(liste, id) { for (var i = 0; i < liste.length; i++) if (String(liste[i].id) === String(id)) return liste[i]; return null; }
  function niveauNom(id) { var n = trouver(NIVEAUX, id); return n ? n.nom : id; }
  function idYoutube(url) {
    if (!url) return "";
    url = String(url).trim();
    if (/^[\w-]{11}$/.test(url)) return url;
    var m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/);
    return m ? m[1] : "";
  }
  function estExterne(lien) { return /^https?:\/\//i.test(lien); }

  /* ---------- Accès par code (mémorisé sur l'appareil) ---------- */
  var memoire = [];
  function lireAcces() {
    try { var v = localStorage.getItem(CLE); if (v) return JSON.parse(v); } catch (e) {}
    return memoire;
  }
  function ecrireAcces(liste) {
    memoire = liste;
    try { localStorage.setItem(CLE, JSON.stringify(liste)); } catch (e) {}
    majDeconnexion();
  }
  function estOuvert(nivId) {
    var a = lireAcces();
    return a.indexOf("PROF") >= 0 || a.indexOf(nivId) >= 0;
  }
  function majDeconnexion() {
    document.getElementById("btn-deconnexion").hidden = lireAcces().length === 0;
  }
  document.getElementById("btn-deconnexion").onclick = function () {
    ecrireAcces([]);
    location.hash = "#/";
    afficher();
  };

  /* ---------- Fil d'Ariane ---------- */
  function poserFil(etapes) {
    if (!etapes.length) { fil.innerHTML = ""; return; }
    var h = '<a href="#/">🏠 Accueil</a>';
    etapes.forEach(function (e, i) {
      h += '<span class="sep">›</span>';
      h += (i < etapes.length - 1) ? '<a href="' + e[1] + '">' + esc(e[0]) + "</a>" : "<span>" + esc(e[0]) + "</span>";
    });
    fil.innerHTML = h;
  }

  /* ---------- Morceaux d'affichage ---------- */
  function tuile(lien, emoji, titre, sous, couleur, badge, grande) {
    return '<a class="tuile' + (grande ? " grande" : "") + '" href="' + lien + '" style="--c:' + (couleur || "var(--jaune)") + '">' +
      '<span class="emoji">' + emoji + "</span>" +
      '<span class="titre">' + esc(titre) + "</span>" +
      (sous ? '<span class="sous">' + esc(sous) + "</span>" : "") +
      (badge ? '<span class="badge">' + badge + "</span>" : "") + "</a>";
  }
  function blocVideo(titre, url, emoji, nomType, couleur) {
    var id = idYoutube(url);
    var entete = '<div class="entete-res"><span class="emoji" style="font-size:2rem">' + emoji + '</span><div><div class="titre" style="font-weight:800">' +
      esc(titre) + '</div><div class="type" style="color:var(--doux);font-size:.85rem">' + nomType + "</div></div></div>";
    if (!id) {
      return '<div class="ressource inactive"><span class="emoji">' + emoji + '</span><div><div class="titre">' + esc(titre) +
        '</div><div class="type">' + nomType + " · bientôt disponible ⏳</div></div></div>";
    }
    return '<div class="ressource-video" style="--c:' + couleur + '">' + entete +
      '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + id + '?rel=0&playsinline=1" title="' + esc(titre) +
      '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div></div>';
  }
  function ressource(r, couleur) {
    var t = TYPES[r.type] || TYPES.lien;
    var emoji = r.emoji || t.emoji;
    if ((r.type === "video" || r.type === "co") && idYoutube(r.lien)) return blocVideo(r.titre, r.lien, emoji, t.nom, couleur);
    if (!r.lien) {
      return '<div class="ressource inactive"><span class="emoji">' + emoji + '</span><div><div class="titre">' + esc(r.titre) +
        '</div><div class="type">' + t.nom + " · bientôt disponible ⏳</div></div></div>";
    }
    return '<a class="ressource" style="--c:' + couleur + '" href="' + esc(encodeURI(r.lien).replace(/%25/g, "%")) + '" target="_blank" rel="noopener">' +
      '<span class="emoji">' + emoji + '</span><div><div class="titre">' + esc(r.titre) + '</div><div class="type">' + t.nom + "</div></div>" +
      '<span class="fleche">↗</span></a>';
  }

  /* ---------- Pages ---------- */
  function pageAccueil() {
    poserFil([]);
    var h = '<div class="bandeau"><span class="gros">👋</span><div><h1>¡Bienvenidos!</h1>' +
      '<p class="intro">Ici, tu retrouves tous les cours d\'espagnol : les vidéos de grammaire pour tout le monde, et l\'espace de ta classe avec ton code.</p></div></div>';
    h += "<h2>🌍 Espace public</h2>";
    h += '<div class="grille">' + tuile("#/grammaire", "🎬", "Vidéos de grammaire", GRAMMAIRE.length + " notions expliquées", "var(--jaune)", "Ouvert à tous", true) + "</div>";
    h += "<h2>🔒 Mon niveau</h2><p class='intro'>Choisis ton niveau puis tape le code donné par ton professeur.</p>";
    h += '<div class="grille">';
    NIVEAUX.forEach(function (n) {
      h += tuile("#/niveau/" + n.id, n.emoji, n.nom, n.sequences.length + " séquence" + (n.sequences.length > 1 ? "s" : ""), n.couleur,
        estOuvert(n.id) ? "🔓 Ouvert" : "🔒 Avec code", true);
    });
    h += "</div>";
    app.innerHTML = h;
  }

  var filtreNiveau = "tous", texteRecherche = "";
  function pageGrammaire() {
    poserFil([["🎬 Vidéos de grammaire", "#/grammaire"]]);
    var h = '<div class="titre-page"><span class="gros">🎬</span><div><h1>Vidéos de grammaire</h1><p>Une vidéo par notion, pour revoir le cours quand tu veux.</p></div></div>';
    h += '<div class="filtres" id="filtres"><button class="puce" data-n="tous">Toutes</button>';
    NIVEAUX.forEach(function (n) { h += '<button class="puce" data-n="' + n.id + '">' + n.emoji + " " + esc(n.nom) + "</button>"; });
    h += '<input class="recherche" id="recherche" type="search" placeholder="🔎 Chercher une notion…" autocomplete="off" autocapitalize="off"></div>';
    h += '<div class="grille" id="liste-notions"></div>';
    app.innerHTML = h;
    var champ = document.getElementById("recherche");
    champ.value = texteRecherche;
    champ.oninput = function () { texteRecherche = champ.value; remplirNotions(); };
    Array.prototype.forEach.call(document.querySelectorAll("#filtres .puce"), function (b) {
      b.onclick = function () { filtreNiveau = b.getAttribute("data-n"); remplirNotions(); };
    });
    remplirNotions();
  }
  function sansAccents(t) { return String(t).toLowerCase().normalize ? String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "") : String(t).toLowerCase(); }
  function remplirNotions() {
    Array.prototype.forEach.call(document.querySelectorAll("#filtres .puce"), function (b) {
      b.classList.toggle("active", b.getAttribute("data-n") === filtreNiveau);
    });
    var q = sansAccents(texteRecherche.trim());
    var liste = GRAMMAIRE.filter(function (g) {
      if (filtreNiveau !== "tous" && (g.niveaux || []).indexOf(filtreNiveau) < 0) return false;
      return !q || sansAccents(g.titre + " " + (g.sousTitre || "")).indexOf(q) >= 0;
    });
    var h = "";
    liste.forEach(function (g) {
      var pretes = (g.videos || []).filter(function (v) { return idYoutube(v.youtube); }).length;
      h += tuile("#/grammaire/" + g.id, g.emoji, g.titre, g.sousTitre, "var(--jaune)",
        (g.niveaux || []).map(niveauNom).join(" · ") + (pretes ? "" : " · ⏳"));
    });
    document.getElementById("liste-notions").innerHTML = h || '<p class="vide">Aucune notion trouvée.</p>';
  }

  function pageNotion(id) {
    var g = trouver(GRAMMAIRE, id);
    if (!g) return pageIntrouvable();
    poserFil([["🎬 Vidéos de grammaire", "#/grammaire"], [g.titre, ""]]);
    var h = '<div class="titre-page"><span class="gros">' + g.emoji + "</span><div><h1>" + esc(g.titre) + "</h1><p>" + esc(g.sousTitre || "") +
      " · " + (g.niveaux || []).map(niveauNom).join(" · ") + "</p></div></div>";
    h += '<div class="ressources">';
    (g.videos || []).forEach(function (v) { h += blocVideo(v.titre, v.youtube, "🎬", "Vidéo", "var(--jaune)"); });
    if (g.fiche) h += ressource({ type: "fiche", titre: "Fiche résumé", lien: g.fiche }, "var(--jaune)");
    h += "</div>";
    app.innerHTML = h;
  }

  function pageCadenas(n) {
    poserFil([[n.emoji + " " + n.nom, ""]]);
    app.innerHTML = '<form class="cadenas" id="form-code" style="--c:' + n.couleur + '" autocomplete="off">' +
      '<div class="gros">🔒</div><h1>' + n.emoji + " " + esc(n.nom) + "</h1>" +
      "<p>Tape le code donné par ton professeur.</p>" +
      '<input id="champ-code" type="text" inputmode="text" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Code" aria-label="Code d\'accès">' +
      '<button class="btn" type="submit">Entrer 🚪</button><div class="erreur" id="erreur"></div></form>';
    var champ = document.getElementById("champ-code");
    try { champ.focus(); } catch (e) {}
    document.getElementById("form-code").onsubmit = function (ev) {
      ev.preventDefault();
      var emp = empreinteCode(champ.value);
      var acces = lireAcces();
      if (emp && emp === SITE.codeProf) {
        if (acces.indexOf("PROF") < 0) acces.push("PROF");
        ecrireAcces(acces); afficher();
      } else if (emp && emp === n.code) {
        if (acces.indexOf(n.id) < 0) acces.push(n.id);
        ecrireAcces(acces); afficher();
      } else {
        var f = document.getElementById("form-code");
        document.getElementById("erreur").textContent = "❌ Ce n'est pas le bon code. ¡Inténtalo otra vez!";
        f.classList.remove("secoue"); void f.offsetWidth; f.classList.add("secoue");
        champ.select();
      }
    };
  }

  function pageNiveau(n) {
    poserFil([[n.emoji + " " + n.nom, ""]]);
    var h = '<div class="titre-page"><span class="gros">' + n.emoji + "</span><div><h1>Espagnol — " + esc(n.nom) + "</h1><p>Choisis ta séquence.</p></div></div>";
    h += '<div class="grille">';
    n.sequences.forEach(function (s) {
      h += tuile("#/niveau/" + n.id + "/" + s.id, s.emoji || "📘", s.titre, s.sousTitre, n.couleur, (s.etapas.length ? s.etapas.length + " étapa" + (s.etapas.length > 1 ? "s" : "") : "⏳ Bientôt"), true);
    });
    h += "</div>";
    if (!n.sequences.length) h += '<p class="vide">Les séquences arrivent bientôt.</p>';
    var notions = GRAMMAIRE.filter(function (g) { return (g.niveaux || []).indexOf(n.id) >= 0; });
    if (notions.length) {
      h += "<h2>🎬 Grammaire de mon niveau</h2><div class='grille'>";
      notions.forEach(function (g) { h += tuile("#/grammaire/" + g.id, g.emoji, g.titre, g.sousTitre, "var(--jaune)"); });
      h += "</div>";
    }
    app.innerHTML = h;
  }

  function pageSequence(n, s) {
    poserFil([[n.emoji + " " + n.nom, "#/niveau/" + n.id], [s.titre, ""]]);
    var h = '<div class="titre-page"><span class="gros">' + (s.emoji || "📘") + "</span><div><h1>" + esc(s.titre) + "</h1><p>" + esc(s.sousTitre || "") + "</p></div></div>";
    h += '<div class="etapas">';
    s.etapas.forEach(function (e, i) {
      var num = e.emoji || (/\d+/.test(e.titre) ? e.titre.match(/\d+/)[0] : i + 1);
      h += '<a class="etapa" style="--c:' + n.couleur + '" href="#/niveau/' + n.id + "/" + s.id + "/" + (i + 1) + '">' +
        '<span class="num">' + num + "</span><div><div class='titre'>" + esc(e.titre) + "</div>" +
        (e.sousTitre ? "<div class='sous'>" + esc(e.sousTitre) + "</div>" : "") + "</div>" +
        '<span class="nb">' + (e.ressources || []).map(function (r) { return (TYPES[r.type] || TYPES.lien).emoji; }).join(" ") + "</span></a>";
    });
    h += "</div>";
    if (!s.etapas.length) h += '<p class="vide">⏳ Les étapas de cette séquence arrivent bientôt.</p>';
    var notions = (s.notions || []).map(function (id) { return trouver(GRAMMAIRE, id); }).filter(Boolean);
    if (notions.length) {
      h += "<h2>🎬 Grammaire de la séquence</h2><div class='grille'>";
      notions.forEach(function (g) { h += tuile("#/grammaire/" + g.id, g.emoji, g.titre, g.sousTitre, "var(--jaune)"); });
      h += "</div>";
    }
    app.innerHTML = h;
  }

  function pageEtapa(n, s, idx) {
    var e = s.etapas[idx - 1];
    if (!e) return pageIntrouvable();
    poserFil([[n.emoji + " " + n.nom, "#/niveau/" + n.id], [s.titre, "#/niveau/" + n.id + "/" + s.id], [e.titre, ""]]);
    var h = '<div class="titre-page"><span class="gros">' + (e.emoji || "📍") + "</span><div><h1>" + esc(e.titre) + "</h1><p>" +
      esc(s.titre) + (e.sousTitre ? " · " + esc(e.sousTitre) : "") + "</p></div></div>";
    h += '<div class="ressources">';
    (e.ressources || []).forEach(function (r) { h += ressource(r, n.couleur); });
    if (!(e.ressources || []).length) h += '<p class="vide">Rien pour l\'instant.</p>';
    h += "</div>";
    // Boutons précédent / suivant
    h += '<div style="display:flex;justify-content:space-between;gap:10px;margin-top:22px;flex-wrap:wrap">';
    h += idx > 1 ? '<a class="btn" style="--c:' + n.couleur + ';text-decoration:none" href="#/niveau/' + n.id + "/" + s.id + "/" + (idx - 1) + '">← ' + esc(s.etapas[idx - 2].titre) + "</a>" : "<span></span>";
    h += idx < s.etapas.length ? '<a class="btn" style="--c:' + n.couleur + ';text-decoration:none" href="#/niveau/' + n.id + "/" + s.id + "/" + (idx + 1) + '">' + esc(s.etapas[idx].titre) + " →</a>" : "";
    h += "</div>";
    app.innerHTML = h;
  }

  function pageIntrouvable() {
    poserFil([["Page introuvable", ""]]);
    app.innerHTML = '<div class="cadenas"><div class="gros">🤷</div><h1>¡Ups!</h1><p>Cette page n\'existe pas (ou plus).</p><a class="btn" style="text-decoration:none" href="#/">Retour à l\'accueil</a></div>';
  }

  /* ---------- Aiguillage ---------- */
  function afficher() {
    var morceaux = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean).map(decodeURIComponent);
    window.scrollTo(0, 0);
    if (!morceaux.length) return pageAccueil();
    if (morceaux[0] === "grammaire") return morceaux[1] ? pageNotion(morceaux[1]) : pageGrammaire();
    if (morceaux[0] === "niveau") {
      var n = trouver(NIVEAUX, morceaux[1]);
      if (!n) return pageIntrouvable();
      if (!estOuvert(n.id)) return pageCadenas(n);
      if (!morceaux[2]) return pageNiveau(n);
      var s = trouver(n.sequences, morceaux[2]);
      if (!s) return pageIntrouvable();
      if (!morceaux[3]) return pageSequence(n, s);
      return pageEtapa(n, s, parseInt(morceaux[3], 10));
    }
    pageIntrouvable();
  }

  /* ---------- Démarrage ---------- */
  document.getElementById("site-titre").textContent = SITE.titre;
  document.getElementById("site-sous").textContent = SITE.sousTitre;
  document.title = SITE.titre;
  var L = SITE.liens || {}, ext = "";
  if (L.ecoledirecte) ext += '<a href="' + esc(L.ecoledirecte) + '" target="_blank" rel="noopener">🏫 EcoleDirecte</a>';
  if (L.youtube) ext += '<a href="' + esc(L.youtube) + '" target="_blank" rel="noopener">▶️ YouTube</a>';
  if (L.drive) ext += '<a href="' + esc(L.drive) + '" target="_blank" rel="noopener">📁 Drive</a>';
  if (L.kahoot) ext += '<a href="' + esc(L.kahoot) + '" target="_blank" rel="noopener">🟣 Kahoot</a>';
  document.getElementById("liens-externes").innerHTML = ext;
  majDeconnexion();
  window.addEventListener("hashchange", function () {
    afficher();
    // Compte aussi chaque page consultée dans le site (niveau, séquence, étapa…)
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: location.pathname + location.hash, title: document.title + " — " + (document.querySelector("h1") || {}).textContent }); } catch (e) {}
  });
  afficher();
})();

/* Drapeaux : nom du pays au survol (ou au toucher sur iPad / téléphone) — bandera-nom */
(function () {
  var imgs = document.querySelectorAll(".banderas img");
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i], s = document.createElement("span");
    s.className = "bandera"; s.tabIndex = 0;
    s.setAttribute("data-nom", img.getAttribute("title") || img.getAttribute("alt") || "");
    img.removeAttribute("title");
    img.parentNode.insertBefore(s, img); s.appendChild(img);
  }
})();
