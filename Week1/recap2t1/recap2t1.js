'use strict'

const fruits = [];
fruits.push("apple", "banana", "orange", "grape", "kiwi");

console.log("Fruits:")
fruits.forEach((item, index) => {
  console.log(`${index}: ${item}`)
});

console.log("Length of Fruits: ", fruits.length)

console.log("Element at Index 2: ",fruits[2])

console.log("Last Element of Fruits: ", fruits[fruits.length - 1])


const vegetables = [];

var i = 0;
for(i= 0; i<3; i++) {
  const vege = prompt(`Anna ${i + 1}. vihannes: `);
  vegetables.push(vege);
}

console.log("Vegetables:")
vegetables.forEach((item, index) => {
  console.log(`${index}: ${item}`)
});

console.log("Length of Vegetables: ", vegetables.length)
