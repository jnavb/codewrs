function isTriangle(a,b,c) {
  const max = Math.max(a,b,c);
   return (max < (a + b + c - max));
}