'use strict';

const tempInC = prompt('Anna asteet celssiuksina');

const tempInf = (tempInC * 9) / 5 + 32;

document.querySelector(
  '#target'
).innerHTML = `${tempInC}C on faarenhaitteina ${tempInf}F`;
