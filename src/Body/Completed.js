import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";

export default function Completed() {
    const [gameList, updateGames] = useState([]);
    const [refresh, toggleRefresh] = useState(false);

    useEffect(() => {
        axios
            .get(`/api/completedGames`)
            .then(response => {
                updateGames(response.data);
                toggleRefresh(false);
            })
            .catch(err => console.log(err));
    }, [refresh]);

    const returnToQueue = id => {
        axios
            .put(`/api/completedGameStatus/${id}`)
            .then(() => toggleRefresh(true))
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
            notes={game.notes}
            description={game.description}
            returnToQueue={returnToQueue}
            toggleRefresh={toggleRefresh}
        />
    ));
    return (
        <div className="gameList">
            <h1 className="pageTitle">Completed Games</h1>
            {games}
        </div>
    );
}
