function validAnagram(str1, str2) {

    //if different lengths, rerturn false
    if (str1.length !== str2.length) {
        console.log("false length");
        return false;
    }

    //declare object variable
    let obj1 = {};

    //split str1 into array
    let arr1 = str1.split("");

    //loop over array to build object
    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1;
    }

    //declare array
    let arr2 = str2.split("");

    //loop over str2, comparing letter to keys in obj1 and decrementing count in obj1 if match
    for (let val of arr2) {

        // if str2 char is not in str1, return false
        if (!obj1[val]) {
            console.log("false: str2[char] not in str1");
            return false;
        }
        obj1[val]--;
    }
    console.log("Ya got yerself an anagram!");
    return true;
}

validAnagram("anagram", "nagaaar")