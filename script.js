
const people = [
    {
        name: 'John',
        age: 40,
        position: 'developer',
        price: 456.99,
        amount: 1
    },
    {
        name: 'Peter',
        age: 23,
        position: 'painter',
        price: 399.67,
        amount: 2
    },
    {
        name: 'Frank',
        age: 33,
        position: 'mechanic',
        price: 143.99,
        amount: 3
    },
    {
        name: 'Rutger',
        age: 73,
        position: 'doctor',
        price: 635.99,
        amount: 4
    },
    {
        name: 'Elhan',
        age: 49,
        position: 'mechanic',
        price: 251.89,
        amount: 5
    }
]

const fruits = ['orange', 'banana', 'pear', 'mango']
const friends = ['jim', 'bob', 'mick', 'frank', 'anna', 'abdul']

const me = people.map((p) => {
    return p.position
})

const you = new Set(me)

console.log(you);

const who = [...you]

console.log(who);