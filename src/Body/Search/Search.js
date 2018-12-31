import React, {Component} from 'react'
import { Link } from 'react-router-dom';
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
        this.addNew = this.addNew.bind(this);
    }

    //fires when Enter key is hit after entering search term
    handleEnter (e) {
        if (e.key === 'Enter') {
            axios.get(`${url}/api/search/?search=${e.target.value}`)
            .then(response => {
                this.setState({results: response.data});
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
                <Link to='/'><button className='cancelBtn'>Cancel</button></Link>
            <div className='searchComponent'>
                <div className='searchBar'>
                <input className='searchInput' type='text' placeholder='Enter Game Title'
                onKeyUp={this.handleEnter}></input>
            </div>
                {this.state.results.map(result => (
                    <Result key={result.key}
                        id={result.id}
                        guid={result.guid}
                        title={result.title}
                        img={result.img}
                        notes={result.notes}
                        addNew={this.addNew}
                        description={result.description}/>))}
                
            </div>
            </div>
        )
    }
}