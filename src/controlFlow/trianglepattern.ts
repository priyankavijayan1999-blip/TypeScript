/*
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}*/

/*
let result = "";

for (let ch of ["A","B","C","D","E","F"]) {
    result += ch + " ";
    console.log(result.trim());
}
*/                   //method one 

export {};

let rows = 6;

for (let i = 0; i < rows; i++) {
    let line = "";

    for (let j = 0; j <= i; j++) {
        line += String.fromCharCode(65 + j) + " ";
    }

    console.log(line.trim());
    console.log(line.length);
}
