function insideOut(x){
return x.split(' ').map(a => a.length % 2 ? odd(a):even(a)).join(' ')
  
}

function even(even){
  return even.split('').map((a,index,arr) => {
	            if(index < parseInt(arr.length/2)) return arr[parseInt(arr.length/2) - index - 1];
	            else return arr[parseInt(arr.length/2) + arr.length - index - 1];
}).join('');
}

function odd(odd){
  return odd.split('').map((a,index,arr) => {
	          if(index === parseInt(arr.length/2)) return a;
	          
            if(index < parseInt(arr.length/2)) return arr[parseInt(arr.length/2) - 1 - index];
	          else return arr[parseInt(arr.length/2) + arr.length - index];
}).join('');
}