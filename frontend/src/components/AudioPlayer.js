import React from 'react';

import AudioStore from '../stores/AudioStore';
import Dispatcher from '../utilities/Dispatcher';

class AudioPlayer extends React.Component {
	
	constructor(props) {
		super(props);
		this.audio = null;
		this.state = {
			src: '',
			playedAlready: false,
			title: '',
			artist: '',
			playing: false,
			scrubbing: false,
			timePercent: 0,
			buttonClass: 'fa-play-circle',
		};
	}
	
	getAudio = () => {
		// load up the audio via the name given to us via props
		let audioData = AudioStore.audio[this.props.audioName];
		if(audioData.src !== this.state.src) {
			this.audio = new Audio(audioData.src);
			this.audio.addEventListener('timeupdate', this.updateTimePosition);
		}
		this.setState({
			src: audioData.src,
			title: audioData.title,
			artist: audioData.artist,
			playing: audioData.playing,
			buttonClass: audioData.playing ? 'fa-pause-circle' : 'fa-play-circle',
		});
	}
	
	updateTimePosition = () => {
		if(!this.state.scrubbing) {
			this.setState({
				timePercent: this.audio.currentTime / this.audio.duration * 100
			})
		}
	}
	
	startScrub = event => {
		if(!this.state.alreadyPlayed) {
			// hasn't been played yet, first click will play
			Dispatcher.dispatch({
				actionType: 'PLAY_AUDIO',
				audioName: this.props.audioName
			});
			this.setState({
				alreadyPlayed: true
			})
		} else {
			// allow event properties to be accessed in async functions
			event.persist();
			this.setState({
				width: this.refs.player.offsetWidth,
				pageX: this.refs.player.getBoundingClientRect().left,
				scrubbing: true
			}, () => {this.calculateScrub(event)});
			window.addEventListener('mousemove', this.calculateScrub);
			window.addEventListener('mouseup', this.stopScrub);
		}
	}
	
	calculateScrub = (event) => {
		let playerWidth = this.state.width,
			playerLeft = this.state.pageX,
			playerRight = playerLeft + playerWidth,
			timePercent;
		
		if(event.pageX < playerLeft) {
			// mouse is left of the player
			timePercent = 0;
		} else if(event.pageX < playerRight) {
			// mouse is somewhere in the middle
			timePercent = (event.pageX - playerLeft) / playerWidth * 100;
		} else {
			// mouse is right of the player
			timePercent = 100;
		}
		this.setState({
			timePercent: timePercent
		})
	}
	
	stopScrub = event => {
		this.audio.currentTime = this.state.timePercent / 100 * this.audio.duration
		this.setState({
			scrubbing: false
		});
		window.removeEventListener('mousemove', this.calculateScrub);
		window.removeEventListener('mouseup', this.stopScrub);
	}
	
	componentDidUpdate() {
		// after setState
		global.globalAudio = this.audio;
		if(this.state.playing) {
			this.audio.play();
		} else {
			this.audio.pause();
		}
	}
	
	toggleButton = () => {
		let actionType;
		if(this.state.playing) {
			actionType = 'PAUSE_AUDIO';
		} else {
			this.setState({
				alreadyPlayed: true
			})
			actionType = 'PLAY_AUDIO';
		}
		Dispatcher.dispatch({
			actionType: this.state.playing ? 'PAUSE_AUDIO' : 'PLAY_AUDIO',
			audioName: this.props.audioName
		});
	}
	
	componentDidMount() {
		// on first loading of this component, start listening for store change
		AudioStore.on('change', this.getAudio);
		// and get audio for the first 
		this.getAudio();
	}

	componentUnmount(){
		// if we destroy this object, destroy the listener to avoid memory leaks
		AudioStore.removeListener('change', this.getAudio);
	}
	
	render() {
		return (
			<div className="audio-player row align-items-center" ref="player">
				<div className="audio-player-progress" style={{width: this.state.timePercent + '%'}}></div>
				<div className="col-2">
					<i className={`fa fa-lg text-light audio-player-play position-relative ${this.state.buttonClass}`}
						onClick={this.toggleButton}></i>
				</div>
				<div className="audio-player-text text-light col-10">
					<div className="audio-player-title">{this.state.title}</div>
					<div className="audio-player-artist">{this.state.artist}</div>
				</div>
				<div className="audio-player-progress-click" onMouseDown={this.startScrub}></div>
			</div>
		);
	}
}

export default AudioPlayer;