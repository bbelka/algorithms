function countUniqueValues(arr) {
    let left = 0;
    let right = 1;
    if (arr.length === 0) {
        return 0;
    }
    while (right < arr.length) {
        if (arr[left] === arr[right]) {
            right++;
        }
        else {
            left++;
            arr.splice(left, 1, arr[right]);
            console.log(arr);
        }
    }
    left++;
    console.log(left);
    return left;
}

countUniqueValues([-3, -3, -2, -1, 0, 1, 2, 2, 2, 3])