function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let current = arr[mid];
        if (current < val) {
            min = mid + 1;
        }
        else if (current > val) {
            max = mid - 1;
        }
        else {
            console.log(mid);
            return mid;
        }
    }
    console.log(-1);
    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 17, 26, 29], 29)