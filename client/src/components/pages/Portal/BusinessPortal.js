import React, { Component } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faIndustry, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import './style.css';

import Header from '../../Header';
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

	render() {
		return (
			<Card bg='info' text='white' className='w-25'>
				<Card.Header>Account info</Card.Header>
				<Card.Body>
					<ListGroup className='text-dark'>
						<ListGroup.Item>
							<Row>
								<Col sm={2}>
									<FontAwesomeIcon icon={faBriefcase} />
								</Col>
								<Col sm={10}>
									<span className='text-muted'>Business: </span>
									{this.state.businessName}
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col sm={2}>
									<FontAwesomeIcon icon={faIndustry} />
								</Col>
								<Col sm={10}>
									<span className='text-muted'>Industry: </span>
									{this.state.industry}
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>
	
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
					<BusinessProducts />
				</Container>
			</div>
		);
	}
}

export default BusinessPortal;