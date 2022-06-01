const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// annotations are mainly used when we r not sure what type of values we woul get
const carType: string[][]= []
// two dimensional arrays
const carsByMake = [
    ['f159'],
    ['corolla'],
    ['camaro']
]

// hellp extracting inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push('test');

// help with 'map'

carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// arrays with multiple different types
const importDates: (Date | string)[] = [new Date(), '2030-10-10'];

importDates.push(new Date());