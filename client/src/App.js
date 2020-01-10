import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/pages/About';

import Container from './components/Container';
import Navbar from './components/Navbar';
import SignupModal from './components/SignupModal';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';

function App() {
	return (
		<Wrapper>
			<Router>
				<Navbar />
				<Jumbotron />
				<Container>
					<Route exact path='/signup' component={SignupModal} />
					<Route exact path='/about' component={About} />
					<SignupModal />
				</Container>
			</Router>
		</Wrapper>
	);
}

export default App;
