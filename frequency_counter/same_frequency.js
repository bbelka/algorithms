function sameFrequency(first, second) {

    //split numbers to strings to arrays
    let firstArr = first.toString().split("");
    let secondArr = second.toString().split("");

    //initialize frequency counter for first number
    let firstFreq = {};

    //if arrays aren't the same length, reutrn false
    if (firstArr.length !== secondArr.length) {
        // console.log("false, length");
        return false;
    }

    //count frequency of digits in frist number
    firstArr.forEach(val => {
        firstFreq[val] = (firstFreq[val] || 0) + 1;
    });


    //for each digit in the second array, if that digit exists in the frequency counter for the first number, decrement the counter by 1
    for (let i = 0; i < secondArr.length; i++) {
        const val = secondArr[i];

        //if the digit from there are more of the digit in the second number than the first, return false
        if (firstFreq[val] === 0) {
            // console.log("false more in second than in first");
            return false;
        }

        //if the digit from the second number doesn't exist in first number, return false.
        else if (!firstFreq[val]) {
            // console.log("false, digit from second not in first");
            return false;
        }
        //if the digit from the second number exists in the first, decrement the frequency counter
        else if (firstFreq[val]) {
            firstFreq[val] = firstFreq[val] - 1;
        }

        //if all digits exist in both numbers, return true
        // console.log("true");
        return true;

    }
}

sameFrequency(1993, 1399)