import React, { Component } from 'react';
import NoteInput from './NoteInput'

export default class Game extends Component {
    constructor (props) {
        super (props);

        this.state = {
            showEdit: false,
            displayEditBtn: true,
        }
        this.displayInput = this.displayInput.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.removeEdit = this.removeEdit.bind(this);

    }

    displayInput () {
        this.setState({ showEdit: true , displayEditBtn: false})
    }

    

    cancelEdit () {
        this.setState({showEdit: false, displayEditBtn: true})
    }

    removeEdit () {
        this.setState({showEdit: false, displayEditBtn: true})
    }

    

    render () {

        return (
            <div className='gameContainer'>

                <button onClick={() => this.props.deleteBtn(this.props.id)}
                className='deleteBtn'>X</button>

                <div className='gameBody'>
                <img className='coverArt' src={this.props.img} alt={this.props.title}></img>
                <h2 className='gameTitle'>{this.props.title}</h2><br></br>
                <p className='notes'>Notes: {this.props.notes}</p>

                <div className='gameFooter'>
                    {this.state.displayEditBtn === true && <button onClick={this.displayInput}
                    className='editNoteBtn'>Edit Note</button>}

                    {this.state.showEdit === true && <NoteInput note={this.props.note}
                                                handleInput={this.props.handleInput}
                                                updateNotes={this.props.updateNotes}
                                                cancelEdit={this.cancelEdit}
                                                removeEdit={this.removeEdit}
                                                id={this.props.id}/>}<br></br>

                    {this.props.displayCompleteBtn === true && <button onClick={() => this.props.completeGame(this.props.id)}
                    className='moveBtn'>Game Completed</button>}

                    {this.props.displayQueueBtn === true && <button onClick={() => this.props.returnToQueue(this.props.id)}
                    className='moveBtn'>Return to Queue</button>}
                </div>

                </div>
            </div>
        )
    }
}


