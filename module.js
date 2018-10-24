const myModule = (function() {
  const privateVariable = "Hello World";

  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();
myModule.publicMethod();
