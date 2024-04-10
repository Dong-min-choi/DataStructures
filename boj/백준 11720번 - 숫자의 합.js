const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split('\n');
const testCaseNum = input[0];

const testCase = input[1];


function solution(num, testCase) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += parseInt(testCase[i]);
  }
  console.log(sum);
}

solution(testCaseNum, testCase);