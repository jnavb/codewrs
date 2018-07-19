function F(n) { 
  return n ?  n - M(F(n - 1)): 1;
}
function M(n) { 
  return n ? n - F(M(n - 1)):0;
}