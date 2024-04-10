const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');


for (let i = 1; i <= input[0]; i++) {
  let score = 1;
  let total = 0;
  for (let j = 0; j < input[i].length; j++) {

    if (input[i][j] === 'O') {
      total += score;
      score++;
    } else {
      score = 1;
    }
  }
  console.log(total);
}