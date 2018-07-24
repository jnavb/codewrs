function twoSum(numbers, target) {
  let [index1, index2] = [0,0];
  numbers.forEach((a,outerInd) => 
	numbers.forEach((b,innerInd) => 
		{
		if (outerInd !== innerInd && a + b === target) {
    		index1 = innerInd;
    		index2 = outerInd;
      	};
      }
    )
);
 return [index1, index2];
}