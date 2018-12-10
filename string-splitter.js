'use strict';

// recursive
function stringSplitter(str, separator){
  //base case
  if(str.indexOf(separator) === -1){
    return [str];
  }
  
  //general case

  const word = str.slice(0, str.indexOf(separator));
  return [word, ...stringSplitter(str.slice(str.indexOf(separator)+ 1), separator)];
}

let str = 'hello good morning';
console.log(stringSplitter(str, ' '));

// input: 'morning'
// output: ['hello', 'good', 'morning']

//interative
function stringSplitterIt(str, separator){
  return str.split(separator);
}

console.log(stringSplitterIt(str, ' '));

