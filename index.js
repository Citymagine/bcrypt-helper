var pattern = /^\$2[aby]\$\d+\$.+$/;

module.exports = function(needle) {
  return pattern.test(needle);
};
