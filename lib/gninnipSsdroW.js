function spinWords(str){
  return str.split(' ')
  					.map(a => 
  						(a.length < 5) ? a
  													 :a.split('')
  													 	 .reverse()
  													 	 .join(''))
  					.join(' ');
}