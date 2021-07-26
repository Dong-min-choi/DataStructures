const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');;
const inputC = input[0];

function solution(testCase) {
  let count = 0;
  for (let i = 0; i < testCase.length; i++) {
    if (testCase[i] === 'c') {
      if (testCase[i + 1] === '=' || testCase[i + 1] === '-') {
        count++;
        i++;
      } else {
        count++;
      }
    }
    else if (testCase[i] === 'd') {
      if (testCase[i + 1] === 'z' && testCase[i + 2] === '=') {
        count++;
        i += 2;
      } else if (testCase[i + 1] === '-') {
        count++;
        i++;
      } else {
        count++;
      }
    }
    else if (testCase[i] === 'l') {
      if (testCase[i + 1] === 'j') {
        count++;
        i++;
      } else {
        count++;
      }
    }
    else if (testCase[i] === 'n') {
      if (testCase[i + 1] === 'j') {
        count++;
        i++;
      } else {
        count++;
      }
    }
    else if (testCase[i] === 's') {
      if (testCase[i + 1] === '=') {
        count++;
        i++;
      } else {
        count++;
      }
    }
    else if (testCase[i] === 'z') {
      if (testCase[i + 1] === '=') {
        count++;
        i++;
      } else {
        count++;
      }
    }
    else {
      count++;
    }

  }
  console.log(count);
}


solution(inputC);
