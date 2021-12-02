//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

const comp = (a1, a2) => {
    if (!a1 || !a2) return false;
    const map1 = new Object;
    const map2 = new Object;
    a1.forEach(el => {
        if (map1[Math.pow(el, 2)]) map1[Math.pow(el, 2)]++;
        else map1[Math.pow(el, 2)] = 1;
    });
    a2.forEach(el => {
        if (map2[el]) map2[el]++;
        else map2[el] = 1;
    });
    for (const key in map1) if (map1[key] !== map2[key]) return false;
    for (const key in map2) if (map1[key] !== map2[key]) return false;
    return true;
};

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp([0, 7, 4, 4, 10, 0, 0, 10, 6, 3, 5, 0, 10, 3, 9], [49, 16, 100, 36, 0, 9, 81, 25, 0, 16, 0, 9, 100, 101, 0]));
console.log(comp(null, [121, 14641, 20736, 361, 25921, 361, 20736, 361]));

