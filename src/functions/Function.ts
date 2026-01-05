/*
function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(3));
 */

//1)named function expression//

/*
function add(a: number, b: number): number {
  return a + b;
}
console.log("1:", add(3, 4));
*/

//2)arrow function expression//

/*const square = (x: number): number => x * x;
console.log("2:", square(5));
*/
//3)anonymous function expression//
/*
const welcome = function(name: string): string {
  return `Hello, ${name}`;
};
console.log("3:", welcome("Dia yadhira"));

*/
//4)Default parameter//
/*
function greetUser(name: string = "dia"): string {
  return `Welcome, ${name}!`;
}
console.log("4:", greetUser());
console.log("4:", greetUser("Yadhira"));
*/
//5)Optional parameter///
/*
function fullName(first: string, last?: string): string {
  return last ? `${first} ${last}` : first;
  }
console.log("5:", fullName("John"));
console.log("5:", fullName("John", "Doe"));
*/
//6)Rest parameter//
/*
function sum(...nums: number[]): number {
  return nums.reduce((acc, v) => acc + v, 0);
}
console.log("6:", sum(1, 2, 3, 4));
*/

//7)function returning void//
/*function logMessage(msg: string): void {
  console.log("7: Log:", msg);
}
logMessage("TypeScript is cool");
*/
//8)function returning boolean//
/*
function isEven(n: number): boolean {
  return n % 2 === 0;
}
console.log("8:", isEven(10));
*/
///9)recursive function//
/*
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("9:", factorial(5));
*/
//10)high order function//
/*
function applyOperation(a: number, b: number, op: (x: number, y: number) => number): number {
return op(a, b);
}
console.log("10:", applyOperation(3, 4, (x, y) => x + y));
*/
//11)function returning another function//
/*
function multiplier(factor: number) {
  return (x: number) => x * factor;
}
const double = multiplier(2);
console.log("11:", double(10));
*/
//12)Generic function//
/*
function identity<T>(value: T): T {
  return value;
}
console.log("12:", identity<number>(42));
console.log("12:", identity<string>("TS"));
*/
//13)Array creation function//
/*
let myNumbers: number[] = [1, 2, 3, 4];
console.log("13:", myNumbers);
*/

//14)Array iteration(for each)//
/*
let myNumbers: number[] = [1, 2, 3, 4];
console.log("14:");
myNumbers.forEach(n => console.log("  ", n * 2));
*/
//15)for..of ..loop//
/*
let myNumbers:number [] = [1, 2, 3, 4];
console.log("15:");
for (let n of myNumbers) {
  console.log("  ", n);
}
  */
//16)Array push and pop//
/*
let myNumbers: number[] = [1, 2, 3, 4];
myNumbers.push(5);
console.log("16:", myNumbers);
myNumbers.pop();
console.log("16:", myNumbers);
myNumbers.pop();
console.log("16:", myNumbers);
*/
//17)Array shift and unshift//
/*
let myNumbers: number[] = [1, 2, 3, 4, 5];
myNumbers.unshift(0);
console.log("17:", myNumbers);
myNumbers.shift();
console.log("17:", myNumbers);
*/
//18)Array map//
let myNumbers = [1, 2, 3, 4];
let squared = myNumbers.map(n => n * n);
console.log("18:", squared);
