function findOdd(a) {
  a.sort();
  let [count, numb] = [0,a[0]];
  
  for (let i of a){
    if(numb == i) count++;
    else if(count % 2 !== 0) break;
          else {count = 1;
                numb = i;}
  }
  return numb;
}