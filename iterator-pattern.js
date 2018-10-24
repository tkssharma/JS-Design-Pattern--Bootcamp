var iterator = (function() {
  var index = 0,
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    length = data.length;

  return {
    next: function() {
      var element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index += 3;
      return element;
    },
    hasNext: function() {
      return index < length;
    },
    rewind: function() {
      index = 0;
      return data[index];
    },
    current: function() {
      return data[index];
    }
  };
})();
