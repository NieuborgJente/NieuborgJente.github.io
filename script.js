// Bouwt de projectkaarten op basis van projects.js — hier hoef je normaal niets aan te veranderen.

const grid = document.getElementById("project-grid");
const filterBox = document.getElementById("filters");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function maakKaart(p) {
  const kaart = el("article", "card");

  if (p.afbeelding) {
    const img = el("img", "card-img");
    img.src = p.afbeelding;
    img.alt = p.titel;
    img.loading = "lazy";
    kaart.append(img);
  } else {
    kaart.append(el("div", "card-img placeholder", p.titel.charAt(0)));
  }

  const body = el("div", "card-body");
  body.append(el("h3", "", p.titel), el("p", "", p.beschrijving));

  if (p.tags && p.tags.length) {
    const tags = el("ul", "tags");
    p.tags.forEach(t => tags.append(el("li", "", t)));
    body.append(tags);
  }

  if (p.notitie) body.append(el("p", "note", p.notitie));

  const links = el("div", "links");
  if (p.github) links.append(maakLink(p.github, "Code"));
  if (p.demo) links.append(maakLink(p.demo, "Live demo"));
  if (p.instructables) links.append(maakLink(p.instructables, "Instructables"));
  if (links.children.length) body.append(links);

  kaart.append(body);
  return kaart;
}

function maakLink(href, tekst) {
  const a = el("a", "", tekst);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}

function toon(filter) {
  grid.replaceChildren(
    ...projects
      .filter(p => filter === "All" || (p.tags || []).includes(filter))
      .map(maakKaart)
  );
  filterBox.querySelectorAll("button").forEach(b =>
    b.classList.toggle("active", b.textContent === filter)
  );
}

// Filterknoppen automatisch maken uit alle tags
const alleTags = ["All", ...new Set(projects.flatMap(p => p.tags || []))];
alleTags.forEach(tag => {
  const knop = el("button", "", tag);
  knop.addEventListener("click", () => toon(tag));
  filterBox.append(knop);
});

toon("All");
document.getElementById("jaar").textContent = new Date().getFullYear();
