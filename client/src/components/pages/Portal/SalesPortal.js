import React, { Component } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faIndustry, faUserEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Header from '../../Header';
import SalesProducts from './SalesProducts';
import Modules from './Modules';
import Leads from './Leads';
import API from '../../../utils/API';


class SalesAvatar extends Component {
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

	logOut = e => {
		e.preventDefault();
		API.logOut().then(res => window.location.href = '/').catch(err => console.log(err));
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

class SalesPortal extends Component {
	state = {

	};

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Container>
					<SalesAvatar />
					<Row>
						<Col>
							<h2 className='text-center'>Modules</h2>
							<Modules />
						</Col>
						<Col>
							<h2 className='text-center'>Leads</h2>
							<Leads />
						</Col>
					</Row>
					<h2 className='text-center'>Products</h2>
					<SalesProducts />
				</Container>
			</div>
		);
	}
}

export default SalesPortal;