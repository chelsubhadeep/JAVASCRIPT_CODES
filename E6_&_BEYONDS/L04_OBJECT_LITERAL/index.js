function addressMaker(city, state) 
{
	const newAddress = { newCity: city, newState: state };

	console.log(newAddress);

	const alternativeNewAddress = { city, state };

	console.log(alternativeNewAddress);
}

addressMaker('Kolkata', 'West Bengal');

// 12:01