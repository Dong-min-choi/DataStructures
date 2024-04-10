let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(function (a) {
  return +a
});

let divide = new Array(42);
let count = 0;

for (let i = 0; i < 10; i++) {
  divide[Number(input[i]) % 42] = Number(input[i]);
}
for (let j = 0; j < 42; j++) {
  if (divide[j] !== undefined ) {
    count++;
  }
}
console.log(count);