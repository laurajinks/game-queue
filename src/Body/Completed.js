import React, {Component} from 'react'
import axios from 'axios'
import Game from './Game'

const url = "http://localhost:3001";

export default class Completed extends Component {
    constructor () {
        super ();

        this.state = {
            games: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount () {
        axios.get(`${url}/api/completedGames`)
        .then(response => {
            this.setState({ games: response.data });
        })
        .catch(err => console.log(err));
    }

    componentDidUpdate () {
        axios.get(`${url}/api/completedGames`)
        .then(response => {
            this.setState({games: response.data});
        })
        .catch(err => console.log(err));
    }

    render () {
        return (
            <div className='gameList'>
                <h1 className='pageTitle'>Completed Games</h1>
                {this.state.games.map(game => (
                    <Game key={game.id}
                    id={game.id}
                    queue={game.queue}
                    guid={game.guid}
                    title={game.title}
                    img={game.img}
                    notes={game.notes}
                    description={game.description}/>))}
            </div>
        )
    }
}