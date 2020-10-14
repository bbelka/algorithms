function areThereDuplicates() {
console.log(arguments);
    //create counter object
    let counter = {};

    //for each arugment
    for (let i = 0; i < arguments.length; i++) {
        console.log("in");

        const arg = arguments[i];
        //create entry in counter
        counter[arg] = (counter[arg] || 0) + 1;
        console.log(counter);
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

areThereDuplicates(1, 2, 3, 4, 5)