let current_users: string[] = ["john", "jane", "eric", "alice", "admin"];
let new_users: string[] = ["John", "JaneDoe", "Mike", "Sarah", "Admin"];

for (let new_user of new_users) {
    let is_unique = !current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    
    if (is_unique) {
        console.log(`Username '${new_user}' is available.`);
    } else {
        console.log(`Username '${new_user}' is already taken. Please choose a different username.`);
    }
}
