const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();

let count = 0;
let process = [];

function solution(num, a, b, c) {
  if (num < 1) { return; }

  solution(num - 1, a, c, b);
  process.push([a,c]);
  count++;
  solution(num - 1, b, a, c);
}
solution(input, 1, 2, 3);

console.log(count);
console.log(process.map(e=>e.join(" ")).join("\n"));