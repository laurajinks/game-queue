import React, { Component } from "react";
import axios from "axios";
import Game from "./Game";

const url = "http://localhost:3001";

export default class Completed extends Component {
    state = {
        games: [],
        refresh: false
    };

    loadData = () => {
        axios
            .get(`${url}/api/completedGames`)
            .then(response => {
                this.setState({ games: response.data });
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        if (this.state.refresh) {
            this.loadData();
            this.setState({ refresh: false });
        }
    }

    returnToQueue = id => {
        axios
            .put(`/api/completedGameStatus/${id}`)
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
                notes={game.notes}
                description={game.description}
                returnToQueue={this.returnToQueue}
            />
        ));
        return (
            <div className="gameList">
                <h1 className="pageTitle">Completed Games</h1>
                {games}
            </div>
        );
    }
}
