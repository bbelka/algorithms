//task: write a function that takes in a string and outputs the number of vowels in the string (not counting "y").

var countVowels = function (str) {
    var count = 0;
    var input = str.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter === "a" || letter === "e" || letter === "ia" || letter === "o" || letter === "u") {
            count++;
        }
    }
    return count;
};

var countVowels = function (str) {
    var count = 0;
    var input = str.toLowerCase();
    var vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (vowels.includes(letter)) {
            count++;
        }
        return count;
    };


    console.log(countVowels("hello")); //output: 3
    console.log(countVowels("you are great")); //output : 6
    console.log(countVowels("why")); //output: 0
    console.log(countVowels("How Are you ToDAy")); //output: 7
