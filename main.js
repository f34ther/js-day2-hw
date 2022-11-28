let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}
// function stringing() {

//     if (person3.isArray == true) {
//         x = person3.flat()
//         for (let i = 0; i < x.length; i++) {
//             console.log(x[i])
//         }
//     } else {
//         return Object.values(person3)
//     }
// }
// console.log(stringing())
function sticking() {
    for (const property in person3) {
        console.log(`${property}: ${person3[property]}`);
    }
}

console.log(sticking())

// function eaching(item) {
//     console.log(item);
// }
// console.log(eaching())

// let countUp = (function () {
//     let counter = 0;
//     class Person {
//         constructor(name, age) {
//             this.name = name;
//             this.constructor.counter = (this.constructor.counter || 0) + 1;
//             this.age = this.constructor.counter + age;
//         }
//         printInfo() {
//             return `Name: ${this.name} \n Age: ${this.age}`

//         }
//     }
//     return function () { return age.push(counter++) }
// })()
let runningTotal = { value: 0 };
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    addUP() {
        return runningTotal.value++;
    }
    printInfo() {
        return `Name: ${this.name}\nAge: ${this.age + this.addUP()}`
    }
}
let wilma = new Person('Wilma', 25);
let mark = new Person('Mark', 2);
console.log(wilma.printInfo())
console.log(wilma.printInfo())
console.log(wilma.printInfo())
console.log(wilma.printInfo())

//promise based function to check string
// to see if it's greater than 10
//if greater than ten: 'Big word'
// if smaller: 'Small Word'

// return new Promise( (resolve, reject) => {
//if.... resolve(true)
//else... reject(false)
//}}
/* .then (result) => console.log...
.catch (error) => {console.log...}*/

function checking(word) {
    return new Promise((resolve, reject) => {
        if (word.length > 10) {
            resolve('Big Word')
        } else {
            reject('Small Word')
        }
    })
        .then((result) => {
            console.log(`This word, (${word}), is a ${result}`)
        })
        .catch((error) => {
            console.log(`This word, (${word}), is a ${error}`)
        })
}

console.log(checking('happy'))
console.log(checking('applejackssssss'))
