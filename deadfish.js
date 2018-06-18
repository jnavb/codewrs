function parse( data, res=[], acc=0 ) {
 [...data]
 .map(value => {
 	switch(value){
	  case 'i':
	    return acc = acc + 1;
	    break;
	  case 'd':
        return acc = acc - 1;         		
	    break;
	  case 's':
	    return acc = Math.pow(acc,2);
	    break;
	  case 'o':
	    res.push(acc);
	    break;
	  default:
	    return 1;
	    break;
 	}
 })
 return res;
}