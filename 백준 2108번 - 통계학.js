const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('./input.txt').toString().split('\n');


let num = +input[0];
let array = [];


for (let i = 1; i <= num; i++) {
  array.push(+input[i]);
}


function average(num, array) {
  let sum = 0;
  let value;
  for (let i = 0; i < num; i++) {
    sum += array[i];
  }
  value = Math.round(sum / num);

  return value;
}

function meanValue(num, array) {
  array.sort((a, b) => a - b);
  return array[(num + 1) / 2 - 1];
}

function mode(num, array) {

  const map = new Map();

  for (let i = 0; i < num; i++) {

    if (!map.has(array[i])) {
      map.set(array[i], 1);
    }
    else {
      map.set(array[i], map.get(array[i])+1);
    }
  }
  let max = 0;
  let answer = [];

  map.forEach((item, key) => {
    if (max < item) {
      max = item;
      answer = [];
      answer.push(key);
    } else if (max === map.get(key)) {
      answer.push(key);
    }
  });
  return answer.length !== 1 ? answer[1] : answer[0];
} 

function range(num, array) {
  newArray = array.sort((a, b) => a - b);
  return newArray[num - 1] - newArray[0];
}



console.log(average(num, array));
console.log(meanValue(num, array));
console.log(mode(num, array));
console.log(range(num, array));