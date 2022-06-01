const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// we can use an alias for our tuple for reusability
type Drink = [string, boolean, number]
// for tuple
// const pepsi: [string, boolean, number] = ['brown', true, 40]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]

// order in tuple is very essential for us.

// why we dont use tuples often