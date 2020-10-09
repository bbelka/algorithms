function longestUniqueStr(str) {
    let currStr = "";

    for (let i = 0; i < str.length; i++) {

        let char = str.charAt(i);
        let pos = currStr.indexOf(char);
        
        if (pos !== -1) {
            currStr = currStr.substr(pos + 1)
        };

        currStr += char;

    };
    console.log(currStr);
    return currStr;
};

longestUniqueStr(";anefpnveqwof");
// longestUniqueStr("Brett Belka");