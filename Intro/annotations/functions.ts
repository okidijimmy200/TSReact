// return annotation
const add = (a: number, b: number): number => { 
    return a + b;
};

function divide(a: number, b: number): number {
     return a / b

 }

 const multiply = function(a: number, b: number): number {
     return a * b
 }

//  function where you cant return anythong
 const logger = (message: string): void => {
     console.log(message);
 }

const throwError = (message: string): never => {
    throw new Error(message)
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

// destructuring of objects
const logweather = ({ date, weather}: {date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}

logweather(forecast) 