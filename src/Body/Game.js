import React from 'react';

const Game = props => {


        return (
            <div className='gameContainer'>
                <img className='coverArt' src={props.img} alt={props.title}></img>
                <h2>{props.title}</h2><br></br>
                <p>Notes: {props.notes}</p>
                {props.displayEditBtn === true && <button onClick={props.displayInput}>Edit Note</button>}
                {props.showEdit && <input type='text' placeholder='Add note' onChange={props.handleInput} onKeyUp={(e) => props.updateNotes(e, props.id)}/>}
                <button onClick={() => props.completeGame(props.id)}>Game Completed</button>
                <button onClick={() => props.deleteBtn(props.id)}>Delete</button>
            </div>
        )

}

export default Game;