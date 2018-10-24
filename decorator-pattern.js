function Car(name) {
  this.name = name;
  // Default values
  this.color = "White";
}
// Creating a new Object to decorate
const tesla = new Car("Tesla Model 3");
// Decorating the object with new functionality
tesla.setColor = function(color) {
  this.color = color;
};
tesla.setPrice = function(price) {
  this.price = price;
};
tesla.setColor("black");
tesla.setPrice(49000);
// prints black
console.log(tesla.color);
//--------------------------------------------------------//
// A vehicle constructor
function Vehicle(vehicleType) {
  // some sane defaults
  this.vehicleType = vehicleType || "car";
  this.model = "default";
  this.license = "00000-000";
}

// Test instance for a basic vehicle
var testInstance = new Vehicle("car");
console.log(testInstance);

// Outputs:
// vehicle: car, model:default, license: 00000-000

// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle("truck");

// New functionality we're decorating vehicle with
truck.setModel = function(modelName) {
  this.model = modelName;
};

truck.setColor = function(color) {
  this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel("CAT");
truck.setColor("blue");
