'use strict'

let numbers = [2, 8, 5, 9, 5, 15, 6, 14, 22, 1];

function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

console.log(`Original array: ${numbers}`)
console.log(`Sorted array: ${sortArray(numbers)}`)
