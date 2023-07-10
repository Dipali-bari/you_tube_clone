import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/top17',
  headers: {
    'X-RapidAPI-Key': '27624833f5mshe330180fd45e459p126275jsn3bccecde832c',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}