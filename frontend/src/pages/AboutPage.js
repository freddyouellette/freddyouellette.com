import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<Navbar activeLink="AboutPage"/>
				Home
				<Footer />
			</div>
		);
	}
}

export default AboutPage;