const products = require('../data/products');

function listProducts() {
    console.log('Product Catalog:');
    products.forEach((product) => {
      const { productName, sku } = product;
      console.log(`Product Name: ${productName}`);
      console.log(`SKU: ${sku}`);
      console.log('---');
    });
  }
  
  module.exports = listProducts;
  
