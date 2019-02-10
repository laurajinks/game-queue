import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Game from "./Game";

const url = "http://localhost:3001";

export default class Queue extends Component {
    constructor() {
        super();

        this.state = {
            games: [],
            refresh: false
        };
    }

    loadData = () => {
        axios
            .get(`${url}/api/games`)
            .then(response => {
                this.setState({ games: response.data, refresh: false });
            })
            .catch(err => console.log(err));
    };

    componentDidMount = () => {
        this.loadData();
    };

    componentDidUpdate = () => {
        if (this.state.refresh) {
            this.loadData();
        }
    };

    completeGame = id => {
        axios
            .put(`/api/gameStatus/${id}`)
            .then(() => this.setState({ refresh: true }));
    };

    render() {
        const games = this.state.games.map(game => (
            <Game
                key={game.id}
                id={game.id}
                queue={game.queue}
                guid={game.guid}
                title={game.title}
                img={game.img}
                description={game.description}
                notes={game.notes}
                completeGame={this.completeGame}
            />
        ));
        return (
            <div className="gameList">
                <h1 className="pageTitle">Queue</h1>
                <br />
                <div className="addBtnContainer">
                    <Link to="/search">
                        <button className="addBtn">Add New Game</button>
                    </Link>
                </div>
                {games}
            </div>
        );
    }
}
