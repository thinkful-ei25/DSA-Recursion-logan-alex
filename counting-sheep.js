'use strict';

// recursive strategy
function countingSheep(num){
  //base case
  if (num === 0){
    return;
  }
  //general case
  console.log(`${num} - Another sheep jump over the fence`);
  return countingSheep(num - 1);
}

countingSheep(3);

// iterative strategy
function countingSheepIt(num){
  for(let i=num; i > 0; i--){
    console.log(`${i} - Another sheep jump over the fence`);
  }
}

countingSheepIt(3);