function high(str){
  const res = [0, '']
  if (str == ' ') return ' ' 
  str.split(' ')
  .map((item)=> {
	  const wordCharCode = [...item].map(letter => letter.charCodeAt() - 96);
	  const pointsWord = (wordCharCode.length) ? wordCharCode.reduce((acc, letter) => acc + letter) : 0;
	  if(pointsWord > res[0]) {
		  res[0] = pointsWord;
		  res[1] = item;
    }
  })
  return res[1];
}
