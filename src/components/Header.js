import React from 'react'
import logo from '../images/logo.svg';
const Header = ({score}) =>{
    return(
        <div className='header'>
            <div className='contain'>
                <div className='logo'>
                    <img src={logo} alt='' className='logo-pic'></img>
                </div>
                <div className='score'>
                    <h1 className='score-header'>Score</h1>
                    <div className='score-value'>{score}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Header;