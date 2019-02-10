import React from 'react'

const Description = (props) => {

    return (
        <div className='descriptionContainer'>
            <div className='description'>
                <p>Genres:</p>
                <h1 className='descriptionTitle'>Description</h1>
                <button className='closeDescriptionBtn' onClick={() => props.closeDescription()}>X</button>
                {props.formatDescription(props.description)}
                <div className='linkContainer'>
                <a href={`https://www.giantbomb.com/games/${props.guid}`} className='moreInfoLink'>More info >></a>
                </div>
            </div>
        </div>
    
    )

}

export default Description