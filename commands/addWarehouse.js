

function addWarehouse(args) {
  const [warehouseNumber, warehouseName, state, location, availableStorage,stockLimit] = args;

 

  // Create a new warehouse object
  const newWarehouse = {
    warehouseNumber,
    warehouseName,
    state,
    location,
    availableStorage,
    stockLimit: parseInt(stockLimit) || -1
  };



  console.log('Warehouse added successfully!');
}

module.exports = addWarehouse;
