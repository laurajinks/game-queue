import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Game from "./Game";

export default function Queue() {
    const [gameList, updateGames] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const getGames = () => {
        axios.get('/api/games').then(response => updateGames(response.data))
    }

    const toggleRefresh = () => {
        setRefresh(true)
    }

    useEffect(() => {
        getGames();
        setRefresh(false);
    }, [refresh === true || gameList]);

    const completeGame = id => {
        axios
            .put(`/api/gameStatus/${id}`)
            .then(() => setRefresh(true))
            .catch(err => console.log(err));
    };

    const games = gameList.map(game => (
        <Game
            key={game.id}
            id={game.id}
            queue={game.queue}
            guid={game.guid}
            title={game.title}
            img={game.img}
            description={game.description}
            notes={game.notes}
            completeGame={completeGame}
            toggleRefresh={toggleRefresh}
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
