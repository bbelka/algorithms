//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subseequence of the characters in the second string.
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (x, y) => {
    let i = 0;
    let j = 0;
    while (j < y.length) {
        if (x[i] === y[j]) i++;
        if (i === x.length) return true;
        j++;
    }
    return false;
};

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false