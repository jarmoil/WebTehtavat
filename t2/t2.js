'use strict';

const x1 = prompt('Anna ensimmäinen X koordinaatti');
const y1 = prompt('Anna ensimmäinen Y koornidaatti');
const x2 = prompt('Anna toinen X koornidaatti');
const y2 = prompt('Anna toinen Y koornidaatti');

const Distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.querySelector(
  '#target'
).innerHTML = `Koordinaattien välinen pituus on ${Distance}`;
