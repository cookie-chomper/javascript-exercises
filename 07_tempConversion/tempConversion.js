const ftoc = function(ftemp) {
    ctemp = (ftemp - 32) * 0.5556;
    ctemp = parseFloat(ctemp.toFixed(1));
    return ctemp;
};

const ctof = function(ctemp) {
    ftemp = ctemp * 1.8 + 32;
    ftemp = parseFloat(ftemp.toFixed(1));
    return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
