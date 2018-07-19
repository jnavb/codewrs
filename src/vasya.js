function tickets(peopleInLine){
  let [twentyFive, fifty, hundred] = [0,0,0];
  for(let i of peopleInLine){
    switch (i){
      case 25: 
        twentyFive++;
        break;
      case 50:
        if(twentyFive > 0){
          fifty++;
          twentyFive--;
        }else return 'NO';
        break;
      case 100:
        if(fifty > 0 && twentyFive > 0){
          hundred++;
          fifty--;
          twentyFive--;
        }else if(twentyFive > 2){
          hundred++;
          twentyFive -= 3;
        } else return 'NO';
        break;
    } 
  }
  return 'YES';
}