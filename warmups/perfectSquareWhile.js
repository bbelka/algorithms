const perfectSquare = num => {
    let i = 0;
    let result = false;

    do {
        if (i * i === num) {
            result = true;
            i += 1;

        } else i += 1;

    } while (i * i <= num);

    return result;
}

console.log(perfectSquare(4));
console.log(perfectSquare(10));
console.log(perfectSquare(27));
console.log(perfectSquare(100));
console.log(perfectSquare(10000000000000000000));