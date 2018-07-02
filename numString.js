function numericals(str){
  const counter = [];
  return str
        .split('')
        .map(letter => {
          const letterPosition = letter.charCodeAt()
          if(counter[letterPosition])
            return ++counter[letterPosition];
          else {
            counter[letterPosition] = 1;
            return counter[letterPosition];
          }
        })
        .join('');
   
}