const fs = require('fs');
let inputC = fs.readFileSync('./input.txt').toString().split("\n");



function solution(input) {
  var count = +input[0];

  for (let i = 1; i <= +input[0]; i++) {
    var testCase = input[i].split('');
    var array = [];

    while (1) {
      if (testCase.length !== 0) {
        var char = testCase.shift();
        if (char === testCase[0]) {
          array.push(char);

        } else {
          if (!array.includes(testCase[0])) {
            array.push(char);
          } else {
            count--;
            break;
          }
        }

      } else break;
    }
  }
  console.log(count);
}


solution(inputC);


