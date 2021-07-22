const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split('\n');
const testCase = input[0];



function solution(testCase) {
  let array = Array.from({ length: 26 }, () => -1);

  for (let i = 0; i < testCase.length; i++) {
    let char = testCase[i];
    let index = char.charCodeAt() - 97;

    array[index] = testCase.indexOf(char);
  }

  array = array.join(' ');
  console.log(array);
}

solution(testCase);



// baekjoon
// 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1