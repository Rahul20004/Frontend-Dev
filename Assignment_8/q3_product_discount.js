/****

// Constructor function
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method
Product.prototype.applyDiscount = function (percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

// Creating products
const product1 = new Product("Laptop", 50000);
const product2 = new Product("Mobile", 20000);
const product3 = new Product("Headphones", 3000);

// Applying discounts
console.log("Laptop price after 10% discount:", product1.applyDiscount(10));
console.log("Mobile price after 20% discount:", product2.applyDiscount(20));
console.log("Headphones price after 30% discount:", product3.applyDiscount(30));

/*
Abstraction explanation (in comments):
The internal discount calculation is hidden inside applyDiscount().
User just passes the percentage and gets the new price, without knowing the logic.
*/
