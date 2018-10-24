function BeverageFactory(){}
BeverageFactory.prototype.createBeverage = function(type) {
    var Beverage;
    if (type === 'GreenTea') {
        Beverage = require('./GreenTea.js');
    }
    else if (type === 'BlackTea') {
        Beverage = require('./BlackTea.js');
    }
    else{
        Beverage = require('./SpecialTea.js');
    }
    return new Beverage();
};

module.exports = BeverageFactory;
 function GreenTea() {
  this.name = '';
  this.id = '';
}
GreenTea.prototype.type = 'GreenTea';
module.exports = GreenTea;