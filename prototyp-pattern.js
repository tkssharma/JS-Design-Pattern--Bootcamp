function Hello(greeting) {
  this.greeting = greeting || "Hello World!";
}

Hello.prototype.speak = function(somethingElse) {
  var message = somethingElse || this.greeting;
  console.log(message);
};

var hi = new Hello("Just saying hi!");

hi.speak();
hi.speak("Something different");

var hello = new Hello();
hello.speak();
hello.speak("Yep");

var personPrototype = {
  sayHi: function() {
    console.log("Hello, my name is " + this.name + ", and I am " + this.age);
  },
  sayBye: function() {
    console.log("Bye Bye!");
  }
};

function Person(name, age) {
  name = name || "John Doe";
  age = age || 26;

  function constructorFunction(name, age) {
    this.name = name;
    this.age = age;
  }

  constructorFunction.prototype = personPrototype;

  var instance = new constructorFunction(name, age);
  return instance;
}

var person1 = Person();
var person2 = Person("Bob", 38);

// prints out Hello, my name is John Doe, and I am 26
person1.sayHi();
// prints out Hello, my name is Bob, and I am 38
person2.sayHi();
