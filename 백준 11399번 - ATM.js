const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');


function solution(testCase) {

  let 걸리는시간 = testCase[1].split(" ");
  let array = 걸리는시간.map(Number).sort((a, b) => a - b); //배열을 숫자형으로 변환한 후 오름차순 정렬
  let sum = 0;
  let time = [];

  array.forEach(element => {
    sum += element;
    time.push(sum);
  });

  console.log(time.reduce((a, c) => a + c));
}

solution(input);