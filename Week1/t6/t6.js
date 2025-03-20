'use strict'

let input = +prompt("Enter a positive integer: ")
  if (isNaN(input) || input <= 0) {
    alert("Integer must be positive!")
  }

const target = document.getElementById("target");

const table = document.createElement("table");
table.style.borderCollapse = "collapse";

for (let i = 1; i <= input; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= input; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j;
    cell.style.padding = "5px";
    row.appendChild(cell);
  }
  table.appendChild(row);
}

target.appendChild(table);
