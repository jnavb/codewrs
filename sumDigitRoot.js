function digital_root(n) {
 let res = digitSum(n);
 return (parseInt(res/10)) ? digital_root(res):res;

}

function digitSum(n, shifter = 10){
  return (n % shifter == n) ? parseInt((n % shifter) / (shifter/10))
                              :parseInt((n % shifter) / (shifter/10)) +  digitSum(n, shifter*10);
}