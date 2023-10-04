let guestList: string[] = ["Nikola Tesla", "Albert Einstein", "Isaac Newton", "Ada Lovelace", "Marie Curie", "Charles Darwin"];

// Inform about the smaller dinner table
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only accommodate two guests.");

// Remove guests from the list
let removedGuests = guestList.splice(2);

// Print messages to the remaining guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I'm sorry to inform you that due to unforeseen circumstances, we can only accommodate two guests at the dinner. We hope to have the pleasure of your company at a future event.`);
}

// Print messages to the removed guests
for (let i = 0; i < removedGuests.length; i++) {
    console.log(`Dear ${removedGuests[i]}, I'm sorry to inform you that due to unforeseen circumstances, we can only accommodate two guests at the dinner. We hope to have the pleasure of your company at a future event.`);
}
let guestList: string[] = ["Nikola Tesla", "Albert Einstein", "Isaac Newton", "Ada Lovelace", "Marie Curie", "Charles Darwin"];

// Print message about inviting only two people
console.log("Unfortunately, we can only invite two people for dinner.");

// Remove guests until only two remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}, I'm sorry to inform you that we can't invite you to dinner this time.`);
}

// Print invitations to the remaining guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you're still invited to the dinner!`);
}

// Empty the guest list
guestList.splice(0);

// Print the guest list to ensure it's empty
console.log("Guest list:", guestList);
