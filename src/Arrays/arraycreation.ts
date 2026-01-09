//BASIC Array//
/*let numbers: number[] = [1, 2, 3, 4, 5];
     
console.log(numbers);
*/
// Using generic type
/*
let names: Array<string> = ["Giri", "Suganthan", "Prasath"];
console.log(names);
*/
// Mixed type (union)
/*
let mixed: (string | number)[] = ["Test", 100, "QA", 200];
console.log(mixed);
*/
// Empty array with push
let tasks: string[] = [];
let numbers: number[] = [];
let names: string[] = [];
let mixed: (string | number)[] = [];
tasks.push("Login Test");
tasks.push("Signup Test");

console.log(numbers);
console.log(names);
console.log(mixed);
console.log(tasks);