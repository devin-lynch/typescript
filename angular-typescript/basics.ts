// Primatives: numbers, strings, booleans
// More complex types: arrays, objects
// Function types, parameters

// # ## # ## # ## # ## # ## # ## # ## #


// Primatives

let age: number = 24; // can be a float as well
age = 12; 

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// let hobbies: null; // typically don't delcare a null type
// hobbies = 12;

// # ## # ## # ## # ## # ## # ## # ## #


// More complex types

let hobbies: string[]; // an array of strings
hobbies = ['Sports', 'Cooking'];

// let person: {
//     name: string,
//     age: number
// }; 
// person = {
//     name: 'Max',
//     age: 29
// };

// let people: {  // storing an array of objects!
//     name: string;
//     age: number;
// }[]; // notice the brackets after the object!

// # ## # ## # ## # ## # ## # ## # ## #


// Type inference

let course = 'React - The Complete Guide';
// course = 12341; // by default typescript tries infer as many types as possible without you explicitly stating the type. Above, we immediately initialized 'course' with a string type!

// # ## # ## # ## # ## # ## # ## # ## #


// Union types

let lesson: string | number; // allows multiple types by adding a 'pipe'

// # ## # ## # ## # ## # ## # ## # ## #


// Type aliases

type Person = {
    name: string,
    age: number
}; 

let person: Person;

let people: Person[];