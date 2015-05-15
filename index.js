var pattern = /^\$2a\$\d+\$.+$/;

module.exports = {
  isHash: function(needle) {
    return pattern.test(needle);
  }
};