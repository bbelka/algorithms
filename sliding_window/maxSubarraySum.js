function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length) {
        return null;
    };

    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    };

    maxSum = tempSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    };

    return maxSum;
}