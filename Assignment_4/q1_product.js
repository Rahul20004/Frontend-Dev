// q1_product.js
"use strict";

// Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount
    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
    }

    // Display formatted product details
    display() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Create products
const products = [
    new Product(1, "Laptop", 45000, "Electronics"),
    new Product(2, "Shoes", 999, "Fashion"),
    new Product(3, "Smartphone", 18000, "Electronics"),
    new Product(4, "Bag", 750, "Accessories")
];

// Apply discount to first item
products[0].applyDiscount(10);

// Filter products with price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);

console.log("Products priced above 1000:");
expensiveProducts.forEach(p => console.log(p.display()));
