let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of the animals
console.log("Names of the animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\n");

// Print statements about the animals
console.log("Statements about the animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\n");

// Additional sentence
console.log("Any of these animals would make a great pet!");
