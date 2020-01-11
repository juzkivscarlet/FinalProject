import React from 'react';
import {Link} from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import Login from './Login';
import './style.css';

function Navbar(props) {
	return (
		<nav className='navbar navbar-expand-md navbar-light bg-light'>
			<a className='navbar-brand' href='/'>Sell Out!</a>
			<button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navContent' aria-controls='navContent' aria-expanded='false' aria-label='Toggle Nav'>
				<span className='navbar-toggler-icon' />
			</button>

			<div className='collapse navbar-collapse' id='navContent'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link to='/about' className={window.location.pathname==='/about' ? 'nav-link active' : 'nav-link'}>
							About
						</Link>
					</li>
				</ul>
				<div className='my-2 my-lg-0'>
					<ButtonGroup>
						<Login type='Business' />
						<Login type='Sales' />
					</ButtonGroup>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;