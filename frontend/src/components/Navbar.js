import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md bg-primary navbar-light sticky-top">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end text-white" id="navbarNav">
					<ul className="navbar-nav navbar-right">
						<li className="nav-item">
							<Link className="nav-link active" to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/listen">Listen</Link>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link" to="web-development">Web Development</Link>
						</li> */}
						<li className="nav-item mr-lg-4">
							<Link className="nav-link" to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<Link className="navbar-brand brandFont" to="/">Freddy Ouellette</Link>
			</nav>
		);
	}
}

export default Navbar;