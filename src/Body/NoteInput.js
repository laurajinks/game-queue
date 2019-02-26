import React from "react";
import axios from "axios";

const NoteInput = props => {
    const updateNotes = (id, input) => {
        axios
            .put(`/api/games/${id}`, { input })
            .then(() => props.toggleRefresh())
            .catch(err => console.log(err));
    };

    return (
        <div>
            <input
                className="noteInput"
                type="text"
                defaultValue={props.notes}
                placeholder="Add note"
                onChange={e => props.updateInput(e.target.value)}
                onKeyUp={e => {
                    if (e.key === "Enter") {
                        updateNotes(props.id, props.input);
                        props.toggleEdit(false);
                        props.toggleEditBtn(true);
                    }
                }}
            />
            <button
                className="cancelEditBtn"
                onClick={() => {
                    props.toggleEdit(false);
                    props.toggleEditBtn(true);
                }}
            >
                X
            </button>
        </div>
    );
};

export default NoteInput;
