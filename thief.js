var crack = function(safe) {
  let [partFounded, part, res] = [false, 0, '']

  for(let number = 0; !partFounded && number < 100; number++){
    part = number;
    (part < 10) ? part = '0' + part.toString() : part.toString();
    if(safe.unlock(`R${part}-R00-R00`).includes('click')){
          partFounded = true;
          res = `R${part}`
       }
    if(safe.unlock(`L${part}-R00-R00`).includes('click')){
          partFounded = true;
          res = `L${part}`
       }          
  }
  partFounded = false;
  for(let number = 0; !partFounded && number < 100; number++){
    part = number;
    (part < 10) ? part = '0' + part.toString() : part.toString();
    if(safe.unlock(`${res}-R${part}-R00`).includes('click-click')){
          partFounded = true;
          res = `${res}-R${part}`
          break;
       }
    if(safe.unlock(`${res}-L${part}-R00`).includes('click-click')){
          partFounded = true;
          res = `${res}-L${part}`
          break;
       }          
  }
  
  partFounded = false;
  for(let number = 0; !partFounded && number < 100; number++){
    part = number;
    (part < 10) ? part = '0' + part.toString() : part.toString();
    console.log(partFounded, `${res}-R${part}`);
    if(safe.unlock(`${res}-R${part}`).includes('click-click-click')){
          partFounded = true;
          res = `${res}-R${part}`
          break;
       }
    if(safe.unlock(`${res}-L${part}`).includes('click-click-click')){
          partFounded = true;
          res = `${res}-L${part}`
          break;
       }          
  }  
  return safe.open() 
}