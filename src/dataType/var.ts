/*
let tasks: { id: number; title: string; done: boolean }[] = [
  { id: 1, title: "Learn TS", done: false },
  { id: 2, title: "Practice", done: true }
];
console.log(tasks);
*/

/*enum Role { Admin = "ADMIN", User = "USER" }
let priyaRole: Role = Role.Admin;
console.log(priyaRole);
*/

/*let project = {
  name: "Automation",
  members: ["Priya", "dia"],
  completed: false
};
console.log(project);*/

/*var score = 50;
if (true) {
  var score = 80;
}
console.log(score);*/

/*
let rank = 10;
if (true) {
  let rank = 20;
}
console.log(rank);*/

/*let priyaMap = new Map<string, number>();
priyaMap.set("marks", 90);
console.log(priyaMap);*/

/*let priyaSet = new Set<string>();
priyaSet.add("priya");
priyaSet.add("dia");
console.log(priyaSet);*/

/*type Skills = string[];
let priyaSkills: Skills = ["TS", "JS", "Node"];
console.log(priyaSkills);*/

/*interface Laptop {
  brand: string;
  price: number;
}
let lap:Laptop = { brand: "Dell", price: 50000 };
console.log(lap);
*/

/*interface Laptop {
  brand: string;
  price: number;
}
let lap: Partial<Laptop> = { brand: "Dell" };
console.log(lap);*/

/*type Person = { name: string; age: number };
let key: keyof Person = "name";
console.log(key);
*/

/*type Person = { name: string; age: number };

let keys: (keyof Person)[] = ["name", "age"];

keys.forEach((k) => console.log(k));
*/

/*interface User {
  readonly id: number;
  name: string;
}
let u: User = { id: 1, name: "priya" };
console.log(u);
*/

/*function printValue(v: number | string) {
  if (typeof v === "string") {
    console.log("String:", v);
  } else {
    console.log("Number:", v);
  }
}
printValue("priya");
*/

/*let age = 25;

if (typeof age === "number") {
  console.log("Valid age");
}
*/
/*
function createUser(id: number, name: string) {
  return { id, name };
}
console.log(createUser(1, "dia yadhira"));
*/
/*  
function wrap<T>(value: T): T[] {
  return [value];
}
console.log(wrap("Giri"));
*/

/*interface ApiResponse<T> {
  status: number;
  data: T;
}
let apiRes: ApiResponse<string> = {
  status: 200,
  data: "Success"
};
console.log(apiRes);
*/
/*function mergeObj<T, U>(a: T, b: U) {
  return { ...a, ...b };
}
console.log(mergeObj({ name: "priya" }, { age: 26 }));
*/

/*let mixData: (string | number | boolean)[] = ["vijayan", 100, true];
console.log(mixData);*/
/*
let tasks: { id: number; title: string; done: boolean }[] = [
  { id: 1, title: "Learn TS", done: false },
  { id: 2, title: "Practice", done: true }
];
console.log(tasks);
*/
/*function calculate(a: number, b: number) {
  const sum = a + b;
  let result = sum * 2;
  return result;
}
console.log(calculate(10, 20));
*/

/*let empData: { name: string; address: { city?: string } | null } = {
  name: "priya",
  address: null
};
console.log(empData.name);*/

/*
let nullableInfo: string | null = null;
let info = nullableInfo ?? "Default Value";
console.log(info);*/

let code: any = "123";
let numValue = code as string;
console.log(numValue);