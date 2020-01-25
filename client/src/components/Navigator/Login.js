import React, { Component } from 'react';
import {Link, useHistory, Redirect, useLocation} from 'react-router-dom';
import { Alert, Button, Dropdown, DropdownButton, Form, Nav } from 'react-bootstrap';
import './style.css';
import SignupModal from '../SignupModal';
import API from '../../utils/API';

class Login extends Component {
	state = {
		username: '',
		password: '',
		shown: false,
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	
	loginUser = (e) => {
		e.preventDefault();
		this.setState({ shown: true});
		if(this.props.type === 'Sales'){
			API.loginSales({
				username: this.state.username,
				password: this.state.password
			}).then(res => {
				if(res.data.incorrect !== "incorrect"){
					API.userInfo();
					window.location.href = '/portal/sales';
				}
				else console.log("Incorrect username or password");
			}).catch(err => console.log("Incorrect username or password"));
			
		}
		else{
			API.loginBusiness({
				username: this.state.username,
				password: this.state.password
			}).then(res => {
				if(res.data.incorrect !== "incorrect"){
					API.userInfo();
					window.location.href = '/portal/business';
				}
				else console.log("Incorrect username or password");
			}).catch(err => console.log("Incorrect username or password"));

		}
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

						<Alert variant="warning">
						{this.state.shown ? "Incorrect Username or Password" : ""}
						</Alert>

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

export default Login;