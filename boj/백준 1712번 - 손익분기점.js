const fs = require('fs');
let inputC = fs.readFileSync('./input.txt').toString().split(' ');


function solution(testCase) {

  let A = +testCase[0];
  let B = +testCase[1];
  let C = +testCase[2];

  let margin = C - B;
  let 판매량 = Math.floor(A / margin) + 1;

  console.log(margin <= 0 ? -1 : 판매량);
}

solution(inputC);