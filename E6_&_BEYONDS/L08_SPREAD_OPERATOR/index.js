let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true);

console.log(example1);
console.log(example2);

let example3 = {
	firstName: 'Subhadeep',
	lastName: 'Chel'
};

let example4 = {
	...example3
};

console.log(example3);
console.log(example4);
