const input = require('fs').readFileSync('/dev/stdin');

let count = 1, block = 1;

while (block < input) {    
	block += 6 * count;

	count++;
}

console.log(count);