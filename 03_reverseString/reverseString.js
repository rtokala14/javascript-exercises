const reverseString = function(inputStr) {
    newArray = inputStr.split('');
    newString = "";
    for (let i = newArray.length-1; i >= 0; i--) {
        newString += newArray[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
