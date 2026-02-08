// Error no 1
/*
let playerName = "Messi";
console.log(playerName);

playerName = 25;    // value must be string but we are assigning number. This will cause error in typescript because of type mismatch.
console.log(playerName);
*/

// Solution

let playerName = "Messi";

playerName = "Cristiano Ronaldo";    // value must be string. Now error is resolved because we are assigning string value to playerName variable.
console.log(playerName);

//--------------------------------

// Error no 2
/*
function add(a, b) {   // parameters a and b are not typed. This will cause error in typescript because of implicit any type.
    return a + b;
}

console.log(add("Hello", 5));
*/

// Solution

function add(a: number, b: number): number {   // parameters a and b are typed as number. This will resolve the error because we are specifying the types of parameters.
    return a + b;
}

console.log(add(10, 5));    // Now we are passing number values to the add function, so it will work without any error.

//--------------------------------

// Error no 3 (Array type mismatch)

let numbers = [1, 2, 3, 4, 5];
numbers.push(6);    // This is allowed because we are pushing a number to a number array.

// numbers.push("Hello");    // This will cause an error because we are trying to push a string to a number array.

console.log(numbers);

//---------------------------
// Error no 4 (Object type mismatch)

const person = {
    name: "John",
    age: 30
};

// person.name = 25;    // This will cause an error because we are trying to assign a number to a string property.

person.name = "Doe";    // This is allowed because we are assigning a string to a string property.

//---------------------------