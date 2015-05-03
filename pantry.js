;(function() {
  function unpack() {
    var obj = {};
    try { obj = JSON.parse(window.name); }
    finally { return obj; }
  }
  function store(obj) {
    return window.name = JSON.stringify(obj);
  }
  window.pantry = {
    get: function(key) {
      return unpack()[key];
    },
    set: function(key, val) {
      var obj = unpack();
      return store((obj[key] = val, obj));
    },
    remove: function(key) {
      var obj = unpack();
      if (!obj.hasOwnProperty(key)) return false;
      return store((delete obj[key], obj));
    }
  };
}());
