const orders = require('../data/orders');

function viewOrders() {
  console.log('Orders:');
  orders.forEach((order) => {
    const { customerId, orderData, fulfillmentStatus, linkedWarehouse } = order;
    console.log(`Customer ID: ${customerId}`);
    console.log(`Order Data: ${orderData}`);
    console.log(`Fulfillment Status: ${fulfillmentStatus}`);
    console.log(`Linked Warehouse: ${linkedWarehouse}`);
    console.log('---');
  });
}

module.exports = viewOrders;
