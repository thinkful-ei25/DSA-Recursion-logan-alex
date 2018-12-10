'use strict';

//recursive
function triangularNumber(n) {
  //base
  if (n === 0) {
    return n + 0;
  }
  return n + (triangularNumber(n - 1));
}

// console.log(triangularNumber(5));
//expected output
//This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

//iterative
function triangularNumberIt(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

console.log(triangularNumberIt(5));