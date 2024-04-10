const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let num = input.shift();


const xy = input.filter((v, i) => i >= 0).map((v) => v.split(' '));

let answer = '';

xy.sort((a, b) => {
  if (a[1] === b[1])
    return a[0] - b[0];
  else
    return a[1] - b[1];
}).forEach(arr => {
  answer += `${arr[0]} ${arr[1]}\n`
});

console.log(answer);



