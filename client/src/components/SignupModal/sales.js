import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import axios from 'axios';

function SalesForm(props) {
   
	// When the signup button is clicked, we validate the email and password are not blank
	const signUpForm = event => {
		event.preventDefault();

		// Getting references to our form and input
		var firstNameInput = document.getElementById('salesFirstName');
		var lastNameInput = document.getElementById('salesLastName');
		var usernameInput = document.getElementById('salesUsername');
		var emailInput = document.getElementById('salesEmail');
		var passwordInput = document.getElementById('salesPassword');

		var userData = {
			firstName: firstNameInput.value,
			lastName: lastNameInput.value,
			userName: usernameInput.value,
			email: emailInput.value,
			password: passwordInput.value,
	  	};

		console.log(userData);
		signUpUser(userData.firstName, userData.lastName, userData.userName, userData.email, userData.password);
		  
		// Clearing out the signup form's fields
		firstNameInput.value = "";
		lastNameInput.value = "";
		usernameInput.value = "";
		emailInput.value = "";
		passwordInput.value = "";
	};
  
	// const stripTags = (data) =>{
	// 	// var newData = data.replace(/</g, "&lt;");
	// 	// return newData;
	// 	return data;
	// };

	const signUpUser = (firstName, lastName, userName, email, password) => {

		// axios.get('/test').then(res => console.log(res));

		axios.post('/api/signup', {
			firstName: firstName,
			lastName: lastName,
			userName: userName,
			email: email,
			password: password
		})
		.then(function (res) {
			// res.redirect(307, "/api/login");
			console.log(res);
		})
		.catch(function (err) {
			console.log(err);
		});
	};
	
	return (
		<Modal.Body>
			<h2>Sales Form</h2>
			<Form>

				<Form.Group id="salesFirstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" placeholder="First Name" />
				</Form.Group>

				<Form.Group id="salesLastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" placeholder="Last Name" />
				</Form.Group>

				<Form.Group id="salesUsername">
					<Form.Label>User Name</Form.Label>
					<Form.Control type="text" placeholder="Username" />
				</Form.Group>

				<Form.Group id="salesEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group id="salesPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Button onClick={signUpForm} variant="primary" type="submit" id="salesSubmit">
					Submit
				</Button>
			</Form>
		</Modal.Body>
		

	);
}

export default SalesForm;