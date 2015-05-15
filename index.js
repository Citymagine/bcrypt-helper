var pattern = /^\$2a\$\d+\$[A-Za-z0-9]+\.[A-Za-z0-9]+$/;

module.exports = {
  isHash: function(needle) {
    return pattern.test(needle);
  }
};