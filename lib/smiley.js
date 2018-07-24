function countSmileys(arr) {
let a = arr.join(' ').match(/[:;][-~]?[\)D]/gi);
  return (arr.length > 0 && a) ? a.length : 0;
}