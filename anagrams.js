'use strict';

function anagrams(str){
  let arr= [];
  //base
  if (str.length === 1){
    arr.push(str);
    return arr;
  }
 
  //general
  for(let i = 0; i < str.length; i++){
    let prefix = str[i];
    let others = str.substring(0, i) + str.substring(i + 1);
    let otherAnagrams = anagrams(others);
    
    for (let j=0; j < otherAnagrams.length; j++){
      arr.push(prefix + otherAnagrams[j]);
    }
  }
  return arr;  
}

let str = 'east';
console.log(anagrams(str));

