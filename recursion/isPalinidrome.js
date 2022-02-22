const isPalindrome = (string) => {
    let reverse = "";
    const helper = (str) => {
        if (str.length === 0) return str[0];
        reverse += str[str.length - 1];
        return helper(str.slice(0, -1))
    };
    helper(string);
    return reverse === string;
}

console.log(isPalindrome("tacocat"));