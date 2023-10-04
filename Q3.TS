let personName: string = "Eric";

// Convert to lowercase
let lowercaseName: string = personName.toLowerCase();

// Convert to uppercase
let uppercaseName: string = personName.toUpperCase();

// Convert to titlecase
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

let titlecaseName: string = toTitleCase(personName);

console.log(`Original Name: ${personName}`);
console.log(`Lowercase Name: ${lowercaseName}`);
console.log(`Uppercase Name: ${uppercaseName}`);
console.log(`Titlecase Name: ${titlecaseName}`);
