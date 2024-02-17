function updateStore(stockArray, deliveryArray) {
    'use strict';

    let store = {};

    // Process the current stock
    for (let i = 0; i < stockArray.length; i += 2) {
        let product = stockArray[i];
        let quantity = Number(stockArray[i + 1]);

        store[product] = quantity;
    }

    // Process the products from the delivery
    for (let i = 0; i < deliveryArray.length; i += 2) {
        let product = deliveryArray[i];
        let quantity = Number(deliveryArray[i + 1]);

        // If the product is already in the store, increase its quantity
        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            // If the product is not in the store, add it with the given quantity
            store[product] = quantity;
        }
    }

    // Print the result in the specified format
    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

// Example usage:
let currentStock = ['apple', '5', 'banana', '10', 'orange', '8'];
let deliveryProducts = ['banana', '5', 'grape', '12', 'apple', '3'];

updateStore(currentStock, deliveryProducts);