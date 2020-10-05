function countUniqueValues(arr) {
    let first = 0;
    let second = 1;
    let count = 0;
    while (second < arr.length) {
        if (arr[first] != arr[second]) {
            count++;
            first++;
            second++;
            if (second === arr.length) {
                count++;
            }
        } else if (arr[first] === arr[second]) {
            first++;
            second++;
            if (second === arr.length) {
                count++;
            }
        }
    }
    return count;
}