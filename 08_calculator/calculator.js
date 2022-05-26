const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
	return arguments[0].reduce((total, num) => {
    total += num;
    return total;
  }, 0)
};

const multiply = function() {
  return arguments[0].reduce((prod, num) => {
    prod *= num;
    return prod;
  }, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	const input = arguments[0];
  if (input === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= input; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
