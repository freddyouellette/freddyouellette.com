import React from 'react';

class AudioPlayer extends React.Component {
	
	render() {
		let style = {...(this.props.style || []), ...{"fontSize":"12px"}}
		return (
			<div className="audio-player row align-items-center">
				<audio src={this.props.src}></audio>
				<div className="audio-player-progress"></div>
				<div className="col-2">
					<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
				</div>
				<div className="audio-player-text text-light col-10">
					<div className="audio-player-title">{this.props.title}</div>
					<div className="audio-player-artist">{this.props.artist}</div>
				</div>
				<div className="audio-player-progress-click"></div>
			</div>
		);
	}
}

export default AudioPlayer;