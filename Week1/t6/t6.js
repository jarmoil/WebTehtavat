'use strict'

let input = +prompt("Enter a positive integer: ")
  if (isNaN(input) || input <= 0) {
    alert("Integer must be positive!")
  }

// Create a table element
const table = document.createElement("table");
table.style.borderCollapse = "collapse";

// Generate the multiplication table
for (let i = 1; i <= input; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= input; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// Append the table to the target element
target.appendChild(table);
