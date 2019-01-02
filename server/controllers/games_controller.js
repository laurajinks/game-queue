const axios = require('axios');
const apiKey = 'a64fd118e506b5420e03926b6b331ee7ab3c268b'


const games = [];
const completedGames = [];
let searchResults = [];

module.exports = { 

// Retrieve games from database to display in list
    getGames: (req, res) => {
    req.app.get('db').get_games()
    .then((games) => {
        res.status(200).json(games)
    })
    .catch(err => console.log(err))},

    getCompletedGames: (req, res) => {
        req.app.get('db').get_completed()
    .then((games) => {
        res.status(200).json(games)
    })
    .catch(err => console.log(err))
    },

// Search GiantBomb API for game entered in search bar
searchGames: (req, res, next) => {
    let search = req.query.search.replace(' ', '%20')
    axios.get(`http://www.giantbomb.com/api/search?api_key=${apiKey}&format=json&query=${search}&resources=game`)
    .then( (response) => {
        response.data.results.forEach(result => {
        let game = {title: result.name,
        id: result.id,
        guid: result.guid,
        img: result.image.original_url,
        description: result.description,
        notes: '',
        queue: true}
        searchResults.push(game);
        })
        res.status(200).json(searchResults);
    })
    .then(searchResults = [])
    .catch(err => console.log(err));
},

//Add new game from search results

addNew: (req, res) => {
    req.app.get('db').add_game(req.body)
    .then(() => {
        res.status(200)
    })
    .catch(err => console.log(err))
},

//delete game from either queue or completed

deleteGame: (req, res) => {
    req.app.get('db').delete_game(req.params.id)
    .then(() => {
        res.status(200)
    })
    .catch(err => console.log(err))
},

//edit notes functions

editNote: (req, res) => {
    req.app.get('db').update_notes([req.params.id, req.body.notes])
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
},

//functions to move games between Queue and Completed

completeGame: (req, res, next) => {
    let index = games.findIndex(game => +game.id === +req.params.id);
    let game = games[index];
    games.splice(index, 1);
    completedGames.push(game);
    res.json(games);
},

returnToQueue: (req, res, next) => {
    let index = completedGames.findIndex(game => +game.id === +req.params.id);
    let game = completedGames[index];
    completedGames.splice(index, 1);
    games.push(game);
    res.json(completedGames);
    }
}