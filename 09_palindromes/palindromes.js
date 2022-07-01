const palindromes = function(str) {
    let strLower = str.toLowerCase().replace(/\W|_/g, '').replace(/\s+/g, '');
    if (strLower === strLower.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
};


// Do not edit below this line
module.exports = palindromes;
