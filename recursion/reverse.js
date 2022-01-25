const reverse = (string) => {
    let output = "";
    const helper = (str) => {
        if (str.length === 0) return str[0];
        output += str[str.length - 1];
        return helper(str.slice(0, -1))
    };
    helper(string)
    return output;
};

console.log(reverse("Hello World"));