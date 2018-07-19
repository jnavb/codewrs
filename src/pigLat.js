function pigIt(str){
  return str.split(' ')
            .map( a => {
                  if(a.match(/[!?]/) === null) return a.substring(1,a.length) + a.charAt(0) + 'ay';
                  else return a;
                  })
                  .join(' ');
}