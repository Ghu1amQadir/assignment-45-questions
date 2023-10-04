function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for cities in different countries
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Sydney"); // Default country will be used
