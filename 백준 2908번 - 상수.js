const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
inputTestCase = input.split(' ');


function solution(input) {
  var num1 = +input[0].split("").reverse().join('');
  var num2 = +input[1].split("").reverse().join('');

  console.log(num1 > num2 ? num1 : num2);
}

solution(inputTestCase);