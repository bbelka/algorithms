function countUniqueValues(arr) {
    let count = 0;
    let left = 0;
    let right = 1;
  
    while (right <= arr.length) {
        
        if (arr[left] === arr[right]) {
            right++;
        }  
        else {
            count++;
            left = right;
            right++;
        }
    }
    console.log(count);
    return count;
}


countUniqueValues([-3, -3, -2, -1, 0, 1, 2, 2, 2, 3])