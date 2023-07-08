const warehouses = require('../data/warehouses');

function warehouseInfo(args) {
  const [warehouseNumber] = args;
  const warehouse = warehouses.find((w) => w.warehouseNumber === warehouseNumber);

  if (!warehouse) {
    console.log('Invalid warehouse number. Warehouse not found.');
    return;
  }

  console.log('Warehouse Information:');
  console.log(`Warehouse Number: ${warehouseNumber}`);
  console.log(`Warehouse ID: ${warehouse.id}`);
  console.log('Available SKUs:');
  // Add logic to list the available SKUs in the warehouse
  console.log(`Available Storage: ${warehouse.availableStorage === -1 ? 'Unlimited' : warehouse.availableStorage}`);
}

module.exports = warehouseInfo;
