import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';

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
        firstName: stripTags(firstNameInput.value),
        lastName: stripTags(lastNameInput.value),
        userName: stripTags(usernameInput.value),
        email: stripTags(emailInput.value),
        password: stripTags(passwordInput.value),
	  }
	  
	  // Clearing out the signup form's fields
      firstNameInput.value = "";
      lastNameInput.value = "";
      usernameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      
      console.log(userData);
      signUpUser(userData.firstName, userData.lastName, userData.userName, userData.email, userData.password);
	};
  
    const stripTags = (data) =>{
      var newData = data.replace(/</g, "&lt;");
      return newData;
	};

	const signUpUser = (firstName, lastName, userName, email, password) => {
		return new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			xhr.open("POST", '/api/signup', true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				userName: userName,
				email: email,
				password: password,
			}));
			// .then(function (data) {
			// //   window.location.replace("/");
			// })
			// // If there's an error, log it to the console
			// .catch(function(err){
			//   console.log(err);
			//   return resolve();
			// });
		});
	};
	
	return (
		<Modal.Body>
			<h2>Sales Form</h2>
			<Form>

			<Form.Group controlId="salesFirstName">
				<Form.Label>First Name</Form.Label>
				<Form.Control type="text" placeholder="First Name" />
			</Form.Group>

			<Form.Group controlId="salesLastName">
				<Form.Label>Last Name</Form.Label>
				<Form.Control type="text" placeholder="Last Name" />
			</Form.Group>

			<Form.Group controlId="salesUsername">
				<Form.Label>User Name</Form.Label>
				<Form.Control type="text" placeholder="Username" />
			</Form.Group>

			<Form.Group controlId="salesEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
				We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="salesPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Button onClick={signUpForm} variant="primary" type="submit" controlId="salesSubmit">
				Submit
			</Button>
			</Form>
		</Modal.Body>
		

	);
}

export default SalesForm;