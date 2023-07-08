const readline = require('readline');
const fs = require('fs');
const addProduct = require('./commands/addProduct');
const addWarehouse = require('./commands/addWarehouse');
const addState = require('./commands/addState');
const addStock = require('./commands/addStock');
const viewState = require('./commands/viewState');
const viewOrders = require('./commands/viewOrders');
const listProducts = require('./commands/listProducts');
const listWarehouses = require('./commands/listWarehouses');
const warehouseInfo = require('./commands/warehouseInfo');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

// Set up command history logging
const commandHistoryFilePath = 'command-history.log';
let commandBatch = '';

// Function to log command history in batches of 2
async function logCommandHistory(command) {
  commandBatch += `${command}\n`;

  if (commandBatch.split('\n').length === 3) {
    fs.appendFile(commandHistoryFilePath, commandBatch, (err) => {
      if (err) {
        console.error('Error logging command history:', err);
      }
    });
    commandBatch = '';
  }
}

// Display prompt and listen for user input
rl.prompt();

// Process user input
rl.on('line', async (line) => {
  const input = line.trim();

  // Log command history
  await logCommandHistory(input);

  // Parse command and arguments
  const [command, ...args] = input.split(' ');

  switch (command.toLowerCase()) {
    case 'add':
      handleAddCommand(args);
      break;
    case 'addwarehouse':
      handleAddWarehouseCommand(args);
      break;
    case 'addstate':
      handleAddStateCommand(args);
      break;
    case 'addstock':
      handleAddStockCommand(args);
      break;
    case 'viewstate':
      handleViewStateCommand();
      break;
    case 'vieworders':
      handleViewOrdersCommand();
      break;
    case 'listproducts':
      handleListProductsCommand();
      break;
    case 'listwarehouses':
      handleListWarehousesCommand();
      break;
    case 'warehouseinfo':
      handleWarehouseInfoCommand(args);
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Invalid command. Please try again.');
  }

  rl.prompt();
});

// Close the readline interface and log the remaining command history
rl.on('close', () => {
  fs.appendFile(commandHistoryFilePath, commandBatch, (err) => {
    if (err) {
      console.error('Error logging command history:', err);
    }
    console.log('Exiting the inventory management tool...');
    process.exit(0);
  });
});

// ADD PRODUCT command handler
function handleAddCommand(args) {
  addProduct(args);
}

// ADD WAREHOUSE command handler
function handleAddWarehouseCommand(args) {
  addWarehouse(args);
}

// ADD STATE command handler
function handleAddStateCommand(args) {
  addState(args);
}

// ADD STOCK command handler
function handleAddStockCommand(args) {
  addStock(args);
}

// VIEW STATE command handler
function handleViewStateCommand() {
  viewState();
}

// VIEW ORDERS command handler
function handleViewOrdersCommand() {
  viewOrders();
}

// LIST PRODUCTS command handler
function handleListProductsCommand() {
  listProducts();
}

// LIST WAREHOUSES command handler
function handleListWarehousesCommand() {
  listWarehouses();
}

// WAREHOUSE INFO command handler
function handleWarehouseInfoCommand(args) {
  warehouseInfo(args);
}
