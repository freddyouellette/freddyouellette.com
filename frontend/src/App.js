import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import AboutPage from './pages/About';
import ListenPage from './pages/Listen';
import ContactPage from './pages/Contact';

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
