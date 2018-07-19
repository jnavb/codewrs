const keys = 	[['a','f','k','p','u','aA'],
			['b','g','l','q','v',' '],
			['c','h','m','r','w'],
			['d','i','n','s','x'],
			['e','j','o','t','y'],
			['1','4','7','.','z'],
			['2','5','8','@','_'],
			['3','6','9','0','/']];
      
var tvRemote = function(words) {
  let [mode, position, letter, count] = ['lowerCase', [0,0], ,0];
  
  for(let i = 0; i < words.length; i++){
    letter = words.charAt(i);
    var nextPos = locate(keys,letter.toLowerCase());
    if ((letter.toUpperCase() == letter && mode == 'upperCase') ||
          letter.toLowerCase() == letter && mode == 'lowerCase'){         
          count = count 
                  + 
                  Math.min(Math.abs(position[0] - nextPos[0]), Math.min(nextPos[0],position[0]) - Math.max(nextPos[0], position[0]) + 8) 
                  + 
                  Math.min(Math.abs(position[1] - nextPos[1]), Math.min(nextPos[1],position[1]) - Math.max(nextPos[1],position[1]) + 6) 
                  + 1;
          } 
    else{
          count = count 
                  + 
                  Math.min(Math.abs(0 - nextPos[0]), 0 + 8 - nextPos[0]) 
                  + 
                  Math.min(Math.abs(5 - nextPos[1]), nextPos[1] + 1 ) 
                  +
                  Math.min(Math.abs(position[0] - 0), 8 - position[0])
                  + 
                  Math.min(Math.abs(position[1] - 5), Math.min(position[1], 5) + 1)
                  + 2;
                  mode = (letter.toUpperCase() == letter) ? 'upperCase':'lowerCase';
    }
  position = nextPos;
  }    
  return count;
}

function locate(arr,key){
  let row = -1;
  for(let column = 0; column < arr.length; column++){
    row = arr[column].indexOf(key);
    if(row !== -1) return [column,row];
  }
}