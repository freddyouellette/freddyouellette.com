import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';

import imgRAM from '../images/RAM.jpg';
import imgUNT from '../images/UNT.jpg';
import imgPortalsAlbum from '../images/portals.jpg';
import imgCardosoAlbum from '../images/cardoso.jpg';
import imgTwoMusicAlbum from '../images/two-music.jpg';
import imgBychkovStrauss from '../images/bychkovstrauss.jpg';
import imgGomezDebussy from '../images/gomezdebussy.jpg';
import imgGardnerElgar from '../images/gardnerelgar.jpg';
import imgBychkovTchaikovsky from '../images/bychkovtchaikovsky.jpg';
import imgPathwaysAlbum from '../images/pathways.jpg';

import audAugeries from '../audio/portals/auguries-of-innocence.mp3';

class ListenPage extends React.Component {
	render() {
		let collegeTitleStyle = {
			'fontVariant': 'small-caps',
			'fontWeight': 'normal',
			'fontSize': '24px'
		}
		return (
			<div>
				<Navbar activeLink="ListenPage"/>
				<div className="container">
					<div className="row py-3 mt-5" style={{"fontFamily":"Times"}}>
						<div className="col-12 col-md-6 degree-well">
							<div className="row">
								<div className="col-8 col-sm-6 col-lg-5 m-auto">
									<a href="https://www.ram.ac.uk/" target="_blank">
										<img className="img-fluid" src={imgRAM} />
									</a>
								</div>
								<div className="col-12 pt-3 text-center">
									<h5>
										<i>Master of Arts in Bass Trombone Performance with Distinction</i>
									</h5>
									<a href="https://www.ram.ac.uk/" target="_blank">
										<b style={collegeTitleStyle}>The Royal Academy of Music</b>
										<br/>
									</a>
									in London, the United Kingdom
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 degree-well">
							<div className="row">
								<div className="col-8 col-sm-6 col-lg-5 m-auto">
									<a href="https://www.unt.edu/" target="_blank">
										<img className="img-fluid" src={imgUNT} />
									</a>
								</div>
								<div className="col-12 pt-3 text-center">
									<h5>
										<i>Bachelor of Arts in Bass Trombone Performance</i>
									</h5>
									<a href="https://www.unt.edu/" target="_blank">
										<b style={collegeTitleStyle}>The University of North Texas</b>
										<br/>
									</a>
									in Denton, Texas, USA
								</div>
							</div>
						</div>
					</div>
					<hr/>
					<div className="row music-feature">
						<div className="col-12 col-md-4 text-center">
							<img src={imgPortalsAlbum} alt="North Texas Wind Symphony: Portals (2016)" className="img-fluid" />
							<br/>
							<br/>
							<b>North Texas Wind Symphony</b>
							<br/>
							<i>Portals</i> (2016)
							<br/>
						</div>
						<div className="col-12 col-md-8 px-5">
							<AudioPlayer src={audAugeries} title="Augeries of Innocence" artist="William Pitts"/>
							<div className="audio-player row align-items-center">
								<audio src="audio/portals/bells-across.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Bells Across the Atlantic</div>
									<div className="audio-player-artist">Adam Gorb</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/portals/jungla.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Jungla</div>
									<div className="audio-player-artist">Ferrer Ferran</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div>
								<br/>
								<p className="text-sm">
									This was recorded during my senior year at the University of North Texas. The <a href="https://music.unt.edu/ensembles/north-texas-wind-symphony">UNT Wind Symphony</a> is a famous wind band, internationally known for the recordings they put out - often, they become the de facto standard for other bands. Eugene Corporon, the conductor, is just as famous as being the reason the band reached the top. He is militant but energetic, with a craving for perfection.	
								</p>
							</div>
						</div>
					</div>
					<hr/>
					<div className="row music-feature">
						<div className="col-12 col-md-4 text-center">
							<img src={imgCardosoAlbum} alt="The Choir of Girton College and the Historic Brass of the Royal Academy of Music: Cardoso Missa Secundi Toni and Other Works (2018)"
							className="img-fluid" /><br/>
							<div className="mt-4">
								<b>The Choir of Girton College and the Historic Brass of the Royal Academy of Music</b>
								<br/>
								<i>Cardoso Missa Secundi Toni and Other Works</i> (2018)
							</div>
						</div>
						<div className="col-12 col-md-8 px-5">
							<div className="audio-player row align-items-center">
								<audio src="audio/cardoso/girton-non-mortui.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Non Mortui</div>
									<div className="audio-player-artist">Manuel Cardoso</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/cardoso/girton-sancta-maria.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Sancta Maria</div>
									<div className="audio-player-artist">De Brito</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/cardoso/girton-commissa-mea.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Commissa mea pavesco</div>
									<div className="audio-player-artist">Filipe de Magalh&atilde;es</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<p className="text-sm">
								<a target="_blank" href="https://www.girton.cam.ac.uk/discover-girton/girton-today/music/choir/">Girton College</a>, found nestled in the countryside on the north-west side of Cambridge, England, is a beautiful fantasy of a college. The choir there is prominent for their regular recordings, directed by a passionate director, Gareth Wilson. I was invited with my sackbut quartet, along with two cornetto players (one being the highly-esteemed <a target="_blank" href="http://www.jeremywest.co.uk/">Jeremy West</a>) to tour with this choir across Portugal, playing the Renaissance music of Manuel Cardoso. We played his music in Lisbon, Estoril, Porto, and the very church that he most likely composed all of this music, &Eacute;vora Cathedral. We then flew up to the idyllic Durham, England, to record this CD of excellent Renaissance music, played in a classNameic historic brass sextet fa fa-lghion - me on bass sackbut, along with three other tenor sackbuts and two cornettos.
							</p>
						</div>
					</div>
					<hr/>
					<div className="row music-feature">
						<div className="col-12 col-md-4">
							<img src={imgTwoMusicAlbum} alt="UNT Two O'Clock Lab Band, Two Music: It Don't Mean a Thing, if it... (2014)" className="img-fluid"/>
							<div className="mt-4 text-center">
								<b>UNT Two O'Clock Lab Band</b>
								<br/>
								<i>Two Music: It Don't Mean a Thing, if it...</i> (2014)
							</div>
						</div>
						<div className="col-12 col-md-8 px-5">
							<div className="audio-player row align-items-center">
								<audio src="audio/two-music/2-01 Nardis.m4a"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Nardis</div>
									<div className="audio-player-artist">Miles Davis</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/two-music/1-05 Vaguely Reminiscient.m4a"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Vaguely Reminiscient</div>
									<div className="audio-player-artist">Drew Zaremba</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/two-music/2-09 E-Ticket.m4a"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">E-Ticket</div>
									<div className="audio-player-artist">Chuck Owen</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<p className="text-sm">
								UNT is known around the world for their jazz lab bands. They have over a dozen, ranging from the cutting-edge jazz of the <a href="https://en.wikipedia.org/wiki/One_O%27Clock_Lab_Band" target="_blank">One O'Clock Lab Band</a>, to the specialized music of the Latin Jazz Ensemble. The Two O'Clock was usually known for playing more of the classNameics. It was directed by <a href="https://en.wikipedia.org/wiki/Jay_Saunders" target="_blank">Jay Saunders</a>, who has a history of playing lead trumpet for the greats, including the Stan Kenton Orchestra. There actually was an enormous collection of music donated to UNT by Stan Kenton himself, leading to the reason why they organize their jazz bands in the unusually heavy orchestration of 5 trumpets, 5 trombones, and 5 saxes. I played 4th trombone on this album.
							</p>
						</div>
					</div>
					<hr/>
					<div className="row music-feature">
						<div className="col-12 col-md-6 text-center mb-5">
							<a href="https://www.youtube.com/watch?v=h5Zi9zZr-rM?start=567" target="_blank">
								<i className="fa fa-play-circle fa-3x position-absolute ml-3 mt-3"></i>
								<img src={imgBychkovStrauss} alt="Click to watch on YouTube" className="img-fluid"/>
							</a>
							<b>Richard Strauss: Don Juan, Op. 20</b><br/>
							Royal Academy of Music Symphony Orchestra<br/>
							Semyon Bychkov, conductor
						</div>
						<div className="col-12 col-md-6 text-center mb-5">
							<a href="https://www.youtube.com/watch?v=9sj7_L8g0eY" target="_blank">
								<i className="fa fa-play-circle fa-3x position-absolute ml-3 mt-3"></i>
								<img src={imgGomezDebussy} alt="Click to watch on YouTube" className="img-fluid"/>
							</a>
							<b>Debussy La Mer, Mvt. III</b><br/>
							Royal Academy of Music Symphony Orchestra<br/>
							Manuel L&oacute;pez-G&oacute;mez, conductor
						</div>
						<div className="col-12 col-md-6 text-center">
							<a href="https://www.youtube.com/watch?v=PMvks7HpBeo" target="_blank">
								<i className="fa fa-play-circle fa-3x position-absolute ml-3 mt-3"></i>
								<img src={imgGardnerElgar} alt="Click to watch on YouTube" className="img-fluid"/>
							</a>
							<b>Elgar Symphony No. 2, Op. 63, Mvt. II</b><br/>
							Royal Academy of Music Symphony Orchestra<br/>
							Edward Gardner, conductor
						</div>
						<div className="col-12 col-md-6 text-center">
							<a href="https://www.youtube.com/watch?v=FmKymqHg4ak" target="_blank">
								<i className="fa fa-play-circle fa-3x position-absolute ml-3 mt-3"></i>
								<img src={imgBychkovTchaikovsky} alt="Click to watch on YouTube" className="img-fluid"/>
							</a>
							<b>Tchaikovsky Francesca Da Rimini, Op. 32</b><br/>
							Royal Academy of Music Symphony Orchestra<br/>
							Semyon Bychkov, conductor
						</div>
					</div>
					<hr/>
					<div className="row music-feature">
						<div className="col-12 col-md-7 text-center">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/G3MSL3nq2vI" allowfullscreen></iframe>
							</div>
							<b>Monteverdi Vespers</b><br/>
							University of North Texas Baroque Orchestra & Collegium Singers<br/>
							Richard Sparks, conductor
						</div>
						<div className="col-12 col-md-5">
							<p className="text-sm">
								This was one of the first concerts I played bass sackbut in. I was lucky enough to spend it with two of the most famous early-music historians of this age: <a href="http://www.brucedickey.com/" target="_blank">Bruce Dickey</a> (cornetto) and <a href="http://www.concertopalatino.com/charles-toet/" target="_blank">Charles Toet</a> (sackbut), who were invited to UNT to play and teach masterclassNamees with us. These names are literally synonymous with the new wave of historical performance that has been sweeping the world since around the 60s. You could imagine the influence of this concert upon me - and this was actually one of the biggest reasons I decided to study overseas, to get closer to the best performers and closer to the true ancestry and home of the music of the renaissance period.
							</p>
						</div>
					</div>
					<hr/>
					<div className="row music-feature">
						<div className="col-12 col-md-4 text-center">
							<img src={imgPathwaysAlbum} alt="North Texas Wind Symphony: Pathways (2016)" className="img-fluid" />
							<b>North Texas Wind Symphony</b>
							<br/>
							<i>Pathways</i> (2016)
						</div>
						<div className="col-12 col-md-8 px-5">
							<div className="audio-player row align-items-center">
								<audio src="audio/pathways/brooklyn-bridge-1.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Brooklyn Bridge Mvt. 1 (Kimberly Cole Luevano, solo clarinet)</div>
									<div className="audio-player-artist">Michael Daugherty</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/pathways/brooklyn-bridge-2.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Brooklyn Bridge Mvt. 2 (Kimberly Cole Luevano, solo clarinet)</div>
									<div className="audio-player-artist">Michael Daugherty</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/pathways/brooklyn-bridge-3.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Brooklyn Bridge Mvt. 3 (Kimberly Cole Luevano, solo clarinet)</div>
									<div className="audio-player-artist">Michael Daugherty</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<div className="audio-player row align-items-center">
								<audio src="audio/pathways/brooklyn-bridge-4.mp3"></audio>
								<div className="audio-player-progress"></div>
								<div className="col-2">
									<i className="fa fa-lg text-light fa-play-circle audio-player-play position-relative"></i>
								</div>
								<div className="audio-player-text text-light col-10">
									<div className="audio-player-title">Brooklyn Bridge Mvt. 4 (Kimberly Cole Luevano, solo clarinet)</div>
									<div className="audio-player-artist">Michael Daugherty</div>
								</div>
								<div className="audio-player-progress-click"></div>
							</div>
							<p className="text-sm">
								This CD was recorded at the same time as "Portals" above. 
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default ListenPage;