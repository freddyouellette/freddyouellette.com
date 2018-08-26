import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ListenPage from './pages/ListenPage';
import ContactPage from './pages/ContactPage';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={AboutPage}/>
					<Route path="/about" component={AboutPage}/>
					<Route path="/listen" component={ListenPage}/>
					<Route path="/contact" component={ContactPage}/>
				</div>
			</Router>
		);
	}
}

export default App;
