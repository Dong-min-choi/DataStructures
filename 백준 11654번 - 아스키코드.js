const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let testCase = input;

function solution(testCase){
  console.log(testCase.charCodeAt());
}

solution(testCase);