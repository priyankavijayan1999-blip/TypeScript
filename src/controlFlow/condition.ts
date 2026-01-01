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

let i = 1;
let count = 0; // To count even numbers

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
        count++; // Increase the count every time we find an even number
    }
    i++;
}

console.log("Total even numbers:", count);
