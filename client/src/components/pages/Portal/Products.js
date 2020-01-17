import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class Products extends Component {
	state = {

	};

	componentDidMount() {

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
					<tbody>

					</tbody>
				</thead>
			</Table>
		);
	}
}

export default Products;