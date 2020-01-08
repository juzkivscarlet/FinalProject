import React from 'react';

import Container from './components/Container';
import Navbar from './components/Navbar';
import SignupModal from './components/SignupModal';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';

function App() {
	return (
		<Wrapper>
			<Navbar />
			<Jumbotron />
		</Wrapper>
	);
}

export default App;
