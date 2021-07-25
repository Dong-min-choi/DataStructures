const { i } = require('console');
const fs = require('fs');
let inputTestCase = fs.readFileSync('/dev/stdin').toString().split('');

let dial = {
  3: ['A', 'B', 'C'],
  4: ['D', 'E', 'F'],
  5: ['G', 'H', 'I'],
  6: ['J', 'K', 'L'],
  7: ['M', 'N', 'O'],
  8: ['P', 'Q', 'R', 'S'],
  9: ['T', 'U', 'V'],
  10: ['W', 'X', 'Y', 'Z'],
};

function solution(testCase) {
  let totaltime = 0;
  for (let i = 0; i < testCase.length; i++) {

    for (minTime in dial) {
      if (dial[minTime].includes(testCase[i])) {
        totaltime += + minTime;
      }
    }
  }
  console.log(totaltime);
}

solution(inputTestCase);



