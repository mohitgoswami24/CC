const products = require('../data/products');

function addProduct(args) {
  const [productName, sku, category, subCategory, imageLink] = args;

  // Check if the SKU already exists
  const existingProduct = products.find((product) => product.sku === parseInt(sku, 10));
  if (existingProduct) {
    console.log('SKU already exists. Please provide a unique SKU.');
    return;
  }

  // Create a new product object
  const newProduct = {
    productName,
    sku: parseInt(sku, 10),
    category,
    subCategory,
    imageLink
  };

  // Add the new product to the product catalog
  products.push(newProduct);

  console.log('Product added successfully!');
}

module.exports = addProduct;
