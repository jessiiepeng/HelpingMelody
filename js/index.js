require('dotenv').config();

console.log(process.env);

const api_key = process.env.API_KEY;
const api_url = `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap`;
var map_api = document.getElementById('map');
map_api.src = api_url;

app.use(express.static('img'));
