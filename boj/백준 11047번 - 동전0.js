const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split("\n");
let info = input[0].split(' ');
input = input.map(e => Number(e)).filter(e => Number(e));
input = input.sort((a, b) => b - a);

function solution(info, money) {
    let spent;
    let count = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] > money) continue;

        if (input[i] <= money) {
            spent = parseInt(money / input[i])
            money -= spent * input[i];
            count += spent;
        }
    }

    return count;
}


console.log(solution(+info[0], +info[1]))