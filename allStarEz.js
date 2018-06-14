function strCount(str, letter){  
  let res = str.match(new RegExp(letter,'g'));
  return res === null ? 0 : res.length;
}