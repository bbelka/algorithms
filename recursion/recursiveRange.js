const recursiveRange = (n) => n === 1 ? 1 : n + recursiveRange(n - 1);

console.log(recursiveRange(10));