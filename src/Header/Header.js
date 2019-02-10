import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {

        return (
            <div className='header'>
                <Link to='/'><h1 className='appTitle'>Gaming Queue</h1></Link>
                <ul className='headerLinks'>
                    <Link to='/'><li className='headerListItem'>Queue</li></Link>
                    <Link to='completed'><li className='headerListItem'>Completed</li></Link>
                </ul>
            </div>
        )
    }

    export default Header;