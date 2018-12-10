import React, {Component} from 'react'
import axios from 'axios'
import Game from './Game'

const url = "http://localhost:3001";

export default class Completed extends Component {
    constructor () {
        super ();

        this.state = {
            games: [],
            displayCompleteBtn: false,
            displayQueueBtn: true,
            input:''
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.deleteBtn = this.deleteBtn.bind(this);
        this.returnToQueue = this.returnToQueue.bind(this);
        this.updateNotes = this.updateNotes.bind(this);
        this.handleInput = this.handleInput.bind(this);
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

    deleteBtn (id) {
        axios.delete(`${url}/api/completedGames/${id}`)
    }

    returnToQueue (id) {
        axios.post(`${url}/api/completedGames/${id}`)
        .then(response => {
            this.setState({ games: response.data })
        })
    }

    handleInput (e) {
        this.setState({ input: e.target.value });
    }

    updateNotes (e, id) {
            axios.put(`${url}/api/completedGames/${id}`, {notes: this.state.input})
            .then(response => {
                this.setState({ games: response.data, input: '', showEdit: false, displayEditBtn: true });
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
                    title={game.title}
                    img={game.img}
                    notes={game.notes}
                    showEdit={this.state.showEdit}
                    deleteBtn={this.deleteBtn}
                    displayInput={this.displayInput}
                    updateNotes={this.updateNotes}
                    handleInput={this.handleInput}
                    displayEditBtn={this.state.displayEditBtn}
                    completeGame={this.completeGame}
                    displayCompleteBtn={this.state.displayCompleteBtn}
                    displayQueueBtn={this.state.displayQueueBtn}
                    updateNotes={this.updateNotes}
                    cancelEdit={this.cancelEdit}/>))}
            </div>
        )
    }
}