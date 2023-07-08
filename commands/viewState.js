const states = require('../data/states');
const warehouse = require('../data/warehouses');
function viewState() {
  // Iterate over the states and display their information
  states.forEach((state) => {
    console.log(`State Name: ${state.stateName}`);
    console.log(`State Code: ${state.stateId}`);
    console.log(`Number of Warehouses: ${warehouse.states}`);
    console.log(`Total Stock Capacity: ${warehouse.stockLimit}`);
    console.log('----------------------');
  });
  
}

module.exports = viewState;
