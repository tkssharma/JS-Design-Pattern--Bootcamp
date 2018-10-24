const myRevealingModule = (function() {
  let privateVar = "Peter";
  const publicVar = "Hello World";
  function privateFunction() {
    console.log("Name: " + privateVar);
  }

  function publicSetName(name) {
    privateVar = name;
  }
  function publicGetName() {
    privateFunction();
  }
  /** reveal methods and variables by assigning them to object     properties */
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();
myRevealingModule.setName("Mark");
// prints Name: Mark
myRevealingModule.getName();
