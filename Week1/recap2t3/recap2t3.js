'use strict'

let numbers = [];

while(true){
  let input = prompt(`Enter a number (or 'done' to finish): `)
  console.log(`Enter a number (or 'done' to finish): ${input}`)

  if(input.toLowerCase() === 'done')
    break;

  let num = Number(input)

  if (!isNaN(num)) {
    numbers.push(num);
  } else {
      alert("Please enter a valid number.");
  }
}

let evenNumbers = [];

for (let num of numbers){
  if(num % 2 == 0) {
    evenNumbers.push(num)
  }
}

let resultText = evenNumbers.length > 0 ? `Even Numbers: ${evenNumbers.join(', ')}` : `Even Numbers: None`;
document.querySelector('#target').innerHTML = resultText;
console.log(resultText);
