const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
// let input = fs.readFileSync("./input.txt").toString();

const inputArr = input.split("\n");

const checkTotalPrice = (input) => {
  const totalPrice = input.shift();
  const numOfProducts = input.shift();
  const productList = input;

  let sum = 0;

  for (let i = 0; i < +numOfProducts; i++) {
    const product = productList[i].split(" ");
    const count = +product[1];
    const price = +product[0];
    sum += count * price;
  }

  if (+totalPrice === +sum) return "Yes";

  return "No";
};

console.log(checkTotalPrice(inputArr));
