import React, {Component} from 'react'
import axios from 'axios';
import Result from './Result'
const url = "http://localhost:3001";

//Search component to add new games to queue

export default class Search extends Component {
    constructor (props) {
        super (props);

        this.state = {
            results: []
        }

        this.handleEnter = this.handleEnter.bind(this);

    }

    //fires when Enter key is hit after entering search term
    handleEnter (e) {
        if (e.key === 'Enter') {
            axios.get(`${url}/api/search/?search=${e.target.value}`)
            .then(response => {
                this.setState({results: response.data});
                console.log(this.state.results)
            })
            .catch(err => console.log(err));

        }
    }

    

    render (props) {
        return (
            <div>
                <input type='text' placeholder='Search'
                onKeyUp={this.handleEnter}></input>
                {this.state.results.map(result => (
                    <Result key={result.key}
                        id={result.id}
                        title={result.title}
                        img={result.img}
                        notes={result.notes}
                        addNew={this.props.addNew}/>))}
                
            </div>
        )
    }
}