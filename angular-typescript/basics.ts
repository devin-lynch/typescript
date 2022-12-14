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

// # ## # ## # ## # ## # ## # ## # ## #


// Functions & types

function add(a: number, b: number) {
    return a + b; // this return is using type inference! (number obviously) -- remember that functions not only use type for the params, but also the return value!
}

function printOutput(value: any) { // has a special return type: void. this function never returns! will be undefined as void type.
    console.log(value);
}

// # ## # ## # ## # ## # ## # ## # ## #


// Generics

function insertAtBeginning<T>(array: T[], value: T) {  // standard practice to use 'T' in the '<>' -- tells us that the array type should be the same as the value type!
    const newArray = [value, ...array]; // spread operator
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
insertAtBeginning(['a', 'b', 'c'], 'd') // array type matches value type!

// updatedArray[0].split(''); // can't call split on a number, but since we used the 'any' type definition initially, typescript wouldn't know!

// # ## # ## # ## # ## # ## # ## # ## #


// Classes

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[]; // private keyword in front of property definition!

    // constructor(first: string, last: string, age: number, courses: string[]) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.courses = courses;
    // }

    constructor(  // same result as the code above! shorthand notation. defines the types, properties, and the values of the properties
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}

    enroll(courseName: string) { // no function keyword! this is a method!
        this.courses.push(courseName)
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 29, ['Angular']);
student.enroll('React'); // public methods/properties can be accessed outside of the class using dot notation -- private cannot!
// student.courses // would result in an error due to the private keyword! dot notation unavailable!
student.listCourses() // Angular, React

// student.courses => Angular, React

// # ## # ## # ## # ## # ## # ## # ## #


// Interfaces -- feature which only exists in TS, not vanilla JS. any interface code will NOT be compiled to JS! Object type definitions.

interface Human {
    firstName: string;
    age: number;

    greet: () => void; // how to add a method
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

// Interfaces can be implemented by classes. When they are, they force classes to have that structure defined by interfaces. This can be helpful if you're building an app with multiple devs and want to be sure a certain class has a specific structure. 
class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!')
    }
}

