function divisors(n) {
	var res = [];
	var end = Math.floor(n/2);
  
	for (var i = 2; i <= end; i++) {
		if (n % i == 0) res.push(i);			
	}
  
	return res.length == 0 ? `${n} is prime`:res;
};
