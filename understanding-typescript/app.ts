// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple type! 
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],  // hobbies is type string[]
    role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[]; // can use any[], but that removes the benefits of typescript
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()) // method available because hobby is a string type
}




// ## # ## # ## # ## # ## # ## #

// // js object
// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!'
//     }
// }

// // the type of above object
// // {
// //     id: string;
// //     price: number;
// //     tags: string[];
// //     details: {
// //       title: string;
// //       description: string;
// //     }
// // }