import React, { Component } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faIndustry, faPlusCircle, faSignOutAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import './style.css';

import Header from '../../Header';
import Approvals from './Approvals';
import BusinessProducts from './BusinessProducts';

import API from '../../../utils/API';

class BusinessAvatar extends Component {
	state = {
		username: '',
		businessName: '',
		industry: ''
	};

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
				username: data.data.username,
				businessName: data.data.businessName,
				industry: data.data.industry
			});
			console.log(this.state);
		});
	}

	logout = e => {
		e.preventDefault();
		API.logout().then(res => window.location.href = '/').catch(err => console.log(err));
	};

	render() {
		return (
			<Card bg='info' text='white'>
				<Card.Header className='text-center'>Sales Rep Info</Card.Header>
				<Card.Body>
					<Row className='w-100 mx-auto'>
						<ListGroup horizontal className='text-dark mx-auto'>

							<ListGroup.Item>
								<FontAwesomeIcon icon={faBriefcase} />
								<span className='text-muted'>Business: </span>
								{this.state.businessName}
							</ListGroup.Item>

							<ListGroup.Item>
								<FontAwesomeIcon icon={faIndustry} />
								<span className='text-muted'>Industry: </span>
								{this.state.industry}
							</ListGroup.Item>

						</ListGroup>
					</Row>
	
					<div className='text-center'>
						<Button variant='info'>
							<FontAwesomeIcon icon={faUserEdit} />
							Change account info
						</Button>
						<Button variant='info' onClick={this.logOut}>
							<FontAwesomeIcon icon={faSignOutAlt} />
							Log Out
						</Button>
					</div>
				</Card.Body>
			</Card>
		);
	}
}

class BusinessPortal extends Component {
	state = {

	};

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Header />
				<Container>
					<BusinessAvatar />
					<Row>
						<h2 className='w-100 text-center'>Sales Approvals</h2>
						<Approvals />
					</Row>

					<Row>
						<Col md={4} />
						<Col md={4}>
							<h2 className='text-center'>
								Products
							</h2>
						</Col>
						<Col md={4} className='text-right'>
							<Button variant='info'>
								<FontAwesomeIcon icon={faPlusCircle} size="lg" />
								Add Product
							</Button>
						</Col>
					</Row>
					<Row>
						<BusinessProducts />
					</Row>
				</Container>
			</div>
		);
	}
}

export default BusinessPortal;