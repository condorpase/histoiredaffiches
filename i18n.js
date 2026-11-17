// Textes du site en français et en anglais.
// Les titres et notices français sont dans posters.js ; les versions anglaises sont ici.

const UI = {
  fr: {
    "meta.title": "Histoire d'Affiches — Affiches anciennes originales",
    "meta.desc": "Affiches anciennes originales : chemins de fer de la Belle Époque, aviation, tourisme, grands affichistes français — Cassandre, Villemot, Savignac, Paul Colin.",
    "wordmark.sub": "Affiches anciennes originales",
    "nav.collection": "Collection", "nav.maison": "La maison", "nav.contact": "Contact",
    "hero.btn": "Découvrir l’affiche",
    "maison.eyebrow": "La maison",
    "maison.statement": "Chemins de fer de la Belle Époque, âge d’or de l’aviation, grands noms de l’affiche française : nous réunissons des affiches originales et racontons leur histoire. Plus de 630 d’entre elles ont déjà trouvé un nouveau mur.",
    "e1.h": "Des originaux", "e1.p": "Chaque pièce est décrite avec précision : époque, artiste, état, entoilage.",
    "e2.h": "L’entoilage", "e2.p": "Nos pièces maîtresses sont montées sur toile de lin, la technique de conservation de référence.",
    "e3.h": "Un achat serein", "e3.p": "Paiement sécurisé et protection acheteur via eBay, emballage soigné, envoi suivi en France et à l’international.",
    "coll.h": "La collection", "search": "Rechercher",
    "sort.selection": "Sélection", "sort.prix": "Prix croissant", "sort.epoque": "Époque",
    "empty": "Aucune affiche ne correspond à cette recherche.",
    "count": n => `${n} pièce${n > 1 ? "s" : ""}`,
    "all": "Toutes",
    "contact.eyebrow": "Contact",
    "contact.p": "Une question sur une affiche, une recherche particulière ?<br>Écrivez-nous depuis notre boutique eBay ou sur Instagram.",
    "store": "Boutique eBay",
    "close": "Fermer", "prev": "Affiche précédente", "next": "Affiche suivante",
    "buy": "Acquérir",
    "note": "La transaction s’effectue sur eBay : paiement sécurisé et protection acheteur.",
    "entoilee": "entoilée",
    "hero.title": "Saint-Malo, Dinard<br><i>&amp; la Côte d’Émeraude</i>",
    "hero.text": "Lithographie originale, vers 1897. À la fin du XIXe siècle, la Compagnie de l’Ouest fait de la Côte d’Émeraude la destination à la mode des bains de mer."
  },
  en: {
    "meta.title": "Histoire d'Affiches — Original vintage posters from France",
    "meta.desc": "Original vintage posters from France: Belle Époque railways, golden-age aviation, travel and the great French poster artists — Cassandre, Villemot, Savignac, Paul Colin.",
    "wordmark.sub": "Original vintage posters",
    "nav.collection": "Collection", "nav.maison": "The house", "nav.contact": "Contact",
    "hero.btn": "Discover the poster",
    "maison.eyebrow": "The house",
    "maison.statement": "Belle Époque railways, the golden age of aviation, the great names of French poster art: we bring together original vintage posters and tell their stories. More than 630 of them have already found a new wall.",
    "e1.h": "Originals only", "e1.p": "Every piece is described with care: period, artist, condition, linen backing.",
    "e2.h": "Linen-backed", "e2.p": "Our finest pieces are mounted on linen, the conservation standard for vintage posters.",
    "e3.h": "Buy with confidence", "e3.p": "Secure payment and buyer protection through eBay, careful packing, tracked shipping across Europe and North America.",
    "coll.h": "The collection", "search": "Search",
    "sort.selection": "Selection", "sort.prix": "Price, low to high", "sort.epoque": "Period",
    "empty": "No poster matches this search.",
    "count": n => `${n} piece${n > 1 ? "s" : ""}`,
    "all": "All",
    "contact.eyebrow": "Contact",
    "contact.p": "A question about a poster, or looking for something specific?<br>Message us through our eBay store or on Instagram.",
    "store": "eBay store",
    "close": "Close", "prev": "Previous poster", "next": "Next poster",
    "buy": "Acquire",
    "note": "The sale is completed on eBay: secure payment and buyer protection.",
    "entoilee": "linen-backed",
    "hero.title": "Saint-Malo, Dinard<br><i>&amp; the Emerald Coast</i>",
    "hero.text": "Original lithograph, c. 1897. At the end of the 19th century, the Western Railway Company made Brittany’s Emerald Coast the fashionable seaside destination."
  }
};

const CATEGORIES_EN = {
  "Chemins de fer": "Railways",
  "Aviation & mer": "Aviation & ocean liners",
  "Tourisme": "Travel",
  "Publicité": "Advertising",
  "Art & culture": "Art & culture",
  "Sécurité SNCF": "SNCF safety"
};

const ARTISTES_EN = {
  cassandre: "Adolphe Mouron, known as Cassandre (1901–1968), is the great master of the Art Deco poster. His Étoile du Nord, Nord Express and Normandie posters — geometric and monumental — brought poster art into the modern age.",
  villemot: "Bernard Villemot (1911–1989) is the poster artist of joie de vivre: bold flat colour, supple shapes, sunshine. His campaigns for Orangina, Perrier and Bally have become classics.",
  savignac: "Raymond Savignac (1907–2002) turned the poster into an art of humour. Ever since his famous Monsavon cow (1949), he summed up every message in a single visual gag.",
  paulcolin: "Paul Colin (1892–1985) rose to fame in 1925 with his poster for La Revue nègre and Josephine Baker. The author of more than a thousand posters, he also trained a whole generation of artists in his school.",
  jeancolin: "Jean Colin (1912–1982) is one of the signatures of the golden age of airline posters: his designs for Air France celebrate the great long-haul routes of the 1950s.",
  excoffon: "Roger Excoffon (1910–1983), the Marseille typographer behind the Mistral and Banco typefaces, created some of the most modern Air France posters of his time.",
  morvan: "Hervé Morvan (1917–1980) designed for Gitanes, Perrier and Banania, and for the cinema. A simple line, frank colours and a keen sense of staging.",
  carlu: "Jean Carlu (1900–1997), co-founder of the Union des artistes modernes, applied the lessons of Cubism to the poster — a major figure of modern graphic design, in France and later in the United States.",
  metlicovitz: "Leopoldo Metlicovitz (1868–1944), the great Italian poster artist of the Ricordi publishing house, celebrated the 1906 opening of the Simplon tunnel between Switzerland and Italy — a landmark of Belle Époque rail travel.",
  dorival: "Géo Dorival (1879–1968) painted Brittany for the early 20th-century railway companies: costumes, coastlines and villages in the service of a new kind of tourism.",
  alo: "Charles-Jean Hallo, known as Alo (1882–1969), painter and poster artist, created many travel posters for the French railway companies between the wars.",
  brenet: "Albert Brenet (1903–2005), official painter to the French Navy, is renowned for his remarkably precise depictions of aircraft, ships and travel.",
  nielsen: "Danish artist Otto Nielsen illustrated SAS destinations in the 1950s, as the Scandinavian airline opened up the world to air travel.",
  jacquelin: "Jean Jacquelin created many post-war travel posters for the SNCF, in a bright, decorative style.",
  georget: "Guy Georget worked extensively for the SNCF and the French National Lottery, with the clear, effective drawing typical of post-war French posters.",
  fore: "Foré signed many SNCF posters in the 1960s and 70s, notably for the Trans Europ Express (TEE), the luxury European trains of the time.",
  morell: "José Morell (1899–1949), a Catalan poster artist, created celebrated travel posters promoting Spain.",
  lequernec: "Alain Le Quernec (born 1944), a Breton poster artist based in Quimper, is influenced by the Polish school. His cultural and political posters are exhibited worldwide.",
  hains: "Raymond Hains (1926–2005), co-founder of Nouveau Réalisme, turned torn posters collected from the street into works of art — a natural bridge between the poster and contemporary art.",
  boisrond: "François Boisrond (born 1959) is a leading figure of the 1980s Figuration libre movement, alongside Robert Combas and Hervé Di Rosa.",
  picartledoux: "Jean Picart Le Doux (1902–1982), poster artist and tapestry designer, took part with Jean Lurçat in the revival of French tapestry.",
  grinsson: "Boris Grinsson (1907–1999) designed hundreds of film posters for French and international releases.",
  dali: "Salvador Dalí lent his surrealist world to advertising, notably for Perrier."
};

const THEMES_EN = {
  "Chemins de fer": "Before the SNCF was founded in 1938, each French railway company (Ouest, État, Nord, PLM, Paris-Orléans, Midi) commissioned painters to make travellers dream. Brittany, the Riviera, the Loire châteaux: these posters quite literally invented railway tourism.",
  "Aviation & mer": "The 1950s were the golden age of air travel: propellers, the Constellation, long-haul routes. Airlines entrusted their posters to the best illustrators to sell exoticism and modernity.",
  "Tourisme": "Tourist offices and transport companies competed through posters to attract travellers: sunshine, local traditions and landscapes became promises in colour.",
  "Publicité": "French advertising posters turned great brands — Perrier, Gitanes, Contrex — into true graphic icons.",
  "Art & culture": "Opera and festival posters and artists’ works: when the poster becomes an art object in its own right.",
  "Sécurité SNCF": "Safety posters made for French railway workers and hung in workshops and depots. Printed in small numbers and rarely kept, they are now sought after by railway collectors."
};

const ENTOILAGE_EN = "Linen-backed: the poster is mounted on linen canvas, the conservation standard. It is stronger, and can be handled and framed safely.";

// Traductions des titres : appliquées dans l'ordre, du plus précis au plus général
const TITRES_EN = [
  ["« Arthur revient », Brocéliande — photographie signée", "“Arthur revient”, Brocéliande — signed photograph"],
  ["Tonquédec, hommage à Olivier Mosset — photographie", "Tonquédec, homage to Olivier Mosset — photograph"],
  ["Fragment d'affiche, tirage sur aluminium signé", "Poster fragment, signed print on aluminium"],
  ["« Malesherbes » — photographie sur aluminium", "“Malesherbes” — photograph on aluminium"],
  ["Design, grand format 155,5 × 112,5 cm", "Design, large format 155.5 × 112.5 cm"],
  ["Techniques américaines", "American techniques"],
  ["Romanoff et Juliette", "Romanoff and Juliet"],
  ["Chemins de fer de l'Ouest", "Western Railway"],
  ["Chemin de fer du Nord", "Northern Railway"],
  ["Chemin de fer européen", "European railways"],
  ["Chemin de fer, par Cassandre", "Railway, by Cassandre"],
  ["Châteaux de la Loire", "Loire Valley châteaux"],
  ["Suisse Italie", "Switzerland – Italy"],
  ["Calais, le port", "Calais harbour"],
  ["Paris – Londres", "Paris – London"],
  ["Fêtes des fleurs", "Flower festival"],
  ["trains wagons-lits", "sleeping-car trains"],
  ["Voitures-lits", "Sleeping cars"],
  ["Trains autos couchettes", "Car-sleeper trains"],
  ["Train ski neige", "Ski trains"],
  ["Sécurité du personnel", "Staff safety"],
  ["Sécurité – Fermer le gaz", "Safety – Turn off the gas"],
  ["Sécurité – Portes de wagons", "Safety – Wagon doors"],
  ["Sécurité SNCF", "SNCF safety"],
  ["Sécurité", "Safety"],
  ["Prix littéraire", "Literary prize"],
  ["Amérique du Sud", "South America"],
  ["Transatlantique", "Transatlantic"],
  ["Croisières", "Cruises"],
  ["Marine nationale", "French Navy"],
  ["Côte Basque", "Basque Coast"],
  ["la femme au collier", "the woman with the necklace"],
  ["Loterie nationale", "French National Lottery"],
  ["Salon de l'automobile", "Motor show"],
  ["Salon de la conciergerie", "Concierge trade fair"],
  ["Opéra de Rennes", "Rennes Opera"],
  ["Opéra", "Opera"],
  ["Espagne", "Spain"],
  ["Madère", "Madeira"],
  ["Grenade", "Granada"],
  ["Bretagne", "Brittany"],
  ["grand format", "large format"]
];
const titreEN = t => TITRES_EN.reduce((s, [fr, en]) => s.split(fr).join(en), t);
const anneeEN = a => a.replace(/^vers /, "c. ");
