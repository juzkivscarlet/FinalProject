import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import {Link} from 'react-router-dom';

import BusinessForm from './business';
import SalesForm from './sales';
import './style.css';

function SignupModal(props) {
	const [show,setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<Button onClick={handleShow}>
				Sign up for {props.type} account
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create {props.type} Account!</Modal.Title>
				</Modal.Header>

				{props.type==='Business' ? <BusinessForm /> : <SalesForm />}

				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Close but blue
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default SignupModal;