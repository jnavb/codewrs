function getCount(str) {
  return str.length - str.replace(/[aeiou]/g, '').length;
}