// Generated by CoffeeScript 1.8.0
var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

module.exports = function(items, filter) {
  return items.filter(function(item) {
    var key, test, _ref;
    for (key in filter) {
      test = filter[key];
      if (item[key] === void 0) {
        return false;
      }
      if (test instanceof Array) {
        if (_ref = item[key], __indexOf.call(test, _ref) < 0) {
          return false;
        }
      } else {
        if (item[key] !== test) {
          return false;
        }
      }
    }
    return true;
  });
};
