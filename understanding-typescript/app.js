// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
// person.role[1] = 10;
var favoriteActivities; // can use any[], but that removes the benefits of typescript
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // method available because hobby is a string type
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
