//task: write a function that takes in a string and outputs the number of vowels in the string (not counting "y").

// var countVowels = function (str) {
//     var count = 0;
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var input = str.toLowerCase().split("");

//     //walk through input array
//     for (let i = 0; i < input.length; i++) {
//         const letter = input[i];

//         for (let j = 0; j < vowels.length; j++) {
//             const vowel = vowels[j];

//             //compare to vowels
//             if (vowel == letter) {
//                 //increment counter if necessary
//                 count++;
//             }
//         }
//     }
//     //return count
//     return count;
// }

// var countVowels = function (str) {
//     var count = 0;
//     var input = str.toLowerCase();

//     for (var i = 0; i < input.length; i++) {
//         var character = input[i];
//         if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//             count++
//         }
//     }
//     return count;
// }

// var countVowels = function (str) {
//     var count = 0;
//     var input = str.toLowerCase();
//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (var i = 0; i < input.length; i++) {
//         var character = input[i];
//         if (vowels.includes(character)) {
//             count++;
//         }
//     }
//     return count;
// }

const countVowels = (str) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    str.toLowerCase().split('').forEach(character => { if (vowels.includes(character)) { count++ } });
    
    return count;
}


console.log(countVowels("hello")); //output: 2
console.log(countVowels("you are great")); //output : 6
console.log(countVowels("why")); //output: 0
console.log(countVowels("How Are you ToDAy")); //output: 7
