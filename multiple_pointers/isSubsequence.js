//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subseequence of the characters in the second string.
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (sub, str) => {
    const subArr = sub.split('');
    const strArr = str.split('');
    let subPoint = 0;
    let strPoint = 0;

    while (subPoint < subArr.length) {
        if (subArr[subPoint] === strArr[strPoint]) {
            subPoint++;
            strPoint++;
        } else {
            strPoint++;
        }
        if (strPoint > strArr.length) {
            return false;
        }
    }
    return true;
};

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false