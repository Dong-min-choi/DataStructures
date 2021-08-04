const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');;
const inputC = +input[0];
const inputTestCase = input;


function solution(num, testCase) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(testCase[i]);
    
  }

  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

  }
}

solution(inputC, inputTestCase);
