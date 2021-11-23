//Given an array of integers and a number, write a function which finds the maximum sum of a subarray with the length of the number passed to the function.
//Note that the subarray must consist of consecutive elements from the original array.


const maxSubarraySum = (arr, num) => {

    if (num > arr.length) return null;

    let temp = 0;
    let max = 0;

    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }
    max = temp;

    for (let j = num; j < arr.length; j++) {
        temp -= arr[j - num];
        temp += arr[j];
        if (temp > max) max = temp;
    }

    return max;

}

console.log(maxSubarraySum([100, 200, 300, 400], 2));       //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))   //39;
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));        //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1],2));  //5
console.log(maxSubarraySum([2, 3], 3));                   //null