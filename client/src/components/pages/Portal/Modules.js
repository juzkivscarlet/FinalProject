import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class Modules extends Component {
	state = {
		modules: []
	};

	componentDidMount() {
		API.getModules().then(data => {
			for(let i=0; i<data.data.data.length; i++) {
				let items = [...this.state.modules];
				items.push(data.data.data[i]);
				this.setState({modules: items});
			}
		});
	}

	render() {
		return (
			<div style={{maxHeight: "200px", overflowY: "scroll"}}>
				<Table striped bordered hover>
					<thead>
						<tr style={{textAlign: "center"}}>
							<th>Module Name</th>
							<th>Est. Time</th>
						</tr>
					</thead>
					<tbody>
						{this.state.modules.map((item, i) => {
							return (
								<tr key={i}>
									<td>{item.name}</td>
									<td>{item.time}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Modules;