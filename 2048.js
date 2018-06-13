function merge(line) {
  let [index, res] = [0, line.slice()];
  res = shiftRigth(res);
  while (index + 1 < res.length){
    if (res[index] == 0){
      res.splice(index,1);
      res.push(0);
    }else if(res[index] == res [index + 1]) {
      res[index] = res[index] * 2;
      res.splice(index + 1,1);
      res.push(0);
    } 
  index++;
  }
  return res;
};

function shiftRigth(line){
  let res = line.filter(a => a != 0);
  var zeros = line.length - res.length;
  for(let i = 0; i < zeros; i++)res.push(0);
  return res;
}