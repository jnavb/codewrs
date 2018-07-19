function fish(shoal){
  let [levelProgress, actualSize] = [0,1]
  shoal
  .split('')
  .sort()
  .forEach(a => { 	
    if(actualSize >= parseInt(a)){
      levelProgress = levelProgress + parseInt(a);
    } 
    if(levelProgress   >= actualSize * 4 ){
      levelProgress = levelProgress - actualSize*4;
      actualSize++;
    }      
  }); 
  return actualSize.toString();
}