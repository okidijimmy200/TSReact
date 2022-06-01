class Vechile {

    constructor (public color: string) {
        
    }

    protected hank(): void {
        console.log('beep')
    }
}

const vechile = new Vechile('orange')
console.log(vechile.color)

class Car extends Vechile{
    constructor(public wheels: number, color: string) {
        super(color);
    }
    // override Vechile
    private drive(): void {
        console.log('vroom')
    }
    startDrivingProcess(): void {
        this.drive();
    }

}
// create an instance of the class
const car = new Car(4, 'red')

car.startDrivingProcess()
// class Vechile {
//     drive(): void {
//         console.log('test work')
//     }
//     hank(): void {
//         console.log('beep')
//     }
// }


// class Car extends Vechile{
//     // override Vechile
//     drive(): void {
//         console.log('vroom')
//     }

// }
// // create an instance of the class
// const car = new Car()

// car.drive()
// car.hank()