var pattern = /^\$2[abxy]\$([0][4-9]|[1-2][0-9]|[3][0-1])\$[0-9a-zA-Z\.\/]{53}$/;

module.exports = function(needle) {
  return pattern.test(needle);
};
