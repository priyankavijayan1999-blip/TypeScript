/*
type EmployeeRecord = {
  id: number;
  name: string;
  role: string;
  active: boolean;
} ;

let employees: EmployeeRecord[] = [
  { id: 1, name: "Giri", role: "Tester", active: true },
  { id: 2, name: "ravi", role: "Developer", active: false },
  { id: 3, name: "Charan", role: "Manager", active: true }
];
console.log(employees);
*/

//filter active employees//
/*
let employees = [
  { id: 1, name: "Priya", role: "Tester", active: true },       //true 
  { id: 2, name: "dia", role: "Developer", active: false}       //false
];
let activeEmployees = employees.filter(emp => emp.active);
console.log(activeEmployees);                                                     // only true value in output using filter method

*/

//map only get names //
/*
let employees = [
  { id: 1, name: "Priya", role: "Tester", active: true },
  { id: 2, name: "dia", role: "Developer", active: false}
];
let employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);                                                      // only names in output using map method 
*/

//find by role//

