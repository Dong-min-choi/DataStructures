const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

function solution(testCase) {

  if (testCase <= 1) {
    return 1;
  }

  return testCase * solution(testCase - 1);
}

console.log(solution(input));