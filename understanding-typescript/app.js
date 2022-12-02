// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // 'tuple' type -- fixed length array
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],  // hobbies is type string[]
//     role: [2, 'author']
// };
// person.role.push('admin'); // 'push' is an exception and is allowed
// person.role[1] = 10; // cannot change from string to number!
// person.role = [0, 'admin', 'user']; // this is not allowed! we set the tuple length to 2!
// let favoriteActivities: string[]; // can use any[], but that removes the benefits of typescript
// favoriteActivities = ['Sports'];
// // console.log(person.name);
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase()) // method available because hobby is a string type
// }
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
// ENUM Type: enum {NEW, OLD}  Automatically enumerated global constant identifiers
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // Often, enums will be all-uppercase values but it's not a 'must-do'
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities; // can use any[], but that removes the benefits of typescript
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // method available because hobby is a string type
}
if (person.role === Role.AUTHOR) {
    console.log('is read only');
}
