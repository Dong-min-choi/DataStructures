const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const inputArr = input.split(" ");

const sumOfInput = () => {
  let sum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    sum += +inputArr[i];
  }
  return sum;
};

console.log(sumOfInput());
