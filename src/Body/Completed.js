import React, {Component} from 'react'
import axios from 'axios'
import Game from './Game'

const url = "http://localhost:3001";

export default class Completed extends Component {
    constructor () {
        super ();

        this.state = {
            games: [],
            input:'',
            showEdit: false,
            displayEditBtn: true
        }
    }

    componentDidMount () {
        axios.get(`${url}/api/completedGames`)
        .then(response => {
            this.setState({ games: response.data });
            console.log(this.state.games)
        })
        .catch(err => console.log(err));
    }

    render () {
        return (
            <div className='gameList'>
                <h1>Completed Games</h1>
                {this.state.games.map(game => (
                    <Game key={game.id}
                        id={game.id}
                        title={game.title}
                        img={game.img}
                        notes={game.notes}
                        showEdit={this.state.showEdit}
                        deleteBtn={this.deleteBtn}
                        displayInput={this.displayInput}
                        updateNotes={this.updateNotes}
                        handleInput={this.handleInput}
                        displayEditBtn={this.state.displayEditBtn}
                        completeGame={this.completeGame}/>))}
            </div>
        )
    }
}