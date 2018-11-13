import { EventEmitter } from "events";
import Dispatcher from '../utilities/Dispatcher';

// importing here for webpack to pick up the files.
// this will return the src path after webpack crushes it.
import audCardosoCommissaMea from '../audio/cardoso/girton-commissa-mea.mp3';
import audCardosoNonMortui from '../audio/cardoso/girton-non-mortui.mp3';
import audCardosoSanctaMaria from '../audio/cardoso/girton-sancta-maria.mp3';
import audPortalsAuguries from '../audio/portals/auguries-of-innocence.mp3';
import audPortalsBellsAcross from '../audio/portals/bells-across.mp3';
import audPortalsJungla from '../audio/portals/jungla.mp3';
import audBrooklynBridge1 from '../audio/pathways/brooklyn-bridge-1.mp3';
import audBrooklynBridge2 from '../audio/pathways/brooklyn-bridge-2.mp3';
import audBrooklynBridge3 from '../audio/pathways/brooklyn-bridge-3.mp3';
import audBrooklynBridge4 from '../audio/pathways/brooklyn-bridge-4.mp3';
import audTwoVaguelyReminiscient from '../audio/two-music/1-05 Vaguely Reminiscient.m4a';
import audTwoNardis from '../audio/two-music/2-01 Nardis.m4a';
import audTwoETicket from '../audio/two-music/2-09 E-Ticket.m4a';


class AudioStore extends EventEmitter {
	constructor() {
		super();
		this.audio = {
			audCardosoCommissaMea: {
				'src': audCardosoCommissaMea,
				'title': "Commissa mea pavesco",
				'artist': "Filipe de Magalhães",
				'playing': false,
				'scrubbing': false
			},
			audCardosoNonMortui: {
				'src': audCardosoNonMortui,
				'title': "Non Mortui",
				'artist': "Manuel Cardoso",
				'playing': false,
				'scrubbing': false
			},
			audCardosoSanctaMaria: {
				'src': audCardosoSanctaMaria,
				'title': "Sancta Maria",
				'artist': "De Brito",
				'playing': false,
				'scrubbing': false
			},
			audPortalsAuguries: {
				'src': audPortalsAuguries,
				'title': "Auguries of Innocence",
				'artist': "William Pitts",
				'playing': false,
				'scrubbing': false
			},
			audPortalsBellsAcross: {
				'src': audPortalsBellsAcross,
				'title': "Bells Across the Atlantic",
				'artist': "Adam Gorb",
				'playing': false,
				'scrubbing': false
			},
			audPortalsJungla: {
				'src': audPortalsJungla,
				'title': "Jungla",
				'artist': "Ferrer Ferran",
				'playing': false,
				'scrubbing': false
			},
			audBrooklynBridge1: {
				'src': audBrooklynBridge1,
				'title': "Brooklyn Bridge Mvt. 1 (Kimberly Cole Luevano, solo clarinet)",
				'artist': "Michael Daugherty",
				'playing': false,
				'scrubbing': false
			},
			audBrooklynBridge2: {
				'src': audBrooklynBridge2,
				'title': "Brooklyn Bridge Mvt. 2 (Kimberly Cole Luevano, solo clarinet)",
				'artist': "Michael Daugherty",
				'playing': false,
				'scrubbing': false
			},
			audBrooklynBridge3: {
				'src': audBrooklynBridge3,
				'title': "Brooklyn Bridge Mvt. 3 (Kimberly Cole Luevano, solo clarinet)",
				'artist': "Michael Daugherty",
				'playing': false,
				'scrubbing': false
			},
			audBrooklynBridge4: {
				'src': audBrooklynBridge4,
				'title': "Brooklyn Bridge Mvt. 4 (Kimberly Cole Luevano, solo clarinet)",
				'artist': "Michael Daugherty",
				'playing': false,
				'scrubbing': false
			},
			audTwoVaguelyReminiscient: {
				'src': audTwoVaguelyReminiscient,
				'title': "Vaguely Reminiscient",
				'artist': "Drew Zaremba",
				'playing': false,
				'scrubbing': false
			},
			audTwoNardis: {
				'src': audTwoNardis,
				'title': "Nardis",
				'artist': "Miles Davis",
				'playing': false,
				'scrubbing': false
			},
			audTwoETicket: {
				'src': audTwoETicket,
				'title': "E-Ticket",
				'artist': "Chuck Owen",
				'playing': false,
				'scrubbing': false
			}
		};
		
		this.handleActions = this.handleActions.bind(this);
	}
	
	handleActions(data) {
		switch (data.actionType) {
			case "PLAY_AUDIO": {
				// stop all audio
				for(let audioName in this.audio) {
					this.audio[audioName].playing = false;
				}
				// play this audio
				this.audio[data.audioName].playing = true;
				break;
			}
			case 'PAUSE_AUDIO': {
				// stop playing this audio
				this.audio[data.audioName].playing = false;
				break;
			}
			default: break;
		}
		this.emit('change');
	}
}

const audioStore = new AudioStore();
Dispatcher.register(audioStore.handleActions);

export default audioStore;