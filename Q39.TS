function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with different city-country pairs
let location1 = city_country("Lahore", "Pakistan");
let location2 = city_country("New York", "USA");
let location3 = city_country("Sydney", "Australia");

console.log(location1);
console.log(location2);
console.log(location3);
