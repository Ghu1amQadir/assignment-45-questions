function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`You've ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Create a large shirt with default message
make_shirt();

// Create a medium shirt with default message
make_shirt("Medium");

// Create a small shirt with a custom message
make_shirt("Small", "Keep Coding!");
