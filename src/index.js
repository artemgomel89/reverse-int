module.exports = function reverse(n) {
    let newString = (n + "").split("");
    if (newString[0] === "-") {
        return newString.slice(1).reverse().join("") * 1;
    }
    return newString.reverse().join("") * 1;
};
