'use strict';

//recursive
function factorial(num){
  //base case
  if(num === 1){
    return num;
  }
  //general case
  return num * factorial(num -1);
}

console.log(factorial(5));
// input: 5
// expected: 120 (5*4*3*2*1)

//iterative
function factorialIt(num){
  let total= 1;
  for(let i=num; i >= 1; i--){
    total *= i;
  }
  return total;
}

console.log(factorialIt(5));