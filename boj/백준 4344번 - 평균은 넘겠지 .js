const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split('\n');
const testCaseNum = +input[0];

for (let i = 1; i <= testCaseNum; i++) {
  const arr = input[i].split(' ').map((item) => +item);

  let sum = 0, avg = 0, count = 0;
  for (let j = 1; j < arr.length; j++) {
    sum += arr[j];
  }
 
  avg = sum / (arr.length - 1);
  
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > avg) {
      count++;
    }
  }
  let percentage = count/ (arr.length -1) * 100;
  console.log(percentage.toFixed(3) + '%');
}