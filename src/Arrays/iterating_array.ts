/*
let skills = ["Selenium", "Playwright", "Cypress", "API"];
for (let i = 0; i < skills.length; i++) {
  console.log(`Skill ${i + 1}: ${skills[i]}`);          //for loop
}
*/
//for of loop
/*
let skills = ["Selenium", "Playwright", "Cypress", "API"];
for (let skill of skills) {
  console.log("Using for-of:", skill);
}
*/
// for-in loop (indexes)
/*
let skills = ["Selenium", "Playwright", "Cypress", "API"];
for (let index in skills) {
  console.log(`Index ${index} = ${skills[index]}`);
}
  */
// forEach method
let skills = ["Selenium", "Playwright", "Cypress", "API"];
skills.forEach((skill, i) => {
  console.log(`forEach [${i}]: ${skill}`);
});