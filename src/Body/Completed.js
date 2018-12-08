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
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteBtn = this.deleteBtn.bind(this);
        this.displayInput = this.displayInput.bind(this);
        this.updateNotes = this.updateNotes.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount () {
        axios.get(`${url}/api/completedGames`)
        .then(response => {
            this.setState({ games: response.data });
            console.log(this.state.games)
        })
        .catch(err => console.log(err));
    }

    deleteBtn (id) {
        axios.delete(`${url}/api/completedGames/${id}`)
    }

    displayInput () {
        this.setState({ showEdit: true , displayEditBtn: false})
    }

    updateNotes (e, id) {
        if (e.key === 'Enter') {
            axios.put(`${url}/api/completedGames/${id}`, {notes: this.state.input})
            .then(response => {
                this.setState({ games: response.data, input: '', showEdit: false, displayEditBtn: true });
                console.log(this.state.games)
            })
            .catch(err => console.log(err));
        }
    }

    handleInput (e) {
        this.setState({ input: e.target.value });
    }

    render () {
        return (
            <div className='gameList'>
                <h1 className='pageTitle'>Completed Games</h1>
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