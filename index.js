var pattern = /^\$2[aby]\$\d+\$.+$/;

module.exports = {
  isHash: function(needle) {
    return pattern.test(needle);
  }
};