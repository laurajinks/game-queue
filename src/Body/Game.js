import React, { useState } from "react";
import NoteInput from "./NoteInput";
import Description from "./Description";
import axios from "axios";

const Game = (props) => {
    const [input, updateInput] = useState("");
    const [showEdit, toggleEdit] = useState(false);
    const [displayEditBtn, toggleEditBtn] = useState(true);
    const [showDescription, toggleDescription] = useState(false);

    const deleteGame = () => {
        const { id } = props
        axios.delete(`/api/games/${id}`).then(() => {
            props.toggleRefresh()
        });
    };

    return (
        <div className="gameContainer">
            {showDescription && (
                <Description
                    description={props.description}
                    toggleDescription={toggleDescription}
                    guid={props.guid}
                />
            )}
            <button onClick={deleteGame} className="deleteBtn">X</button>

            <div className="gameBody">
                <img
                    className="coverArt"
                    src={props.img}
                    alt={props.title}
                    onClick={() => toggleDescription(true)}
                />
                <h2 className="gameTitle">{props.title}</h2>
                <br />
                <p className="notes">Notes: {props.notes}</p>

                <div className="gameFooter">
                    {displayEditBtn && (
                        <button
                            onClick={() => {
                                toggleEdit(true);
                                toggleEditBtn(false);
                            }}
                            className="editNoteBtn"
                        >
                            Edit Note
                        </button>
                    )}

                    {showEdit && (
                        <NoteInput
                            input={input}
                            updateInput={updateInput}
                            toggleEdit={toggleEdit}
                            toggleEditBtn={toggleEditBtn}
                            id={props.id}
                            notes={props.notes}
                            toggleRefresh={props.toggleRefresh}
                        />
                    )}
                    <br />

                    {props.queue && (
                        <button
                            onClick={() => props.completeGame(props.id)}
                            className="moveBtn"
                        >
                            Game Completed
                        </button>
                    )}

                    {!props.queue && (
                        <button
                            onClick={() => props.returnToQueue(props.id)}
                            className="moveBtn"
                        >
                            Return to Queue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Game;
