//This is a binary search algorithm.
//It takes in a sorted array and a value, then searches the array for the value.
//Time complexity: log(N)

function binarySearch(arr, val) {
    //declare index variables
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        //declare middle index and middle value
        let mid = Math.floor((min + max) / 2);
        let current = arr[mid];
        //if the current value is less than the value for which we are searching, set minimum index to current value.
        if (current < val) {
            min = mid + 1;
        }
        //if the current value is greater than the value for which we are searching, set maximum index to current value.
        else if (current > val) {
            max = mid - 1;
        }
        else {
            //if current comparison value equals the falue for which we are searching, return its index.
            console.log(mid);
            return mid;
        }
    }
    console.log(-1);
    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 17, 26, 29], 29)