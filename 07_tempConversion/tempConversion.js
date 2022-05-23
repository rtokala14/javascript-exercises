const ftoc = function(fTemp) {
  let C = (fTemp - 32) * (5 / 9);
  C = Math.round(C * 10) / 10;
  return C;
};

const ctof = function(cTemp) {
  let F = (cTemp * (9/5)) + 32;
  F = Math.round(F * 10) / 10;
  return F;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
