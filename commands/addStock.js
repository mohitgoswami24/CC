const products = require('../data/products');
const warehouses = require('../data/warehouses');

function addStock(args) {
  const [sku, warehouseNumber, quantity] = args;

  // Find the product by SKU in the product catalog
  const product = products.find((product) => product.sku === parseInt(sku, 10));

  // Find the warehouse by warehouse number
  const warehouse = warehouses.find((warehouse) => warehouse.warehouseNumber === warehouseNumber);

  if (!product) {
    console.log(`Invalid SKU: ${sku}`);
    return;
  }

  if (!warehouse) {
    console.log(`Invalid warehouse number: ${warehouseNumber}`);
    return;
  }
  
  // Check if the warehouse has a stock limit
  if (warehouse.stockLimit !== -1) {
    const availableStorage = parseInt(warehouse.availableStorage);
    
    const stockLimit = parseInt(warehouse.stockLimit);
    if (quantity <= warehouse.availableStorage){
      console.log(`Stock added successfully for SKU: ${sku} in Warehouse: ${warehouseNumber}`); 
    }
    else{
      console.log(`Stock limit exceed , only ${warehouse.availableStorage} stock is added for: ${sku} in Warehouse: ${warehouseNumber}`); 

    }
    
  }


}

module.exports = addStock;
