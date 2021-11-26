//Write a function which accepts a string and returns the length of the longest substring with all distinct characters.

const findLongestSubstring = (s) => {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let l = 0;
    let r = 1;
    let len = 0;
    let currLen = 0;
    let map = new Object();

    map[s[l]] = 1

    while (r < s.length) {
        if (map[s[r]] >= 1) {
            Object.keys(map).forEach(key => {
                map[key] = 0;
            })
            currLen = 0;
            l = r;
            r = l + 1;
        } else {
            map[s[r]] = 1;
            currLen = r - l + 1;
            r++;
        };
        if (currLen > len) len = currLen;


    }
    return len;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));//7
console.log(findLongestSubstring('thisisawesome'));//6
console.log(findLongestSubstring('thecatinthehat'));//7
console.log(findLongestSubstring('bbbbbb'));//1
console.log(findLongestSubstring('longestsubstring'));//9
console.log(findLongestSubstring('thisishowwedoit'));//6