//Write a function that takes in a whole number and returns true if the number is a perfect square or false if otherwise.

const perfectSquare = (num) => {
    for (let i = 0; i < num; i++) {
        if (i * i === num) {
            return true;
        }
    }
    return false;
};

console.log(perfectSquare(4));
console.log(perfectSquare(5));
console.log(perfectSquare(27));
console.log(perfectSquare(100));
// console.log(perfectSquare(1000000000010000000000000));
