import React, {Component} from 'react'
import axios from 'axios';
const url = "http://localhost:3001";

export default class Search extends Component {
    constructor () {
        super ();

        this.state = {
            results: []
        }

        this.handleEnter = this.handleEnter.bind(this);

    }

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

    render () {
        return (
            <div>
                <input type='text' placeholder='Search'
                onKeyUp={this.handleEnter}></input>
                
            </div>
        )
    }
}