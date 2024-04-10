const fs = require('fs');
const { SourceMap } = require('module');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');
const testCase = input[0];

let array = Array.from({ length: 26 }, () => 0); //new Array(26).fill(0);

function solution(testCase) {
  for (let i = 0; i < testCase.length; i++) {

    let index = testCase[i].toUpperCase().charCodeAt();
    array[index - 65]++;
  }
  const max = Math.max(...array);
  const index = array.indexOf(max);

  let isSame = false;

  for (let j = 0; j < 26; j++) {
    if (array[j] === max && index != j) {
      isSame = true;
      break;
    }
  }

  console.log(isSame ? "?" : String.fromCharCode(index + 65));
}

solution(testCase);


