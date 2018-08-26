import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6 bg-primary">Left</div>
					<div className="col-6 bg-warning">Right</div>
				</div>
			</div>
		);
	}
}

export default App;
