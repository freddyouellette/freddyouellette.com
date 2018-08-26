import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import About from './pages/About';
import Listen from './pages/Listen';
import Contact from './pages/Contact';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Route exact path="/" component={About}/>
					<Route path="/about" component={About}/>
					<Route path="/listen" component={Listen}/>
					<Route path="/contact" component={Contact}/>
				</div>
			</Router>
		);
	}
}

export default App;
