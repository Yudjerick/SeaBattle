import {updateFieldVisuals} from "./functions.mjs";
import { generateEnemyField } from "./functions.mjs";
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    cell.id = (c + '').length > 1 ? c : '0' + c; 
    cell.innerText = cell.id;
    container.appendChild(cell).className = "grid-item sea";
  };
};

makeRows(10, 10);

let field = generateEnemyField();
updateFieldVisuals(field);