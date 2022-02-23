//Write a function that takes in a number and a sorted array of numbers.
//Return true if the number is in the array
//Otherwise return false.

//Attempt to use recursion.

const recursiveBinarySearch = (num, arr) => {

    let middle = Math.floor(arr.length / 2);

    //base case
    if (arr.length <= 1 && arr[0] != num) {
        return false;
    }

    if (num === arr[middle]) {
        return true;
    } else if (num < arr[middle]) {
        return recursiveBinarySearch(num, arr.slice(0, middle))
    } else if (num > arr[middle]) {
        return recursiveBinarySearch(num, arr.slice(middle))
    }
};

console.log(recursiveBinarySearch(1, [1, 2, 3, 4, 6, 8, 9])); //true
console.log(recursiveBinarySearch(6, [1, 3, 5, 7, 9, 10])); //false
console.log(recursiveBinarySearch(11, [3, 4, 6, 11, 12, 13, 15])); //true
console.log(recursiveBinarySearch(11, [3])); //false
console.log(recursiveBinarySearch(11, [11])); //true
console.log(recursiveBinarySearch(11, [])); //false
console.log(recursiveBinarySearch(0, [])); //false