import React from 'react'

const NoteInput = props => {

return (
    <div>
        <input className='noteInput' value={props.note} type='text' placeholder='Add note' 
            onChange={props.handleInput} onKeyUp={(e) => props.updateNotes(e, props.id)}/>
        <button className='cancelEditBtn'
            onClick={props.cancelEdit}>X</button>
                    </div>
)

}

export default NoteInput