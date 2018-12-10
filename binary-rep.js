'use strict';

//recursive
function binary(num) {
  //base case
  if (num === 0) {
    return '';
  }
  //general case
  const remainder = Math.floor(num % 2);

  return binary(Math.floor(num / 2)) + remainder;
}
// console.log(binary(25));

//iterative
function binaryIt(num) {
  // return num.toString(2);
  let binaryString = '';
  while (num > 0) {
    binaryString = Math.floor(num % 2) + binaryString;
    num = Math.floor(num / 2);
  }
  return binaryString;
}

console.log(binaryIt(25));
