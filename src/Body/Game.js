import React from 'react';

const Game = props => {

        return (
            <div className='gameContainer'>

                <button onClick={() => props.deleteBtn(props.id)}
                className='deleteBtn'>X</button>

                <div className='gameBody'>
                <img className='coverArt' src={props.img} alt={props.title}></img>
                <h2 className='gameTitle'>{props.title}</h2><br></br>
                <p className='notes'>Notes: {props.notes}</p>

                {props.displayEditBtn === true && <button onClick={props.displayInput}
                className='editNoteBtn'>Edit Note</button>}

                {props.showEdit && <input type='text' placeholder='Add note' 
                onChange={props.handleInput} onKeyUp={(e) => props.updateNotes(e, props.id)}/>}<br></br>

                {props.displayCompleteBtn === true && <button onClick={() => props.completeGame(props.id)}
                className='moveBtn'>Game Completed</button>}

                {props.displayQueueBtn === true && <button onClick={() => props.returnToQueue(props.id)}
                className='moveBtn'>Return to Queue</button>}

                </div>
            </div>
        )
    }

export default Game