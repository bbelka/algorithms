//Write a function which accepts a string and returns the length of the longest substring with all distinct characters.

const findLongestSubstring = (str) => {
    let max = 0;
    let start = 0;
    let seen = new Object();

    for (let i = 0; i < str.length; i++) {
        if (seen[str[i]]) {
            start = Math.max(start, seen[str[i]]);
            seen[str[i]] = i;
        }
        max = Math.max(max, i - start + 1);
        seen[str[i]] = i + 1;
    }
    return max;
};

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));//7
console.log(findLongestSubstring('thisisawesome'));//6
console.log(findLongestSubstring('thecatinthehat'));//7
console.log(findLongestSubstring('bbbbbb'));//1
console.log(findLongestSubstring('longestsubstring'));//8
console.log(findLongestSubstring('thisishowwedoit'));//6