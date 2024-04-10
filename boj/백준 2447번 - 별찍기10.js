let input = require('fs').readFileSync('./dev/stdin').toString();


function solution(number) {

  let result = "";
  const star = (x, y, n) => {
    if (x % 3 === 1 && y % 3 === 1) {
      result += " ";
    }
    else {
      if (n === 1) {
        result += '*';
      } else {
        star(Math.floor(x / 3), Math.floor(y / 3), Math.floor(n / 3));
      }
    }
  }

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      star(i, j, number);
    }

    result += "\n"
  }

  console.log(result);
}

solution(input);