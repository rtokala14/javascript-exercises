const removeFromArray = function(inputArr) {
    let others = Array.from(arguments);
    for (let j = 1; j < arguments.length; j++) {
        inputNum = others[j];
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i] === inputNum) {
                inputArr.splice(i,1);
                break;
            }
        }
    }
    return inputArr;
};

// Do not edit below this line
module.exports = removeFromArray;
