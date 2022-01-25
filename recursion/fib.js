// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);

// }

const fib = (n) => n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

console.log(fib(4));