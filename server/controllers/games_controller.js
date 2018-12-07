const axios = require('axios');
const apiKey = 'a64fd118e506b5420e03926b6b331ee7ab3c268b'


const games = [];

const searchResults = [];

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

        
getGames = (req, res, next) => {
    res.status(200).json(games);
        }

searchGames = (req, res, next) => {

    console.log(req.query);
    let search = req.query.search.replace(' ', '%20')
    axios.get(`http://www.giantbomb.com/api/search?api_key=${apiKey}&format=json&query=${search}&resources=game`)
    .then( (response) => {
        response.data.results.forEach(result => {
        let game = {title: result.name,
        id: result.id,
        img: result.image.original_url,
        notes: ''}
        searchResults.push(game);
        })
        res.status(200).json(searchResults);
    })
    .catch(err => console.log(err));
}

module.exports = {
    getGames,
    searchGames
}