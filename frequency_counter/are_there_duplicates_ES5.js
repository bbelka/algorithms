//the "arguments object" creates an array-like object
//it is "array-like" because the keys correspond to what the index would be if the arguments were put directly into an array, in the order that they appear in the arguments passed to the function. And he values are the arguments themselves.
//to run array method on jteh arguments object, you would need to create an array from the object first.ƒ

function areThereDuplicates() {
    console.log(arguments);
    //create counter object
    let counter = {};

    //for each arugment
    for (let i = 0; i < arguments.length; i++) {

        //instantiate var for current argument
        const arg = arguments[i];

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