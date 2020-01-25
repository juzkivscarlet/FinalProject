import React, { Component } from 'react';
import { Table, Button, Form} from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class SalesProducts extends Component {
	state = {
		products: [],
		businesses: []
	};

	componentDidMount() {
		API.searchProducts().then(data => {
			for(let i=0; i<data.data.length; i++) {
				let items = [...this.state.products];
				items.push(data.data[i]);
				this.setState({products: items});
			}
		});

		API.searchBusinessUsers().then(data => {
			for(let i=0; i<data.data.length; i++) {
				let items = [...this.state.businesses];
				items.push(data.data[i]);
				this.setState({businesses: items});
			}
		});
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	sale = item => {
		API.postSale(item);
	};

	render() {
		return (
			<div style={{maxHeight: "200px", overflowY: "scroll"}}>
				<Form>
					<Form.Group controlId="businessName">
						<Form.Control 
						name='businessName'
						value={this.state.business}
						onChange={this.handleInputChange}
						as="select"
						>
							<option></option>
							{this.state.businesses.map((item, i) => {
								return (
									<option value={i} key={i}>{item.businessName}</option>
								)
							})}
						</Form.Control>
					</Form.Group>
				</Form>

				<Table striped bordered hover>
					<thead style={{textAlign: "center"}}>
						<tr>
							<th>Asset/Product</th>
							<th>Description</th>
							<th>Price Range</th>
							<th>Commissions</th>
							<th>Business</th>
						</tr>
					</thead>
					<tbody>
						{this.state.products.filter(item => item.business == document.getElementById("businessName").options[document.getElementById("businessName").selectedIndex].text).map((item, i) => {
							return (
								<tr key={i} onClick={() => this.sale(item)}>
									<td>{item.name}</td>
									<td>{item.description}</td>
									<td>{item.priceRange}</td>
									<td>{item.commissions}%</td>
									<td>{item.business}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default SalesProducts;