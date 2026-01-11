/*
let scores: number[] = [80, 92, 65, 100, 88];
let updatedScores = scores.map(score => score + 5);       //map_transform
console.log("Original Scores:", scores);
console.log("Updated Scores:", updatedScores);
*/
// filter → conditional
/*
let scores: number[] = [80, 92, 65, 100, 88];
let passingScores = scores.filter(score => score >= 70);
let highScores = scores.filter(score => score > 85);
console.log("Passing Scores:", passingScores);
console.log("High Scores:", highScores);
*/

// reduce → accumulate
let scores: number[] = [80, 92, 65, 100, 88];
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
console.log("Total Score:", total);
console.log("Average Score:", average);