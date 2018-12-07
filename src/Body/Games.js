import React from 'react';

const Game = props => {


        return (
            <div>
                <img className='coverArt' src={props.img} alt={props.title}></img>
                <h2>{props.title}</h2>
                <p>Notes: {props.notes}</p>
                <button>Edit Notes</button>
                <button>Complete</button>
                <button>Delete</button>
            </div>
        )

}

export default Game;