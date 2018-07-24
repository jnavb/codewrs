function solution(number){    
    let res = [3];
    for (let i =  5; i < number; i++)
      if ( i % 3 == 0 || i % 5 == 0) res.push(i);
    return (number < 4) ? 0 : res.reduce((a,b) => a + b);
}