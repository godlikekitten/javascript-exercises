const removeFromArray = function (arr, ...theArgs) {
    return arr.filter(ele => !theArgs.includes(ele))
  }

// Do not edit below this line
module.exports = removeFromArray;
