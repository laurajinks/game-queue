import React from 'react';
import { Link } from 'react-router-dom'

//Results of searching for new game

const Result = (props) => {

    const handleOnClick = () => {
        props.addNew({
            key: props.id,
            id: props.id,
            guid: props.guid,
            description: props.description,
            title: props.title,
            img: props.img,
            notes: props.notes,
            queue: props.queue
        })
    }

    return (
        <div className='resultBox'>
            <div className='result'>
                <img className='resultThumb' src={props.img} alt={props.title}></img>
                <p className='resultTitle'>{props.title}</p>
                <Link to='/'><button className='addNewBtn' onClick={handleOnClick}>+</button>
                </Link>
            </div>
        </div>
    )

}

export default Result;