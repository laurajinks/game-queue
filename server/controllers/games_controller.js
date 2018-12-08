const axios = require('axios');
const apiKey = 'a64fd118e506b5420e03926b6b331ee7ab3c268b'


const games = [];
const completedGames = [];
let searchResults = [];

//Get initial games for demo purposes
// Kingdom Hearts III
axios.get(`https://www.giantbomb.com/api/game/3030-42926/?api_key=${apiKey}&format=json`)
.then( (response) => {
    let game = {title: response.data.results.name,
    id: response.data.results.id,
    img: response.data.results.image.original_url,
    notes: ''}
    games.push(game)
    })
    .catch(err => console.log(err))

//Final Fantasy VII
axios.get(`https://www.giantbomb.com/api/game/3030-13053/?api_key=${apiKey}&format=json`)
.then( (response) => {
    let game = {title: response.data.results.name,
    id: response.data.results.id,
    img: response.data.results.image.original_url,
    notes: ''}
    games.push(game)
    })
.catch(err => console.log(err))

//LoZ Majora's Mask
axios.get(`https://www.giantbomb.com/api/game/3030-13594/?api_key=${apiKey}&format=json`)
.then( (response) => {
    let game = {title: response.data.results.name,
    id: response.data.results.id,
    img: response.data.results.image.original_url,
    notes: ''}
    games.push(game)
    })
.catch(err => console.log(err))

// Retrieve games in local API to display in list
getGames = (req, res, next) => {
    res.status(200).json(games);
        }

//Retrieve completed games in local API to display in list
getCompletedGames = (req, res, next) => {
    res.status(200).json(completedGames);
}

// Search GiantBomb API for game entered in search bar
searchGames = (req, res, next) => {
    let search = req.query.search.replace(' ', '%20')
    axios.get(`http://www.giantbomb.com/api/search?api_key=${apiKey}&format=json&query=${search}&resources=game`)
    .then( (response) => {
        response.data.results.forEach(result => {
        console.log('search results: ', searchResults);
        let game = {title: result.name,
        id: result.id,
        img: result.image.original_url,
        notes: ''}
        searchResults.push(game);
        })
        console.log('search results part 2: ', searchResults);
        res.status(200).json(searchResults);
    })
    .then(searchResults = [])
    .catch(err => console.log(err));
}

addNew = (req, res, next) => {
    games.push(req.body);
    res.status(200).json(games);
}

deleteGame = (req, res, next) => {
    const index = games.findIndex(game => +game.id === +req.params.id);
    games.splice(index, 1);
    res.json(games);
}

editNote = (req, res, next) => {
    games.find(game => +game.id === +req.params.id && 
        Object.assign(game, req.body));
    res.json(games);
}

completeGame = (req, res, next) => {
    let index = games.findIndex(game => +game.id === +req.params.id);
    completedGames.push(games.splice([index], 1));
    res.json(games);
}

module.exports = {
    getGames,
    getCompletedGames,
    searchGames,
    addNew,
    deleteGame,
    editNote,
    completeGame
}