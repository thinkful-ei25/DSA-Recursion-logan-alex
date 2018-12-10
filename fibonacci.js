'use strict';
//input 7 
//output 13
//sequence: 1 1 2 3 5 8 13

function fibonacci(num) {
  //base
  if (num <= 1) {
    //console.log('<=1', num);
    return num;
  }
  //general
  //console.log(num);
  return (fibonacci(num - 1) + fibonacci(num - 2));
}

console.log(fibonacci(3));

//iterative
function fibonacciIt(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
}

console.log(fibonacciIt(7));

// to display all recursively
//function fibonacci(num) { //base if (num < 2) { return [1]; } if (num < 3) { return [1, 1]; } //general let arr = fibonacci(num - 1); arr.push(arr[num - 2] + arr[num - 3]); return arr; } console.log(fibonacci(7));