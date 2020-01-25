import React, { Component, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './style.css';

import API from '../../../utils/API';

function AddProduct() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const state = {
		name: '',
		description: '',
		minPrice: 0,
		maxPrice: 0,
		priceRange: '',
		commissions: ''
	};

	const handleInputChange = e => {
		const [name, value] = e.target;
		state[name] = value;
	};

	const handleSubmit = e => {
		e.preventDefault();
		alert('submit');
	};

	return (
		<>
			<Button variant='info' onClick={handleShow}>
				<FontAwesomeIcon icon={faPlusCircle} size="lg" />
				Add Product
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Add Product</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Container>
						<Form>
							<Form.Group as={Row}>
								<Form.Label column md={4}>Product Name</Form.Label>
								<Col md={8}>
									<Form.Control 
										type='text'
										placeholder='Product'
										name='product'
										value={state.name}
										onChange={handleInputChange}
									/>
								</Col>
							</Form.Group>

							<Form.Group>
								<Form.Label>Description</Form.Label>
								<Form.Control 
									type='text'
									as='textarea'
									rows='3'
									placeholder='description...'
									name='description'
									value={state.description}
									onChange={handleInputChange}
								/>
							</Form.Group>

							<p className='text-center'>Price Range</p>
							<Form.Row>
								<Col md={6}>
									<Form.Group>
										<Form.Label>Min Price</Form.Label>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>$</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control 
												type='number'
												placeholder='100'
												name='minPrice'
												value={state.minPrice}
												onChange={handleInputChange}
											/>
										</InputGroup>
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group>
										<Form.Label>Max Price</Form.Label>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>$</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control 
												type='number'
												placeholder='500'
												name='maxPrice'
												value={state.maxPrice}
												onChange={handleInputChange}
											/>
										</InputGroup>
									</Form.Group>
								</Col>
							</Form.Row>

							<Form.Group as={Row}>
								<Form.Label column md={4}>Commissions</Form.Label>
								<Col md={4} />
								<Col md={4}>
									<InputGroup>
										<Form.Control 
											type='number'
											min='0'
											max='100'
											step='0.5'
											placeholder='10'
											name='commissions'
											className='text-right'
											value={state.commissions}
											onChange={handleInputChange}
										/>
										<InputGroup.Append>
											<InputGroup.Text>%</InputGroup.Text>
										</InputGroup.Append>
									</InputGroup>
								</Col>
							</Form.Group>

							<div className='text-center'>
								<Button onClick={handleSubmit} type='submit' variant='primary' id='addProdBtn'>
									Submit
								</Button>
							</div>
						</Form>
					</Container>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default AddProduct;