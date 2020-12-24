//const apiUrl = 'http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id,abstract'


const apiUrl = 'data.json';

function getTop100Campers(){
	fetch(apiUrl)
	.then((r) => r.json())
	.then((json) => {
		console.log(json[0])
	}).catch((error) => {
		console.log('failed');
	});
}

// async function getTop100Campers(){
// 	const response = await fetch(apiUrl);
// 	const json = await response.json();

// 	console.log(json[0]);
// }

getTop100Campers();

//Access to fetch at 'http://api.plos.org/search?q=title:DNA' from origin 'http://127.0.0.1' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.