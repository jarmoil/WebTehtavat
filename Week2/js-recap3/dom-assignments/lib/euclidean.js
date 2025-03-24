/**
 *
 * @param {number[]} alkupiste geoJSON poin-koordinaatit
 * @param {number[]} loppupiste geoJSON poin-koordinaatit
 * @returns etäisyys kahden pisteen välillä
 */

export function distance(alkupiste, loppupiste) {
  return Math.sqrt(
    (loppupiste[0] - alkupiste[0]) ** 2 + (loppupiste[1] - alkupiste[1]) ** 2
  );
}
