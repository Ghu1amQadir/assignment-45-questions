let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the names of the pizzas
console.log("Names of my favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log("\n");

// Print statements about the pizzas
console.log("Statements about my favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\n");

// Additional sentence
console.log("I really love pizza!");
