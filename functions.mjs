export function updateFieldVisuals(field){
    let map = {0:'sea', 1:'ship', 2:'miss', 3:'shot'};
  
    
    for (let i = 0; i < 10; i++){
      for (let j = 0; j < 10; j++){
        document.getElementById(i + '' + j).className = 'grid-item ' + map[field[i][j]];
      }
    }
  }