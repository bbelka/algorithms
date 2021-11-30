// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

const validParentheses = (parens) => {
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        const paren = parens[i];

        switch (paren) {
            case '(':
                ++count;
                break;
            case ')':
                --count;
                break;
            default:
                break;
        }
        if (count < 0) return false;
    };
    return count === 0 ? true : false;
};



console.log(validParentheses('()')); //true
console.log(validParentheses(')(()))'));//false
console.log(validParentheses('())('));//false
console.log(validParentheses('(())((()())())'));//true
console.log(validParentheses('())'));//false
