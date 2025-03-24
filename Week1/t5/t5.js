'use strict'

const input = +prompt('Enter positive number: ')
  if (input < 0) {
    alert('Number must be positive!')
  }

let naturalNumber = 0;

for (let i = 0; i <= input; i++) {
  naturalNumber += i;
}

console.log(naturalNumber)
