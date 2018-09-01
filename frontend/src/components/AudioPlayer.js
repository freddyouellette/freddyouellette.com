import React from 'react';

import AudioStore from '../stores/AudioStore';
import Dispatcher from '../utilities/Dispatcher';

class AudioPlayer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			src: '',
			audio: null,
			title: '',
			artist: '',
			playing: false,
			scrubbing: false,
			timePosition: 0,
			buttonClass: 'fa-play-circle',
		};
		
		// bind functions here so I don't have to later
		this.toggleButton = this.toggleButton.bind(this);
		this.getAudio = this.getAudio.bind(this);
		this.updateTimePosition = this.updateTimePosition.bind(this);
	}
	
	getAudio() {
		// load up the audio via the name given to us via props
		let audioData = AudioStore.audio[this.props.audioName];
		if(audioData.src !== this.state.src) {
			let newAudio = new Audio(audioData.src);
			newAudio.addEventListener('timeupdate', this.updateTimePosition);
			this.setState({
				audio: newAudio
			});
		}
		this.setState({
			src: audioData.src,
			title: audioData.title,
			artist: audioData.artist,
			playing: audioData.playing,
			buttonClass: audioData.playing ? 'fa-pause-circle' : 'fa-play-circle',
		});
	}
	
	updateTimePosition() {
		this.setState({
			timePosition: this.state.audio.currentTime / this.state.audio.duration * 100
		})
	}
	
	componentDidUpdate() {
		// after setState
		global.globalAudio = this.state.audio;
		if(this.state.playing) {
			this.state.audio.play();
		} else {
			this.state.audio.pause();
		}
	}
	
	toggleButton() {
		Dispatcher.dispatch({
			actionType: this.state.playing ? 'PAUSE_AUDIO' : 'PLAY_AUDIO',
			audioName: this.props.audioName
		});
	}
	
	componentDidMount() {
		// on first loading of this component, start listening for store change
		AudioStore.on('change', this.getAudio);
		// and get audio for the first time
		this.getAudio();
	}

	componentUnmount(){
		// if we destroy this object, destroy the listener to avoid memory leaks
		AudioStore.removeListener('change', this.getAudio);
	}
	
	render() {
		return (
			<div className="audio-player row align-items-center">
				<div className="audio-player-progress" style={{width: this.state.timePosition + '%'}}></div>
				<div className="col-2">
					<i className={`fa fa-lg text-light audio-player-play position-relative ${this.state.buttonClass}`}
						onClick={this.toggleButton}></i>
				</div>
				<div className="audio-player-text text-light col-10">
					<div className="audio-player-title">{this.state.title}</div>
					<div className="audio-player-artist">{this.state.artist}</div>
				</div>
				<div className="audio-player-progress-click"></div>
			</div>
		);
	}
}

export default AudioPlayer;