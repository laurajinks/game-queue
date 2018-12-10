import React from 'react'

const NoteInput = props => {

return (
    <div>
        <input className='noteInput' type='text' placeholder='Add note' 
            onChange={props.handleInput} onKeyUp={(e) => { if (e.key === 'Enter') {
                                                            props.updateNotes(e, props.id)
                                                            props.removeEdit()}}}/>
        <button className='cancelEditBtn'
            onClick={props.cancelEdit}>X</button>
                    </div>
)

}

export default NoteInput