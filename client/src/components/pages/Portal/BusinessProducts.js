import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class BusinessProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			business: ''
		};
	}

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
				business: data.data.businessName
			});
		});
		
		API.searchProducts().then(data => {
			for(let i=0; i<data.data.length; i++) {
				if(data.data[i].business===this.state.business) {
					let items = [...this.state.products];
					items.push(data.data[i]);
					this.setState({products: items});
				}
			}
		});
	}

	render() {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Asset/Product</th>
						<th>Description</th>
						<th>Price Range</th>
						<th>Commissions</th>
					</tr>
				</thead>
				<tbody>
					{this.state.products.map((item, i) => {
						return (
							<tr key={i}>
								<td>{item.name}</td>
								<td>{item.description}</td>
								<td>{item.priceRange}</td>
								<td>{item.commissions}%</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		);
	}
}

export default BusinessProducts;