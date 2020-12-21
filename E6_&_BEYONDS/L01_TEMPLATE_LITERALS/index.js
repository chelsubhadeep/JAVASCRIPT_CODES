let word1 = 'Subhadeep';
let word2 = 'Chel';

fullName = word1 + ' ' + word2;
console.log(fullName);

fullName = `${word1} ${word2}`;
console.log(fullName);

let num1 = 2;
let num2 = 3;

let example1 = 'Hello\n' + 'World';
console.log(example1)
document.getElementById("example").innerText = example1;

let fName = 'Subhadeep';
let lName = 'Chel';
let example2 = `${fName}
${lName}`
console.log(example2)
//'${fName} ${lName}'; // STILL HAVE PROBLEMS
document.getElementById("example2").innerText = example2;