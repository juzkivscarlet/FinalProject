import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import './style.css';
import SignupModal from '../SignupModal';
import API from '../../utils/API';

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	loginUser = e => {
		e.preventDefault();
		
		API.loginSales({
			username: this.state.username,
			password: this.state.password
		}).then(res => console.log(res)).catch(err => console.log(err));
	};

	render() {
		return (
			<Dropdown drop='left'>
				<Dropdown.Toggle variant='secondary'>
					{this.props.type} Portal
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Form className='px-4 py-3'>
						<div className='text-center'>
							<h5>{this.props.type} Login</h5>
						</div>

						<Form.Group>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type='text'
								placeholder='username'
								name='username'
								value={this.state.username}
								onChange={this.handleInputChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='password'
								name='password'
								value={this.state.password}
								onChange={this.handleInputChange} />
						</Form.Group>

						<Button onClick={this.loginUser} variant='primary' type='submit'>
							Login
						</Button>

					</Form>

					<Dropdown.Divider />
					
					<Dropdown.Item>
						<SignupModal type={this.props.type} />
					</Dropdown.Item>

				</Dropdown.Menu>
			</Dropdown>
		);
	}
}


		// <div className='btn-group dropleft'>
		// 	<button type='button' className='btn btn-outline-secondary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
		// 		{props.type} Portal
		// 	</button>
		// 	<div className='dropdown-menu'>
		// 		<form className='px-4 py-3'>
        //             <div className='text-center'>
        //                 <h5>{props.type} Login</h5>
        //             </div>
		// 			<div className='form-group'>
		// 				<label htmlFor='username'>Username</label>
		// 				<input type='username' className='form-control' id='username' placeholder='Username' />
		// 			</div>
		// 			<div className='form-group'>
		// 				<label htmlFor='password'>Password</label>
		// 				<input type='password' className='form-control' id='password' placeholder='password' />
		// 			</div>
		// 			<div className='form-group'>
		// 				<button type='submit' className='btn btn-primary'>Sign in</button>
		// 			</div>
		// 		</form>
		// 		<div className='dropdown-divider' />
		// 		<SignupModal className='dropdown-item' type={props.type} />
		// 		{/* <a className='dropdown-item' href='/'>Sign up for {props.type} account</a> */}
		// 	</div>
		// </div>


export default Login;