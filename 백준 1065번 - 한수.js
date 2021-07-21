const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
let testNum = Number(input);


function solution(num) {
  let count = 99;

  if (num < 100) {
    count = num;
  }
  else {
    for (let i = 100; i <= num; i++) {

      var 일의자리 = i % 10;
      var 십의자리 = parseInt((i / 10) % 10);
      var 백의자리 = parseInt((i / 10) / 10);

      if (일의자리 - 십의자리 === 십의자리 - 백의자리) {
        count++;
      }
    }
  }
  console.log(count);
}


solution(testNum);