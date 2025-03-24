'use strict'

const side1 = prompt('Anna esimmäisen sivun pituus');
const side2 = prompt('Anna toisen sivun pituus');
const side3 = prompt('Anna kolmannen sivun pituus');


  if(side1 == side2 && side3)
    document.querySelector('#target').innerHTML='Kolmio on tasasivuinen. "Equilateral"'

  else if(side1 == side2 || side2 == side3 || side1 == side3)
    document.querySelector('#target').innerHTML='Kolmio on tasakylkinen. "Isoscales"'

  else
    document.querySelector('#target').innerHTML='Kolmio on epäsäännöllinen. "Scalene"'


