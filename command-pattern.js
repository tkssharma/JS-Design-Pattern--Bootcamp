// the object which knows how to execute the command
var invoker = {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(x, y) {
    return x - y;
  }
};

// the object which is used as an abstraction layer when
// executing commands; it represents an interface
// toward the invoker object
var manager = {
  execute: function(name, args) {
    if (name in invoker) {
      return invoker[name].apply(invoker, [].slice.call(arguments, 1));
    }
    return false;
  }
};

// prints 8
console.log(manager.execute("add", 3, 5));
// prints 2
console.log(manager.execute("subtract", 5, 3));
