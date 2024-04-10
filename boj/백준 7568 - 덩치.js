const fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString();
input = input.split('\n');

function solution() {
    let rank = new Array(+input[0]).fill(1);
    let str = "";
   
    for (let i = 1; i <= input[0]; i++) {

        for (let j = 1; j <= input[0]; j++) {
            let weight1 = +input[i].split(' ')[0];
            let weight2 = +input[j].split(' ')[0];
            let height1 = +input[i].split(' ')[1];
            let height2 = +input[i].split(' ')[1];

            if (weight1 < weight2 && height1 < height2) {
                rank[(i - 1)] += 1;
            }
        }
    }
    rank.forEach(element => {
        str += element + " ";
    });

    console.log(str);
}

solution();

