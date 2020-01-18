import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class Products extends Component {
	state = {
		products: []
	};

	componentDidMount() {
		API.searchProducts().then(data => {
			for(let i=0; i<data.data.length; i++) {
				let items = [...this.state.products];
				items.push(data.data[i]);
				this.setState({products: items});
			}
		});
	}

	render() {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Asset/Product</th>
						<th>Business</th>
						<th>Description</th>
						<th>Price Range</th>
						<th>Commissions</th>
					</tr>
				</thead>
				<tbody>
					{this.state.products.map((item, i) => {
						return (
							<tr key={i}>
								<td>{item.product}</td>
								<td>{item.business}</td>
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

export default Products;