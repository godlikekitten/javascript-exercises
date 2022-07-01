const ftoc = function(degrees) {
    let x = (degrees - 32) * 5/9;
    return parseFloat(x.toFixed(1));
};

const ctof = function(degrees) {
    let x = degrees * (9/5) + 32;
    return parseFloat(x.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
