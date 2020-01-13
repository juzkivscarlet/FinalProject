import React from 'react';
import {Link} from 'react-router-dom';
import { ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import Login from './Login';
import './style.css';

function Navigator(props) {
	return (
		<Navbar bg='light' expand='md'>
			<Navbar.Brand href='/'>Sell Out!</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />

			<Navbar.Collapse id='navContent'>
				<Nav className='ml-auto'>
					<Nav.Link>
						<Link to='/about' className={window.location.pathname==='/about' ? 'nav-link active' : 'nav-link'}>
							About
						</Link>
					</Nav.Link>
				</Nav>

				<div className='my-2 my-lg-0'>
					<ButtonGroup>
						<Login type='Business' />
						<Login type='Sales' />
					</ButtonGroup>
				</div>
			</Navbar.Collapse>

		</Navbar>
	);
}

export default Navigator;