function resolveAfter3seconds(){
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 3000)
	});
}

// resolveAfter3seconds().then((data) => {
//  console.log(data); 
// });

async function getAsyncData(){
	const result = await resolveAfter3seconds();
	console.log(result);
}

getAsyncData();