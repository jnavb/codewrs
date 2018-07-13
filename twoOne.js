function longest(s1, s2) {
  return (s1+s2).split('')
  							.sort()
  			  			.filter((value, index, obj) => 
  								obj.indexOf(value) === index)
  			  			.join('');
}