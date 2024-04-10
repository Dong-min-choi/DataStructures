const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');

let array = [];

function selfNumber(num) {
  let sum = num;
  while (1) {
    if (num == 0) break;
    sum += num % 10;
    num = parseInt(num / 10);
  }
  array[sum] = sum;
  return sum;
}


for (let i = 1; i <= 10000; i++) {
  selfNumber(i);
  if (array[i] === undefined) {
    console.log(i);
  }
}