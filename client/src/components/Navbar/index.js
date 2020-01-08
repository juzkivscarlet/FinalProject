import React from 'react';
import Dropdown from './Dropdown';
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
						<a className='nav-link' href='/'>About</a>
					</li>
				</ul>
				<div className='my-2 my-lg-0'>
					<Dropdown type='Business' />
					<Dropdown type='Sales' />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;