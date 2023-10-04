interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function store_car_info(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    let carInfo: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of extras) {
        carInfo[key] = value;
    }

    return carInfo;
}

// Call the function with car information and extra details
let carDetails = store_car_info("Toyota", "Camry", ["color", "Blue"], ["year", 2022], ["features", ["GPS", "Sunroof"]]);

console.log(carDetails);
