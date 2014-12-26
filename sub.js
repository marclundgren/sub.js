// Sub utility

/* jshint strict:false */
var sub = function(str) {

  return function(obj) {
    var keys = Object.keys(obj);

    keys.map(function(key) {
      var re = new RegExp('{' + key + '}', 'gm');
      str = str.replace(re, obj[key]);
    });

    return str;
  };
};

module.exports = sub;
