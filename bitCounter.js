let countBits = function(n) {
  let numberInBinary = intToBin(n).toString();
  return (numberInBinary.match(/1/g) || []).length;
};
let intToBin = (integer) => {
  if (integer == 0) return 0; 
  if (integer == 1) return 1;
  return '' + integer % 2 + intToBin(Math.floor(integer/2));
}