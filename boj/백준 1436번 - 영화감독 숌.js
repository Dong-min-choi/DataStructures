const input = +require('fs').readFileSync('/dev/stdin');


var count = 0;
var i = 0;

function solution(num) {
	while (1) {
		if (i.toString().includes('666')) {
			count++;
			
			if (count === num) return i;
		}
		i++;
	}
}

console.log(solution(input));


