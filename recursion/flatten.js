const flatten = (arr) => {
    const result = new Array;
    if (arr.length === 0) return result;
    if (arr[0]) {
        if (Number.isInteger(arr[0])) {
            result.push(arr[0])
        } else {
            return flatten(arr[0])
        }

    } else { return flatten(arr.slice(1)) }

}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]

