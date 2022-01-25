// const power = (b, e) => {
//     if (e === 0) return 1;
//     return b * power(b, e - 1);

// }

const power = (b, e) => e === 0 ? 1 : b * power(b, e - 1)

console.log(power(2, 3));