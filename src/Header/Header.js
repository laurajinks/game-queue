import React from 'react'

const Header = props => {

        return (
            <div className='header'>
                <h1 className='appTitle' onClick={() => props.logoClick()}>Gaming Queue</h1>
                <ul className='headerLinks'>
                    <li onClick={() => props.handleQueue()}>Queue</li>
                    <li onClick={() => props.handleCompleted()}>Completed</li>
                </ul>
            </div>
        )
    }

    export default Header;