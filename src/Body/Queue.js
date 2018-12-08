import React, {Component} from 'react'
import axios from 'axios';
import Game from './Game'

const url = "http://localhost:3001";

export default class Queue extends Component {
    constructor () {
        super ();

        this.state = {
            games: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }


    componentDidMount () {
        axios.get(`${url}/api/games`)
        .then(response => {
            this.setState({games: response.data});
        })
        .catch(err => console.log(err));
    }

    render () {
        return (
            <div>
                {this.state.games.map(game => (
                    <Game key={game.id}
                        title={game.title}
                        img={game.img}
                        notes={game.notes}/>))}
            </div>
        );
    }
}