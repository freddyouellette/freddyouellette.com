import React from 'react';

class Navbar extends React.Component {
	render() {
		let style = {...(this.props.style || []), ...{"font-size":"12px"}}
		return (
			<footer className="footer py-4 bg-info" style={style}>
				<div className="container">
					<div className="row text-muted text-center">
						<div className="col-12 col-md-4">
							Copyright &copy; Freddy Ouellette, Houston TX 2018<br/>
						</div>
						<div className="col-12 col-md-4">
							<a className="text-muted" href="mailto:freddy.ouellette@gmail.com">freddy.ouellette@gmail.com</a>
						</div>
						<div className="col-12 col-md-4">
							<a className="text-white" href="https://github.com/freddyouellette/freddyouellette.com/issues" rel="noopener noreferrer" target="_blank">
								See any issues? Submit it on GitHub
							</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Navbar;