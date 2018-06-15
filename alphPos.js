const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"];

function alphabetPosition(text) {
  let res = text.toLowerCase()
  							.split('')
  							.filter( a => 
  								alphabet.includes(a));
  							
  return res.map(a => alphabet.indexOf(a) + 1)
  					.join(' ');
}

