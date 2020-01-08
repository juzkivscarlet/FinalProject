import React from 'react';
import './style.css';

function Navbar(props) {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='/'>Sell 4 Me!</a>
            <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navContent' aria-controls='navContent' aria-expanded='false' aria-label='Toggle Nav'>
                <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse' id='navContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Business Portal</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Sales Portal</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;