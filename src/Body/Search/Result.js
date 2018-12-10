import React from 'react';

//Results of searching for new game

const Result = (props) => {

    return (
        <div className='resultBox'>
            <div className='result'>
                <img className='resultThumb' src={props.img} alt={props.title}></img>
                <p className='resultTitle'>{props.title}</p>
                <button className='addNewBtn' onClick={ () => props.addNew({key: props.id,
                                                id: props.id,
                                                guid: props.guid,
                                                description: props.description,
                                                title: props.title,
                                                img: props.img,
                                                description: props.description,
                                                notes: props.notes})}>+</button>
            </div>
        </div>
        )

}

export default Result;