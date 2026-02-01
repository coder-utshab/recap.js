//filter selected elements based on a condition and return as array 
//with the elemnets that fulfilled the condition

const numbers = [ 1, 5, 21, 26,];
const players = [75, 65, 67, 72, 55, 59];
const selected = players.filter(p => p > 60);
console.log(selected)