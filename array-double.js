'use strict';
// Input: [1, 2, 3]
// Output: [2, 4, 6]

//recursive
function doubleArray(arr) {
  //base case
  if (!arr.length) {
    return [];
  }
  const newNum = arr[0] * 2;
  return [newNum, ...doubleArray(arr.slice(1))];
}
const arr = [5, 20, 4];
console.log(doubleArray(arr));

//iterative
function doubleArrayIt(arr) {
  return arr.map(e => e * 2);
}
const arr2 = [5, 20, 4];
console.log(doubleArrayIt(arr2));

