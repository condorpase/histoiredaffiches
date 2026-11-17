const IMG = (key, size) => `https://i.ebayimg.com/images/g/${key}/s-l${size}.webp`;
const EBAY = id => `https://www.ebay.fr/itm/${id}`;
const EUR = n => n.toLocaleString("fr-FR") + " €";

const POSTERS = CATALOGUE.map(([id, titre, artiste, annee, categorie, prix, img, entoilee]) => {
  const a = ARTISTES[artiste];
  return { id, titre, artiste: a ? a.nom : "", bio: a ? a.bio : "", annee, categorie, prix, img, entoilee };
});

const grid = document.getElementById("grid");
const featured = document.getElementById("featured");
const filters = document.getElementById("filters");
const search = document.getElementById("search");
const sort = document.getElementById("sort");
const count = document.getElementById("count");
const dlg = document.getElementById("detail");
let current = "Toutes";

function card(p) {
  const el = document.createElement("article");
  el.className = "card";
  el.tabIndex = 0;
  el.innerHTML = `<div class="img"><img loading="lazy"></div><div class="info"><h3></h3><p class="meta"></p><p class="prix"></p></div>`;
  const img = el.querySelector("img");
  img.src = IMG(p.img, 500);
  img.alt = p.titre;
  el.querySelector("h3").textContent = p.titre;
  el.querySelector(".meta").textContent = [p.artiste, p.annee].filter(Boolean).join(" · ");
  el.querySelector(".prix").textContent = EUR(p.prix);
  el.onclick = () => open(p);
  el.onkeydown = e => { if (e.key === "Enter") open(p); };
  return el;
}

function renderFilters() {
  const cats = ["Toutes", ...new Set(POSTERS.map(p => p.categorie))];
  filters.innerHTML = "";
  for (const c of cats) {
    const b = document.createElement("button");
    b.textContent = c;
    b.setAttribute("aria-pressed", c === current);
    b.onclick = () => { current = c; renderFilters(); renderGrid(); };
    filters.appendChild(b);
  }
}

function renderGrid() {
  const q = search.value.trim().toLowerCase();
  let list = POSTERS.filter(p =>
    (current === "Toutes" || p.categorie === current) &&
    (!q || `${p.titre} ${p.artiste} ${p.annee} ${p.categorie}`.toLowerCase().includes(q)));
  const s = sort.value;
  if (s === "prix-desc") list.sort((a, b) => b.prix - a.prix);
  if (s === "prix-asc") list.sort((a, b) => a.prix - b.prix);
  if (s === "annee") list.sort((a, b) => (parseInt(a.annee.match(/\d{4}/)) || 9999) - (parseInt(b.annee.match(/\d{4}/)) || 9999));
  grid.replaceChildren(...list.map(card));
  count.textContent = `${list.length} affiche${list.length > 1 ? "s" : ""}`;
}

function open(p) {
  const img = document.getElementById("d-img");
  img.src = IMG(p.img, 1600);
  img.alt = p.titre;
  document.getElementById("d-cat").textContent = p.categorie;
  document.getElementById("d-titre").textContent = p.titre;
  document.getElementById("d-meta").textContent = [p.artiste, p.annee, p.entoilee ? "entoilée" : ""].filter(Boolean).join(" · ");
  const texte = [p.bio || THEMES[p.categorie], p.entoilee ? ENTOILAGE : ""].filter(Boolean);
  document.getElementById("d-histoire").replaceChildren(...texte.map(t => Object.assign(document.createElement("p"), { textContent: t })));
  document.getElementById("d-prix").textContent = EUR(p.prix);
  document.getElementById("d-ebay").href = EBAY(p.id);
  history.replaceState(null, "", "#" + p.id);
  dlg.showModal();
}
dlg.addEventListener("close", () => history.replaceState(null, "", location.pathname));

featured.replaceChildren(...[...POSTERS].sort((a, b) => b.prix - a.prix).slice(0, 8).map(card));
search.oninput = renderGrid;
sort.onchange = renderGrid;
renderFilters();
renderGrid();

// Lien direct vers une affiche : monsite/#295320546442 (utile pour Instagram et Pinterest)
const direct = POSTERS.find(p => p.id === location.hash.slice(1));
if (direct) open(direct);
