//1

//let cars = [
//{ model: "Jeep", price: 50000, carMileage: 40000 },
//{ model: "Audi", price: 46000, carMileage: 80000 },
//{ model: "BMW", price: 32000, carMileage: 340000 },
//{ model: "Kia", price: 67500, carMileage: 70000 },
//{ model: "Geely", price: 22000, carMileage: 49000 },
//]

//function showPrice(arr) {
//let i = 0;
//let sum = arr
//.filter(({ carMileage }) => carMileage < 50000)
//.reduce((acc, { price }) => {
//i++;
// return acc + price;
//}, 0);
//return sum / i;
//};

//console.log(showPrice(cars));

//function showModel(arr) {
//return arr
//.filter(({ carMileage }) => carMileage < 50000)
//.map(({ model }) => model);
//};

//console.log(showModel(cars));

//2

//let student = {
// name: "Inga",
// age: "29",
//id: 1,
//}

//let studentData = Object.entries(student);
//let studentMap = new Map(studentData);

//studentMap.set('profession', 'frontend developer')
// .set('course', 'js');

//console.log(studentMap.has('name'));
//console.log(studentMap);

//3

//for (let key of studentMap.keys()) {
//console.log(key);
//};

//for (let value of studentMap.values()) {
//console.log(value);
//};

//for (let entry of studentMap.entries()) {
// console.log(entry);
//};

//4

//let amount = {
// apple: 440,
//burger: 316,
//juice: 1120,
//};

//let amountFruits = Object.fromEntries(
// Object.entries(amount).map(([key, value]) => {
//return [key, value / 2]
//})
//);

//console.log(amountFruits);

//5

//let amount = {
//apple: 440,
/// burger: 316,
//juice: 1120,
//};

//function showAmoutFruits(obj) {
//let sum = 0;
//for (let amount of Object.values(obj)) {
//sum += amount;
//}
//return sum;
//}

//console.log(showAmoutFruits(amount));

//6

//function showUniqueValues(arr) {
//return [...new Set(arr)]
//};

//7

const weather = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    }],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
}

let anotherWeather = JSON.parse(JSON.stringify(weather));

console.log(anotherWeather);