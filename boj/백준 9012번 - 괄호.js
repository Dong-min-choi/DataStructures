let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function solution(testCase) {
  for (let i = 1; i <= testCase[0]; i++) {
    let str = testCase[i].split('');
    let stack = [];
    let result = "YES";

    for (let j = 0; j < str.length; j++) {
      if (str[j] === '(') {
        stack.push('(');

      } else if (str[j] === ')') {
        if (stack.length === 0) {
          result = "NO";
          break;
        }
        stack.pop();
      }
    }
    if (stack.length !== 0) {
      result = "NO"
    }
    console.log(result);
  }
}

solution(input);