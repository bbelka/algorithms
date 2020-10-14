//ES6 version uses the rest parameter.
//this is the same syntax as a spread operator
//the main advantage of the rest paramater is that all array methods can be utilized because it's an array, not an object.

function areThereDuplicates(...args) {

    //create counter object
    let counter = {};

    //for each arugment
    for (let i = 0; i < args.length; i++) {

        //instantiate var for current argument
        const arg = args[i];

        //create entry in counter
        counter[arg] = (counter[arg] || 0) + 1;

        //if duplicate, return true
        if (counter[arg] > 1) {
            console.log("true");
            return true;
        }
    }

    //if no duplicates arise, return false
    console.log("false");
    return false;
}

areThereDuplicates(1, 2, 3, 4, 5); //false
areThereDuplicates(1, 5, 9, 27, 1921, 1762, 1, 2); //true