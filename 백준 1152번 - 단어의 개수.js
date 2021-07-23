const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split(' ');




if (input[0] === '') { //입력이 공백이라면
  console.log(0);
} else {
  console.log(input.length);
}
