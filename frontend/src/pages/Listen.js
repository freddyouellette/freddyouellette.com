import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

class ListenPage extends React.Component {
	render() {
		return (
			<div>
				<Navbar activeLink="ListenPage"/>
				Listen
				<Footer />
			</div>
		);
	}
}

export default ListenPage;