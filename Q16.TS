let guestList: string[] = ["Albert Einstein", "Isaac Newton", "Marie Curie"];

// Inform about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");

// Add a new guest to the beginning
guestList.unshift("Nikola Tesla");

// Add a new guest to the middle
guestList.splice(Math.floor(guestList.length / 2), 0, "Ada Lovelace");

// Add a new guest to the end
guestList.push("Charles Darwin");

// Print new set of invitation messages
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to a dinner party at my place. It would be an honor to have you there.`);
}
