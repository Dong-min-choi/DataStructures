const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');


function solution(testCase) {

  let array = [];
  for (let i = 1; i <= testCase[0]; i++) {
    array.push(testCase[i]);
  }

  array = array.sort((a, b) => a - b);
  array.forEach(element => {
    console.log(element);
  });
}

solution(input);