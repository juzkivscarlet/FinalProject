import React, { Component } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faIndustry, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Header from '../../Header';
import Products from './Products';
import Modules from './Modules';
import Leads from './Leads';
import API from '../../../utils/API';


class SalesAvetar extends Component {
	state = {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
	};

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
				firstName: data.data.firstName,
				lastName: data.data.lastName,
				username: data.data.username,
				email: data.data.email
			});
			console.log(this.state);
		});
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	

	render() {
		return (
			<Card bg='info' text='white'>
				<Card.Header className='text-center'>Sales Rep Info</Card.Header>
				<Card.Body>
					<Row> 
						<Col md={{ span: 6, offset: 3 }}>
							<ListGroup horizontal className='text-dark'>
								<ListGroup.Item>
									<span className='text-muted'>First Name: </span>
									{this.state.firstName}
								</ListGroup.Item>
								<ListGroup.Item>
											<span className='text-muted'>Last Name: </span>
											{this.state.lastName}
								</ListGroup.Item>
								<ListGroup.Item>
											<span className='text-muted'>Username: </span>
											{this.state.username}
								</ListGroup.Item>
								<ListGroup.Item>
											<span className='text-muted'>Email: </span>
											{this.state.email}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
	
					<div className='text-center'>
						<Button variant='info'>
							<FontAwesomeIcon icon={faUserEdit} />
							Change account info
						</Button>
					</div>
				</Card.Body>
			</Card>
		);
	}
}

class SalesPortal extends Component {
	state = {

	};

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Container>
					<SalesAvetar />
					<h2>Modules</h2>
					<Modules />
					<h2>Leads</h2>
					<Leads />
					<h2>Products</h2>
					<Products />
				</Container>
			</div>
		);
	}
}

export default SalesPortal;