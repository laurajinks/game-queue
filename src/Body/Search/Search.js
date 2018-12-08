import React, {Component} from 'react'
import axios from 'axios';
import Result from './Result'
const url = "http://localhost:3001";

export default class Search extends Component {
    constructor () {
        super ();

        this.state = {
            results: []
        }

        this.handleEnter = this.handleEnter.bind(this);
        this.addNew = this.addNew.bind(this);

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

    //Add game from search results to Queue
    addNew (game) {
        axios.post(`${url}/api/games`, game)
        this.setState({  results: [] });
        axios.get(`${url}/api/games`);
    }

    render () {
        return (
            <div>
                <input type='text' placeholder='Search'
                onKeyUp={this.handleEnter}></input>
                {this.state.results.map(result => (
                    <Result key={result.id}
                        title={result.title}
                        img={result.img}
                        notes={result.notes}
                        addNew = {this.addNew}/>))}
                
            </div>
        )
    }
}