function add(nums) {

	console.log(arguments);
};

function plus(...nums) {

	console.log(nums);
};

add(4, 5, 6, 7, 8, 9, 10);
plus(4, 5, 6, 7, 8, 9, 10);