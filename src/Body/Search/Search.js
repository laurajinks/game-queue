import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Result from "./Result";

//Search component to add new games to queue

export default function Search(props) {
    const [resultList, updateResults] = useState([]);

    //fires when Enter key is hit after entering search term
    const handleEnter = e => {
        if (e.key === "Enter") {
            axios
                .get(`/api/search/?search=${e.target.value}`)
                .then(response => {
                    updateResults(response.data);
                })
                .catch(err => console.log(err));
        }
    };

    //Add game from search results to Queue
    const addNew = game => {
        axios.post(`/api/games`, game).then(() => {
            props.history.push('/')
        });
    };

    const results = resultList.map(result => (
        <Result
            key={result.key}
            id={result.id}
            guid={result.guid}
            title={result.title}
            img={result.img}
            notes={result.notes}
            addNew={addNew}
            description={result.description}
            queue={result.queue}
        />
    ));
    return (
        <div>
            <Link to="/">
                <button className="cancelBtn">Cancel</button>
            </Link>
            <div className="searchComponent">
                <div className="searchBar">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Enter Game Title"
                        onKeyUp={e => handleEnter(e)}
                    />
                </div>
                {results}
            </div>
        </div>
    );
}
