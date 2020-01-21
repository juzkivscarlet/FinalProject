import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';

import Container from './components/Container';
import Navigator from './components/Navigator';
import SignupModal from './components/SignupModal';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

import SalesPortal from './components/pages/Portal/SalesPortal';
import BusinessPortal from './components/pages/Portal/BusinessPortal';

function App() {
	return (
		<Router>
			<Route exact path='/' component={Home} />
			<Route exact path='/portal/business' component={BusinessPortal} />
			<Route exact path='/portal/sales' component={SalesPortal} />
		</Router>
	);
}

export default App;
