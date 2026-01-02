/*const str = "TypeScript";
let count = 0;
for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++;
}
console.log(`Vowels: ${count}`);
*/
/*
let i = 1;
while (i <= 50) {
    if (i % 2 === 0) console.log(i);
    i++;
}
*/

/* let i = 1;
let count = 0; // To count even numbers

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
        count++; // Increase the count every time we find an even number
    }
    i++;
}

console.log("Total even numbers:", count);
*/
/*let num = 10; // you can change the number and test

if (num > 0) {
  console.log("The number is Positive");
} else if (num < 0) {
  console.log("The number is Negative");
} else {
  console.log("The number is Zero");
}
*/
/*
let marks: number =20; 
if (marks >= 90) { 
console.log("Grade A"); 
} else if (marks >= 75) { 
console.log("Grade B"); 
} else if (marks >= 50) { 
console.log("Grade C"); 
} else { 
console.log("Fail");
}
*/
/*let age: number = 17; 
 (age >= 18) ? "You can vote " : "You are too young "; 
console.log(age);
*/
/*
let age: number = 20; 
let canVote = (age >= 18) ? "You can vote" : "You are too young"; 
console.log(canVote);
*/
/*
let number = 4; 
let result = (number % 2 === 0) ? "Even Number" : "Odd Number"; 
console.log(result);
*/

/*
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
    */

/*
const text = "typescript loops";
let freq: Record<string, number> = {};

for (let ch of text) {
    if (ch === " ") continue;
    freq[ch] = (freq[ch] || 0) + 1;
}
console.log(freq);
*/

/*
const arr: number[] = [1, 2, 3, 4, 5];
let reversed: number[] = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);

*/

/*
const numsArr: number[] = [12, 45, 67, 23, 45];
let first = -Infinity, second = -Infinity;

for (let n of numsArr) {
    if (n > first) {
        second = first;
        first = n;
    } else if (n > second && n !== first) {
        second = n;
    }
}
console.log("Second largest:", second);
*/
/*
export {};

const nums: number[] = [5, -3, 0, 8, -1, 0];
let positive = 0, negative = 0, zero = 0;

for (let n of nums) {
    if (n > 0) positive++;
    else if (n < 0) negative++;
    else zero++;
}
console.log(`Positive:${positive}, Negative:${negative}, Zero:${zero}`);
*/
/*
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) { isPrime = false; break; }
    }
    if (isPrime) console.log(num);
  
}
*/
/*
for (let num = 2; num <= 100; num++) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) count++;
    }

    if (count === 2) {
        console.log(num);
    }
}
*/
const user = { name: "Alice", age: 25, city: "Delhi", active: true };

for (let key in user) {
    if (typeof user[key as keyof typeof user] === "string") {
        console.log(`${key}: ${user[key as keyof typeof user]}`);
    }
}