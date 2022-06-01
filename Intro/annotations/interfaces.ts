// interface (used for similar properties)
interface Reportable {
    // shd have a function of summary with string
    summary(): string;
}

// define obj tht represents car
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    day: new Date(),
    summary(): string {
        return `Name: ${this.name}`
    }
}

// func to take obj and print different props about it
const printSummary = (vechile: Reportable): void => {
    console.log(vechile.summary());
}

printSummary(oldCivic)




// // interface (used for similar properties)
// interface Vechile {
//     name: string;
//     year: number;
//     broken: boolean;
//     day: Date;
//     // shd have a function of summary with string
//     summary(): string;
// }

// // define obj tht represents car
// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true,
//     day: new Date(),
//     summary(): string {
//         return `Name: ${this.name}`
//     }
// }

// // func to take obj and print different props about it
// const printVechile = (vechile: Vechile): void => {
//     // void means our function returns nothing
//     // console.log(`Name: ${vechile.name}`)
//     // console.log(`Year: ${vechile.year}`)
//     // console.log(`Broken? ${vechile.broken}`)
//     // console.log(`Day? ${vechile.day}`)

//     // we can write
//     console.log(vechile.summary());
// }

// printVechile(oldCivic)