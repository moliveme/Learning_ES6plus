// notes
// 1.  Template literals 
// ...are enclosed by backtick ( ` ) characters instead of double or single quotes.
// backticks can be used to do away with the need for breaks in strings
// eg. var1 + " " + var2 can be written as `${var1} ${var2}`
// ${var1}
// ${var2} gives the output on 2 diff lines

// 2. destructuring objects
// JavaScript Object Destructuring is an expression which allows 
// us to access the data from objects like arrays, objects, maps and 
// assign it to new variables. Through this object destructuring, 
// we can create variables easily from the object's properties

const personalInfo = {

    firstName: 'mridu',
    lastName: 'vin'

};

const {firstName} = personalInfo;

console.log(firstName) // logs out mridu

const {lastName: ln} = personalInfo;

console.log(ln) // logs out vin

const {lasName: ln2, firstName: fn1} = personalInfo;

console.log(ln2) // logs out undefined

// destructuring arrays

let [fn3, mn, ln3] = ['dylan', 'yes', 'me', 'you'];

console.log(mn); // logs out yes

mn = "no"

console.log(mn) // logs out no

// 3. object literals 
// (some comma separated variables placed in curly braces or something)

function addressMaker(city, state) {
    const newAdress = {city, state};

    console.log(newAdress); // logs out city and state
    console.log(newAdress.city) // logs out city
}

addressMaker('Austin', 'Tx')

function addressMaker2(city, state) {
    const newAdress2 = {thisCity: city, thisState: state};

    console.log(newAdress2) // logs out city and state

    const {thisCity} = newAdress2;
    console.log(thisCity) // logs out city

    console.log(newAdress2.thisCity) // logs out city
}

addressMaker2('Berk', 'Cali')

// combining all 3

function addressMaker3(address) {

    const {city, state} = address;

    const newAdress = {
        city,
        state,
        country: 'USA'
    };

    console.log(newAdress); // logs out city, state, country


}

addressMaker3({city: 'Aust', state: 'Tx2'});

// for loop
// for can be used with let, const etc
// can iterate over string, arrays

// objects using let
// since modifiable, can inherit a prev obj (so inherits its vars and methods)

// spread and rest operators important
// ...nums
// ...obj1 (inheritance)

// arrow functions
// reduce


// next 9 lines work together
function add(array) {

    array.forEach(element => {

        console.log(element)
        
    });
}

add([3, 6, 4, 9])

// next 9 lines work toegther
function add2(...array) {

    array.forEach(element => {

        console.log(element)
        
    });
}

add2(3, 4, 4, 5)

// next 9 lines works toegther, but entire array is treated as a single element
function add4(...array) {

    array.forEach(element => {

        console.log(element)
        
    });
}

add4([12, 34, 1, 50])

// next 9 lines DONT work toegther when you uncomment the forEach loop
function add3(array) {

    // array.forEach(element => {

    //     console.log(element)
        
    // });
}

add3(323, 234, 12, 5) // can also replace array argument with array = [] argument

// includes, indexof method for arrays

// const vars that are arrays/objects can be changed. but
// strings, bools, nums cant be

// export and import objects to and from another js file is possible! 
// then that object can be modified by multiple js files

// var.padStart(10, 'a') and var.padEnd(10, 'a'): makes sure var is atleast 10 chars long by 
// padding a to start or end as needed

// can use classes, constructors, this
// with static methods, dont need a instance of the class to call it

// can do error handling for functions too!!

function produceError(array) {

    try {

        array.forEach(el => {

            console.log(el)
    
        })

    } catch (error) {

        console.log(error);
    
    }

}

produceError(2, 3, 23, 23)

console.log("check passed")

// async and await
// while fetching data from an api, best to write async functions (add async modifier to funx)
// use await keyword in front of a value to ask to wait before a data is fetched 
// before keeping on with the func
// used while fetching from DB too

// sets
// only care about unique values