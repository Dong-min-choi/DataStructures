const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
// let input = fs.readFileSync("./input.txt").toString();

const arr = input.split("\n")[1];
const targetNumber = Number(input.split("\n")[2]);
const numberList = Array(...arr.split(" "));

const countOfTarget = numberList.filter((n) => +n === targetNumber).length;

console.log(countOfTarget);
