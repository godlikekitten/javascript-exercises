const sumAll = function(to, fro) {
    let x = 0;
    if (typeof to === 'string' || typeof fro === 'string') {
        return "ERROR";
    } else if (typeof to === 'object' || typeof fro === 'object'){
        return "ERROR";
    } else if (to < 0 || fro < 0){
        return "ERROR";
    } else if (isNaN(to) || isNaN(fro)){
        return "ERROR"
    } else {
        if (to > fro) {
            for (i = fro;i <= to; i++) {
                x += i;
            }
        } else if (fro > to) {
            for (i = to;i <= fro; i++) {
                x += i;
            }
        }
        return x;
    }
};

// Do not edit below this line
module.exports = sumAll;
