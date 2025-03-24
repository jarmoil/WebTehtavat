'use strict'

let numbers = [];

var i = 0;
for(i=0; i<5; i++) {
  const number = +prompt(`Anna ${i + 1}. numero: `)
  numbers.push(number);
}

numbers.forEach((item, index) => {
  console.log(`${index}: ${item}`)
});

console.log(`Numbers: [${numbers.join(", ")}]`)

const num = +prompt('Enter a Number to Search:')

if(numbers.includes(num))
  console.log(`Number ${num} is found in the array.`)
else
  console.log(`Number ${num} is not found in the array.`)

numbers.pop()
console.log(`Updated Numbers: [${numbers.join(", ")}]`)

numbers.sort(function(a,b){return a-b})

console.log(`Sorted Numbers: [${numbers.join(", ")}]`)
