//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
    let output = new Array;
    let current = 0;
    let comp = 1;

    iterable[0] ? output.push(iterable[0]) : output;

    while (comp < iterable.length) {
        if (iterable[current] === iterable[comp]) comp++;
        else {
            output.push(iterable[comp]);
            current = comp;
            comp += 1;
        }
    }
    return output;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));       // [1,2,3]