import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Game from './Game'

const url = "http://localhost:3001";

export default class Queue extends Component {
    constructor () {
        super ();

        this.state = {
            games: [],
            displayCompleteBtn: true,
            displayQueueBtn: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.deleteBtn = this.deleteBtn.bind(this); 
        this.completeGame = this.completeGame.bind(this);
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

    //Delete game from back end
    deleteBtn (id) {
        axios.delete(`${url}/api/games/${id}`)
    }

    //Move game to Completed list
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
                <div className='addBtnContainer'>
                <Link to='/search'><button className='addBtn'>Add New Game</button></Link>
                </div>
                {this.state.games.map(game => (
                    <Game key={game.id}
                        id={game.id}
                        guid={game.guid}
                        title={game.title}
                        img={game.img}
                        description={game.description}
                        notes={game.notes}
                        showEdit={this.state.showEdit}
                        deleteBtn={this.deleteBtn}
                        completeGame={this.completeGame}
                        displayCompleteBtn={this.state.displayCompleteBtn}
                        displayQueueBtn={this.state.displayQueueBtn}
                        cancelEdit={this.cancelEdit}/>))}
            </div>
        );
    }
}