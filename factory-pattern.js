class Car{
    constructor(options) {
      this.doors = options.doors || 4;
      this.state = options.state || 'brand new';
      this.color = options.color || 'white';
    }
  }
  class Truck {
    constructor(options) {
      this.doors = options.doors || 4;
      this.state = options.state || 'used';
      this.color = options.color || 'black';
    }
  }
  class VehicleFactory {
    createVehicle(options) {
      if(options.vehicleType === 'car') {
        return new Car(options);
      } else if(options.vehicleType === 'truck') {
        return new Truck(options);
        }
    }
  }