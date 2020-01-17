import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/pages/About';

import Container from './components/Container';
import Navigator from './components/Navigator';
import SignupModal from './components/SignupModal';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

import SalesPortal from './components/pages/Portal';
import BusinessPortal from './components/pages/Portal';

function App() {
	return (
		<Wrapper>
			<Router>
				<Navigator />
				<Header />
				<Container>
					<Route exact path='/signup' component={SignupModal} />
					<Route exact path='/about' component={About} />
					<Route exact path='/portal/sales' component={SalesPortal} />
					<Route exact path='/portal/business' component={BusinessPortal} />
				</Container>
			</Router>
		</Wrapper>
	);
}

export default App;
