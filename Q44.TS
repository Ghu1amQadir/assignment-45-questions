function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with:");

    for (let item of items) {
        console.log(`- ${item}`);
    }

    console.log("Sandwich complete!\n");
}

// Call the function with different number of arguments
make_sandwich("Bread", "Ham", "Cheese", "Lettuce");
make_sandwich("Baguette", "Chicken", "Tomato");
make_sandwich("Wrap", "Turkey", "Avocado", "Bacon", "Mayonnaise");
