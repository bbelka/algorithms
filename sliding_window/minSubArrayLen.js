//Write a function which accepts two parameters - an array of positive integers adn a positive integer.
//This funciton should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer.
//Of there isn't one, return 0.

const minSubArrayLen = (a, n) => {
    let l = 0;
    let r = 1;
    let min = 0;
    if (a[l] >= n) return 1;
    while (r < a.length) {
        if (a[r] >= n) return 1;
        let sum = 0;
        for (let i = l; i <= r; i++) sum += a[i];
        if (sum >= n) {
            let len = r - l + 1;
            if (min === 0) min = len;
            else if (min > len) min = len;
            l++;
        } else r++;
    }
    return min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));   //2 ([4,3])
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));     //2 ([5,4])
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));   //1 ([62])
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9], 39));    //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9], 55));    //5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));    //2
console.log(minSubArrayLen([4, 3, 3, 8, 7, 6, 3], 70));    //0