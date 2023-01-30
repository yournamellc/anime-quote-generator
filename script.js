const getQuote = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e3e7feab5mshcb53d970957352dp1303bejsnf471bf3638d9',
		'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
	}
};

fetch('https://anime-quotes1.p.rapidapi.com/api/quotes/character?name=Goku', getQuote)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));