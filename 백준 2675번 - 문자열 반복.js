const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');;
const inputC = input[0];
const inputTestCase = input;


function solution(C, testCase) {

  for (let i = 1; i <= C; i++) {
    let answer = '';

    let array = testCase[i].split(' ').map((item) => item);
    let repeatNum = +array[0],
      string = array[1]
    
    for (let j = 0; j < string.length; j++) {
      answer += string[j].repeat(repeatNum);
    }
    answer = answer.split('\n')[0];

    console.log(answer);
  }

}

solution(inputC, inputTestCase);