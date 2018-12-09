import React from 'react';
import NoteInput from './NoteInput'

const Game = props => {

        return (
            <div className='gameContainer'>

                <button onClick={() => props.deleteBtn(props.id)}
                className='deleteBtn'>X</button>

                <div className='gameBody'>
                <img className='coverArt' src={props.img} alt={props.title}></img>
                <h2 className='gameTitle'>{props.title}</h2><br></br>
                <p className='notes'>Notes: {props.notes}</p>

                <div className='gameFooter'>
                    {props.displayEditBtn === true && <button onClick={props.displayInput}
                    className='editNoteBtn'>Edit Note</button>}

                    {props.showEdit === true && <NoteInput note={props.note}
                                                handleInput={props.handleInput}
                                                updateNotes={props.updateNotes}
                                                cancelEdit={props.cancelEdit}/>}<br></br>

                    {props.displayCompleteBtn === true && <button onClick={() => props.completeGame(props.id)}
                    className='moveBtn'>Game Completed</button>}

                    {props.displayQueueBtn === true && <button onClick={() => props.returnToQueue(props.id)}
                    className='moveBtn'>Return to Queue</button>}
                </div>

                </div>
            </div>
        )
    }

export default Game