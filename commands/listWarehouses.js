const warehouses = require('../data/warehouses');

function listWarehouses() {
  console.log('Warehouses:');
  warehouses.forEach((warehouse) => {
    const { warehouseNumber, warehouseName, state, location } = warehouse;
    console.log(`Warehouse Number: ${warehouseNumber}`);
    console.log(`Warehouse Name: ${warehouseName}`);
    console.log(`State: ${state}`);
    console.log(`Location: ${location}`);
    console.log('---');
  });
}

module.exports = listWarehouses;
