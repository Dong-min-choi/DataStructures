let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num = +input[0].split(' ')[0];
let max = +input[0].split(' ')[1];
let card = input[1].split(' ').map(e => +e);

function solution(num,max,card) {
  let sum = 0;
  for (let i = 0; i < num - 2; i++) {
    for (let j = i + 1; j < num - 1; j++) {
      for (let k = j + 1; k < num; k++) {
        if (card[i] + card[j] + card[k] <= max && card[i] + card[j] + card[k] > sum) {
          sum = card[i] + card[j] + card[k];
        }
      }
    }
  }
  console.log(sum);
}


solution(num,max,card);