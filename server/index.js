const {json} = require('body-parser');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const {getGames} = require('./controllers/games_controller');
const {searchGames} = require('./controllers/games_controller');
const {addNew} = require('./controllers/games_controller')
const port = 3001;
const app = express();
const apiKey = 'a64fd118e506b5420e03926b6b331ee7ab3c268b'

app.use(json());
app.use(cors());

app.get('/api/games', getGames);
app.get('/api/search', searchGames);
app.post('/api/games', addNew);

app.listen(port, () => console.log("Listening..."));