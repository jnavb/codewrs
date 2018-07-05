function findNb(m) {
    return rec(1,m);
}

function rec(level,m){
  let res = Math.pow(level,3); 
  if(m - res === 0) return level;
  if(m - res < 0) return -1;
  if(m - res > 0) return rec(level + 1, m - res);
}