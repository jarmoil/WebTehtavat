'use strict'

const numbers = [2, 8, 5, 9, 5, 15, 6, 14, 22, 1];

function sortArray(arr, order) {
  if(order === "asc") {
    return arr.slice().sort((a, b) => a - b);
  } else if(order === "desc") {
    return arr.slice().sort((a, b) => b - a);
  } else {
    return console.log("invalid input!");
  }
}

console.log(sortArray(numbers, ("asc").toLowerCase()));
console.log(sortArray(numbers, ("desc").toLowerCase()));
