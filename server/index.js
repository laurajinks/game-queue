require('dotenv').config();
const {json} = require('body-parser');
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const {getGames} = require('./controllers/games_controller');
const {getCompletedGames} = require('./controllers/games_controller');
const {searchGames} = require('./controllers/games_controller');
const {addNew} = require('./controllers/games_controller');
const {deleteGame} = require('./controllers/games_controller');
const {editNote} = require('./controllers/games_controller');
const {completeGame} = require('./controllers/games_controller');
const {returnToQueue} = require('./controllers/games_controller');
const port = 3001;
const app = express();
const apiKey = 'a64fd118e506b5420e03926b6b331ee7ab3c268b'

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
})
.catch(err => console.log(err));

app.get('/api/games', getGames);
app.get('/api/completedGames', getCompletedGames);
app.get('/api/search', searchGames);
app.post('/api/games', addNew);
app.put('/api/gameStatus/:id', completeGame);
app.put('/api/completedGameStatus/:id', returnToQueue);
app.delete('/api/games/:id', deleteGame);
app.put('/api/games/:id', editNote);

app.listen(port, () => console.log("Listening..."));