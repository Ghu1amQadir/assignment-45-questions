function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }

    return great_magicians;
}

// Original array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Make a copy and modify it
let great_magicians = make_great([...magician_names]);

// Print both arrays
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
