export function updateFieldVisuals(field){
    let map = {0:'sea', 1:'ship', 2:'miss', 3:'shot'};
    for (let i = 0; i < 10; i++){
      for (let j = 0; j < 10; j++){
        document.getElementById(i + '' + j).className = 'grid-item ' + map[field[i][j]];
      }
    }
  }

/*проверка возможности установить корабль размера size в точку на поле field 
с координатами (x;y). isHor является истиной, если корабль установлен горизонтально.
возвращает true, если корабль можно установить, или false, если корабль нельзя установить*/
export function canPlaceShip(field, x, y, isHor, size){
  if(!(x >= 0 && x < 10 && y >= 0 && y < 10)){
    return false;
  }
  if(isHor && x + size - 1 > 9){
    return false;
  }
  if(!isHor && y + size - 1 > 9){
    return false;
  }
  for(let i = -1; i <= 1; i++) for(let j = -1; j <= 1; j++){
    if(x + i >= 0 && x + i< 10 && y + j >= 0 && y + j < 10 && field[x + i][y + j] != 0){
      return false;
    }
  }
  return true;
}