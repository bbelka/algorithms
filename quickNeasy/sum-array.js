// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentElement = arr[i];
        sum += currentElement;

    }

    console.log(sum);
    return sum;
};

sumArray([-1,2,3])