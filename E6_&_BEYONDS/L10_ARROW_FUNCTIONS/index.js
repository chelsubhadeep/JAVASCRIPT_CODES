function add(...nums) {
	// let total = nums.reduce(function(x, y){
	// 	return x + y;
	// });

	// let total = nums.reduce((x, y) => {
	// 	return x + y;
	// });

	let total = nums.reduce((x, y) => x + y);
	console.log(total);
}
//document.getElementById("demo");
const res = add(4, 5, 7, 8, 12);
document.getElementById("total").innerHTML = res;