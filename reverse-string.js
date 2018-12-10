'use strict';

// recursive
function reverseString(str){
  //base case
  if(str === ''){
    return '';
  }
  // general case
  const newChar = str[str.length-1];

  return newChar + reverseString(str.slice(0,-1));
}

console.log(reverseString('hello'));

// iterative
function reverseStringIt(str){
  let newStr = '';
  for(let i=str.length-1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseStringIt('hello'));
