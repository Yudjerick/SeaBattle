import {updateFieldVisuals} from "./functions.mjs";
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

let field = [];  
for (let i = 0; i < 10; i++){
  let line = [];
  for (let j = 0; j < 10; j++){
    line.push(0);
  }
  field.push(line);
}

field[0][0] = 1;
field[0][1] = 1;
field[7][7] = 2;
field[9][8] = 3;
updateFieldVisuals(field);