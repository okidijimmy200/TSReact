const apples: number = 5;

let speed: string = 'fast'

let hasName: boolean = true;

let nothingMuch:null = null;
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// type annotation for arrays
let colors: string[] = ['green', 'red'];

let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false, true]

// classes

class Car {

}

let car: Car = new Car()

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
};


// when to use annotations
// 1) function that returns 'any' type
const json =" {'x': 10, 'y': 20}"
// annotate the json obj
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates)

// add type annotation manually(type inference)
// 2) declare variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean;

for (let i = 0;i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

// 3) when we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
