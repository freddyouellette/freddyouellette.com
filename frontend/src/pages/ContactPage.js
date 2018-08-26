import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const imgFreddyDark = require('../images/freddy-dark.jpg');
const pdfResume = require('../documents/Frederick Ouellette Music Resume 2018.pdf')

class ContactPage extends React.Component {
	render() {
		let extraFooterStyles = {
			"position":"absolute",
			"bottom":0,
			"left":0,
			"right":0
		}
		return (
			<div>
				<Navbar activeLink="ContactPage"/>
				<div className="container pt-5">
					<div className="row justify-content-center">
						<div className="col-12 col-md-6 col-lg-4 text-center order-12 order-md-1 my-5 my-md-0">
							<a href={pdfResume} rel="noopener noreferrer" target="_blank">Music Resume</a><br/>
							<br/>
							I am available for professional music engagements of all kinds and genres. I also am available to teach private lessons. Please leave me a message and I will get back to you as soon as possible.<br/>
							<br/>
							<a href="mailto:freddy.ouellette@gmail.com">freddy.ouellette@gmail.com</a><br/>
							<a href="tel:18323882930">+1 832 388 2930</a><br/>
						</div>
						<div className="col-12 col-md-6 col-lg-4 order-1 order-md-12">
							<img className="img-fluid rounded" src={imgFreddyDark} alt="In a recording studio"/>
						</div>
					</div>
				</div>
				<Footer style={extraFooterStyles} />
			</div>
		);
	}
}

export default ContactPage;