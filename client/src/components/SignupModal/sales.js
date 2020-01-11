import React, { Component } from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import API from '../../utils/API';
import axios from 'axios';

class SalesForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: ''
	};

	componentDidMount() {

	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	signUpForm = event => {
		event.preventDefault();

		var userData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password,
	  	};

		// console.log(userData);
		this.signUpUser();
		  
		// // Clearing out the signup form's fields
		// firstNameInput.value = "";
		// lastNameInput.value = "";
		// usernameInput.value = "";
		// emailInput.value = "";
		// passwordInput.value = "";
	};

	// const stripTags = (data) =>{
	// 	// var newData = data.replace(/</g, "&lt;");
	// 	// return newData;
	// 	return data;
	// };

	signUpUser = (data) => {

		// axios.post('/test/apisignup').then(res => console.log(res));

		
		API.signUp({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password
		})
		.then(function(res) {
			// res.redirect(307, "/api/login");
			console.log(res);
		})
		.catch(function(err) {
			console.log(this.state);
			console.log(err);
		});
	};

	render() {
		return (
			<Modal.Body>
				<h2>Sales Form</h2>
				<Form>

					<Form.Group id="salesFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="First Name" 
							name='firstName'
							value={this.state.firstName} 
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group id="salesLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="Last Name"
							name='lastName'
							value={this.state.lastName}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group id="salesUsername">
						<Form.Label>User Name</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="Username"
							name='userName'
							value={this.state.userName}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group id="salesEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control 
							type="email" 
							placeholder="Enter email"
							name='email'
							value={this.state.email}
							onChange={this.handleInputChange} />
						<Form.Text className="text-muted">
						We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group id="salesPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control 
							type="password" 
							placeholder="Password"
							name='password'
							value={this.state.password}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Button onClick={this.signUpForm} variant="primary" type="submit" id="salesSubmit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		);
	}
}

export default SalesForm;