// const isPlindrome = (str) => {
//     let lastIndex = str.length - 1;

//     for (let i = 0; i < str.length/2; i++) {
//         if (str[i] != str[lastIndex]) {
//             return false;
//         }
//         lastIndex--;
//     }
//     return true;
// }

const isPlindrome = str =>{
    return str === str.split("").reverse().join("");
}

console.log(isPlindrome("radar")); //true
console.log(isPlindrome("engage")); //false