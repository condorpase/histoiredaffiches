// Photos recadrées (dossier images/, une par n° eBay)
const IMG = p => `images/${p.id}.jpg`;

// Affiche à la une
const HERO_ID = "900037920044"; // Saint-Malo – Dinard, vers 1897
// Ordre de la « Sélection » : ces pièces d'abord, puis le reste par prix décroissant
const SELECTION = [
  "900037920044", "296940042769", "900078221907", "900078173766", "298574617952", "296749099071",
  "295073137870", "296019425123", "295320546442", "298574611854", "298574619499", "298709319550"
];

// Langue : ?lang=en dans l'adresse, sinon choix mémorisé, sinon langue du navigateur
function initialLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "fr" || q === "en") return q;
  try { const s = localStorage.getItem("lang"); if (s === "fr" || s === "en") return s; } catch (e) {}
  return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
}
let lang = initialLang();
const t = k => UI[lang][k];
const typo = s => s.replace(/'/g, "’");
const EUR = n => new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
const EBAY = id => `https://www.ebay.${lang === "fr" ? "fr" : "com"}/itm/${id}`;

const POSTERS = CATALOGUE.map(([id, titre, artiste, annee, categorie, prix, img, entoilee]) => {
  const a = ARTISTES[artiste];
  return { id, titreFr: typo(titre), titreEn: typo(titreEN(titre)), cle: artiste, artiste: a ? a.nom : "",
           annee, categorie, prix, img, entoilee };
});
const L = {
  titre: p => lang === "fr" ? p.titreFr : p.titreEn,
  annee: p => lang === "fr" ? p.annee : anneeEN(p.annee),
  cat: c => lang === "fr" ? c : (CATEGORIES_EN[c] || c),
  bio: p => { const a = ARTISTES[p.cle]; if (!a) return ""; return lang === "fr" ? typo(a.bio) : (ARTISTES_EN[p.cle] || ""); },
  theme: c => lang === "fr" ? typo(THEMES[c]) : THEMES_EN[c],
  entoilage: () => lang === "fr" ? typo(ENTOILAGE) : ENTOILAGE_EN
};
const year = p => parseInt((p.annee.match(/\d{4}/) || [])[0]) || 9999;
const story = p => [L.bio(p) || L.theme(p.categorie), p.entoilee ? L.entoilage() : ""].filter(Boolean);
const metaLine = p => [p.artiste, L.annee(p), p.entoilee ? t("entoilee") : ""].filter(Boolean).join(" · ");

// Le sceau (marque d'imprimeur), dessiné en SVG
let sealCount = 0;
function seal(fg) {
  const id = "ring" + sealCount++;
  return `<svg viewBox="0 0 1080 1080" aria-hidden="true">
    <defs><path id="${id}" d="M540,540 m-452,0 a452,452 0 1,1 904,0 a452,452 0 1,1 -904,0"/></defs>
    <circle cx="540" cy="540" r="505" fill="none" stroke="${fg}" stroke-width="10"/>
    <circle cx="540" cy="540" r="402" fill="none" stroke="${fg}" stroke-width="10"/>
    <text font-family="Bodoni Moda, serif" font-size="50" font-weight="600" fill="${fg}" style="font-variation-settings:'opsz' 6">
      <textPath href="#${id}" textLength="2810" lengthAdjust="spacing">HISTOIRE D’AFFICHES · AFFICHES ANCIENNES ORIGINALES ·</textPath></text>
    <text x="540" y="705" text-anchor="middle" font-family="Bodoni Moda, serif" fill="${fg}" style="font-variation-settings:'opsz' 6">
      <tspan font-size="480" font-weight="700">H</tspan><tspan font-size="200" font-weight="700" font-style="italic" dx="-6">d’A</tspan></text>
  </svg>`;
}
document.querySelectorAll("[data-seal]").forEach(el => {
  el.innerHTML = seal(el.closest(".site-footer") ? "#F4F1EA" : "#1B2840");
});

// Textes fixes de la page
function applyStatic() {
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').content = t("meta.desc");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); el.setAttribute("aria-label", t(el.dataset.i18nPh)); });
  document.getElementById("v-prev").setAttribute("aria-label", t("prev"));
  document.getElementById("v-next").setAttribute("aria-label", t("next"));
  document.getElementById("store-link").href = `https://www.ebay.${lang === "fr" ? "fr" : "com"}/str/histoiredaffiches`;
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
}

// Affiche à la une
const hero = POSTERS.find(p => p.id === HERO_ID) || [...POSTERS].sort((a, b) => b.prix - a.prix)[0];
function renderHero() {
  const h = document.getElementById("hero");
  const custom = hero.id === HERO_ID;
  h.innerHTML = `
    <div class="hero-text">
      <p class="eyebrow"></p><h1></h1><p class="hero-lede"></p><p class="hero-price"></p>
      <div><button class="btn" type="button"></button></div>
    </div>
    <figure class="hero-figure"><img alt=""></figure>`;
  h.querySelector(".eyebrow").textContent = [L.cat(hero.categorie), L.annee(hero)].filter(Boolean).join(" · ");
  if (custom) h.querySelector("h1").innerHTML = t("hero.title");
  else h.querySelector("h1").textContent = L.titre(hero);
  h.querySelector(".hero-lede").textContent = custom ? t("hero.text") : story(hero)[0];
  h.querySelector(".hero-price").textContent = EUR(hero.prix);
  h.querySelector(".btn").textContent = t("hero.btn");
  const img = h.querySelector("img");
  img.src = IMG(hero);
  img.alt = L.titre(hero);
  h.querySelector(".btn").onclick = () => openPiece(hero, [hero]);
  h.querySelector(".hero-figure").onclick = () => openPiece(hero, [hero]);
}

// Collection
const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const search = document.getElementById("search");
const sort = document.getElementById("sort");
const count = document.getElementById("count");
let current = "Toutes";
let visible = [];

function piece(p) {
  const el = document.createElement("button");
  el.className = "piece";
  el.type = "button";
  el.innerHTML = `<div class="frame"><img loading="lazy" alt=""></div>
    <div class="cap"><span class="artist"></span><span class="title"></span>
    <span class="line"><span class="year"></span><span class="price"></span></span></div>`;
  const img = el.querySelector("img");
  img.src = IMG(p);
  img.alt = L.titre(p);
  el.querySelector(".artist").textContent = p.artiste;
  el.querySelector(".title").textContent = L.titre(p);
  el.querySelector(".year").textContent = [L.annee(p), p.entoilee ? t("entoilee") : ""].filter(Boolean).join(" · ");
  el.querySelector(".price").textContent = EUR(p.prix);
  el.onclick = () => openPiece(p, visible);
  return el;
}

function renderFilters() {
  const cats = ["Toutes", ...new Set(POSTERS.map(p => p.categorie))];
  filters.replaceChildren(...cats.map(c => {
    const b = document.createElement("button");
    b.type = "button";
    const n = c === "Toutes" ? POSTERS.length : POSTERS.filter(p => p.categorie === c).length;
    b.innerHTML = `${c === "Toutes" ? t("all") : L.cat(c)}<sup>${n}</sup>`;
    b.setAttribute("aria-pressed", c === current);
    b.onclick = () => { current = c; renderFilters(); renderGrid(); };
    return b;
  }));
}

function renderGrid() {
  const q = search.value.trim().toLowerCase();
  visible = POSTERS.filter(p =>
    (current === "Toutes" || p.categorie === current) &&
    (!q || `${p.titreFr} ${p.titreEn} ${p.artiste} ${p.annee} ${p.categorie} ${CATEGORIES_EN[p.categorie]}`.toLowerCase().includes(q)));
  const rank = p => { const i = SELECTION.indexOf(p.id); return i < 0 ? 999 : i; };
  if (sort.value === "selection") visible.sort((a, b) => rank(a) - rank(b) || b.prix - a.prix);
  if (sort.value === "prix-asc") visible.sort((a, b) => a.prix - b.prix);
  if (sort.value === "epoque") visible.sort((a, b) => year(a) - year(b));
  if (visible.length) grid.replaceChildren(...visible.map(piece));
  else grid.innerHTML = `<p class="empty">${t("empty")}</p>`;
  count.textContent = t("count")(visible.length);
}

// Fiche affiche
const viewer = document.getElementById("viewer");
let list = [], index = 0;

function show(p) {
  const img = document.getElementById("v-img");
  img.src = IMG(p);
  img.alt = L.titre(p);
  document.getElementById("v-kicker").textContent = L.cat(p.categorie);
  document.getElementById("v-title").textContent = L.titre(p);
  document.getElementById("v-meta").textContent = metaLine(p);
  document.getElementById("v-story").replaceChildren(...story(p).map(s => Object.assign(document.createElement("p"), { textContent: s })));
  document.getElementById("v-price").textContent = EUR(p.prix);
  document.getElementById("v-buy").href = EBAY(p.id);
  const multi = list.length > 1;
  document.getElementById("v-prev").hidden = !multi;
  document.getElementById("v-next").hidden = !multi;
  history.replaceState(null, "", location.pathname + location.search + "#" + p.id);
  viewer.scrollTop = 0;
}
function openPiece(p, from) {
  list = from.length ? from : [p];
  index = Math.max(0, list.indexOf(p));
  show(list[index]);
  if (!viewer.open) viewer.showModal();
  document.body.style.overflow = "hidden";
}
function step(d) { index = (index + d + list.length) % list.length; show(list[index]); }

document.getElementById("v-close").onclick = () => viewer.close();
document.getElementById("v-prev").onclick = () => step(-1);
document.getElementById("v-next").onclick = () => step(1);
viewer.addEventListener("close", () => {
  document.body.style.overflow = "";
  history.replaceState(null, "", location.pathname + location.search);
});
viewer.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// Changement de langue
function render() {
  applyStatic();
  renderHero();
  renderFilters();
  renderGrid();
  if (viewer.open) show(list[index]);
}
document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => {
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  const u = new URL(location.href);
  u.searchParams.set("lang", lang);
  history.replaceState(null, "", u);
  render();
});

search.oninput = renderGrid;
sort.onchange = renderGrid;
render();

// Lien direct vers une affiche : …/?lang=en#295320546442 (pour Instagram et Pinterest)
const direct = POSTERS.find(p => p.id === location.hash.slice(1));
if (direct) openPiece(direct, visible);
