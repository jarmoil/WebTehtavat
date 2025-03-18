'use strict'

const numbers = [];

var i = 0;
for(i=0; i<5; i++) {
  const number = +prompt(`Anna ${i + 1}. numero: `)
  numbers.push(number);
}

numbers.forEach((item, index) => {
  console.log(`${index}: ${item}`)
});



