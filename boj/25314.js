const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
// let input = fs.readFileSync("./input.txt").toString();

const createLong = (repeat) => {
  let long = "int";
  let count = 0;
  while (count < repeat / 4) {
    long = "long" + " " + long;
    count++;
  }

  return long;
};

console.log(createLong(+input));
