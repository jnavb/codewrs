function disemvowel(str) {
  const a = ['a', 'e', 'i', 'o', 'u'];
  let res = '';
 for (let v of str){
   if(!a.includes(v.toLowerCase()) ) res +=v;
 }
  return res;
}