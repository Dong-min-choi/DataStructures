function solution(number) {
    let count = 0;

    while (1) {
        if (number % 5 === 0) {
            count += number / 5;
            break;
        }

        if (number < 0) {
            return -1;
        }

        count++;
        number -= 3;
    }

    return count;
}


console.log(solution(+input))