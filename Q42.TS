function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }

    return great_magicians;
}

// Call the function to make magicians great
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let great_magicians = make_great(magician_names);

// Print the great magicians
console.log("Great Magicians:");
show_magicians(great_magicians);
