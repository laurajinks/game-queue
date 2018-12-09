import React, {Component} from 'react'
import axios from 'axios';
import Game from './Game'

const url = "http://localhost:3001";

export default class Queue extends Component {
    constructor () {
        super ();

        this.state = {
            games: [],
            input:'',
            showEdit: false,
            displayEditBtn: true,
            displayCompleteBtn: true,
            displayQueueBtn: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteBtn = this.deleteBtn.bind(this);
        this.displayInput = this.displayInput.bind(this);
        this.updateNotes = this.updateNotes.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.completeGame = this.completeGame.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }


    componentDidMount () {
        axios.get(`${url}/api/games`)
        .then(response => {
            this.setState({games: response.data});
        })
        .catch(err => console.log(err));
    }

    componentDidUpdate () {
        axios.get(`${url}/api/games`)
        .then(response => {
            this.setState({games: response.data});
        })
        .catch(err => console.log(err));
    }

    deleteBtn (id) {
        axios.delete(`${url}/api/games/${id}`)
    }

    displayInput () {
        this.setState({ showEdit: true , displayEditBtn: false})
    }

    updateNotes (e, id) {
        if (e.key === 'Enter') {
            axios.put(`${url}/api/games/${id}`, {notes: this.state.input})
            .then(response => {
                this.setState({ games: response.data, input: '', showEdit: false, displayEditBtn: true });
            })
            .catch(err => console.log(err));
        }
    }

    cancelEdit () {
        this.setState({showEdit: false, displayEditBtn: true})
    }

    handleInput (e) {
        this.setState({ input: e.target.value });
    }

    completeGame (id) {
        axios.post(`${url}/api/games/${id}`)
        .then(response => {
            this.setState({ games: response.data })
        })

    }

    render () {
        return (
            <div className='gameList'>
                <h1 className='pageTitle'>Queue</h1><br></br>
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
                        cancelEdit={this.cancelEdit}/>))}
            </div>
        );
    }
}