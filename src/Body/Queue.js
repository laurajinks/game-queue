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
            showEdit: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteBtn = this.deleteBtn.bind(this);
        this.displayInput = this.displayInput.bind(this);
        this.updateNotes = this.updateNotes.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
        console.log('button pressed')
        axios.delete(`${url}/api/games/${id}`)
    }

    displayInput () {
        this.setState({ showEdit: true })
    }

    updateNotes (e, id) {
        if (e.key === 'Enter') {
            console.log(this.state.input)
            axios.put(`${url}/api/games/${id}`, {notes: this.state.input})
            .then(response => {
                this.setState({ games: response.data, input: '', showEdit: false });
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
                        handleInput={this.handleInput}/>))}
            </div>
        );
    }
}