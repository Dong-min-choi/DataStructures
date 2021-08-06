const fs = require('fs');
const num = +fs.readFileSync('/dev/stdin').toString();

let array = [];
let constructor = [];

//분해합 구하기
function decompositionSum(num) {
  let sum = num;
  while (1) {
    if (num === 0) break;
    sum += num % 10;
    num = parseInt(num / 10);
  }
  array[sum] = sum;
  return sum;
}
//생성자 찾아서 배열에 push
for (let i = 1; i <= num; i++) {
  if (num === decompositionSum(i)) {
    constructor.push(i);
  }
}

if(constructor[0] === undefined){ //생성자 배열이 비어있다는 것은 생성자가 없다는 것이므로 0 출력
  console.log(0);
} else {
  console.log(constructor[0]); //생성자는 작은 숫자부터 push되므로 가장 작은 값인 첫 번째 원소 출력
}