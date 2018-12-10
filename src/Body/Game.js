import React, { Component } from 'react';
import NoteInput from './NoteInput'
import Description from './Description'

export default class Game extends Component {
    constructor (props) {
        super (props);

        this.state = {
            showEdit: false,
            displayEditBtn: true,
            showDescription: false,
            description: props.description
        }
        this.displayInput = this.displayInput.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.removeEdit = this.removeEdit.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.closeDescription = this.closeDescription.bind(this);
        this.formatDescription = this.formatDescription.bind(this);
    }

    //Note editing functions
    displayInput () {
        this.setState({ showEdit: true , displayEditBtn: false})
    }

    cancelEdit () {
        this.setState({showEdit: false, displayEditBtn: true})
    }

    removeEdit () {
        this.setState({showEdit: false, displayEditBtn: true})
    }

    showDescription () {
        this.setState({showDescription: true})
    }

    closeDescription () {
        this.setState({showDescription: false})
    }

    //take description string with HTML tags, remove tags, cut length down to 1000 characters
    formatDescription (text) {
        let html = text;
        let div = document.createElement('div');
        div.innerHTML = html;
        let description = div.textContent || div.innerText || '';
        if(description.length > 1000) {
            description = description.substring(8, 1008)+'...'
        }
        return description;
    }
    
    render () {
        return (
            <div className='gameContainer'>
                {this.state.showDescription && <Description formatDescription={this.formatDescription}
                                                            description={this.props.description}
                                                            closeDescription={this.closeDescription}
                                                            guid={this.props.guid}/>}
                <button onClick={() => this.props.deleteBtn(this.props.id)}
                className='deleteBtn'>X</button>

                <div className='gameBody'>
                <img className='coverArt' src={this.props.img} alt={this.props.title}
                onClick={this.showDescription}></img>
                <h2 className='gameTitle'>{this.props.title}</h2><br></br>
                <p className='notes'>Notes: {this.props.notes}</p>

                <div className='gameFooter'>
                    {this.state.displayEditBtn === true && <button onClick={this.displayInput}
                    className='editNoteBtn'>Edit Note</button>}

                    {this.state.showEdit === true && <NoteInput
                                                handleInput={this.props.handleInput}
                                                updateNotes={this.props.updateNotes}
                                                cancelEdit={this.cancelEdit}
                                                removeEdit={this.removeEdit}
                                                id={this.props.id}
                                                notes={this.props.notes}/>}<br></br>

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


