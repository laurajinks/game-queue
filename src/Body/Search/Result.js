import React from 'react';

const Result = props => {
        


        return (
            <div>
                <img className='resultThumb' src={props.img} alt={props.title}></img>
                <p>{props.title}</p>
                <button onClick={ () => props.addNew({key: props.id,
                                                title: props.title,
                                                img: props.img,
                                                notes: props.notes})}>+</button>
            </div>
        )

}

export default Result;