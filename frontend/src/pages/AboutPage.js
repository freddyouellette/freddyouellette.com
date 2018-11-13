import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import imgFromage from '../images/fromage.jpg';
import imgFreddy from '../images/Freddy.jpg';
import imgRamHistoricBrass from '../images/ram-historic-brass.jpg';
import imgVersailles from "../images/versailles.jpg";

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<Navbar activeLink="AboutPage"/>
				<div>
					<div className="justify-content-end text-right text-white pr-3" style={{fontSize:'25px'}}>
						<img src={imgFromage} className="d-md-none" style={{position:'absolute', right:0, zIndex:-5}}/>
						<div>Bass Trombone</div>
						<div>Bass Sackbut</div>
						<div>Web Development</div>
						<div style={{height:'500px'}}></div>
					</div>
				</div>
				<div className="row-fluid" id="section-trombone">
					<div className="row-fluid section-title d-none d-md-block">Bass Trombone</div>
					<div className="row-fluid section-title section-title-mobile d-md-none" style={{fontSize:'45px'}}>Bass Trombone</div>
					<img className="img-fluid d-md-none" src={imgFreddy}/>
					<div className="p-3 col-md-4 bg-white">
						I've been playing bass trombone for more than 10 years now. I grew up in Pearland, Texas, where football is huge and so are the marching bands. I started playing bass trombone at Pearland High School under the tutoring of Brian Logan.<br/>
						<br/>
						I eventually moved to Denton, Texas, to get my Bachelor's degree in Bass Trombone Performance. There, I played an immense variety of music, from the swinging Lab Bands that UNT is famous for, to wind bands, orchestras, and trombone quartets. It was there that I learned about the instrument below, the sackbut. I studied with Jan Kagarice, and her pedagogy of simplicity and focus on the music has stuck with me ever since.<br/>
						<br/>
						I flew overseas to get my Master's at the Royal Academy of Music, in London. There I had the opportunity to play across Europe, in musicals, competitions, and international gigs. I studied with Bob Hughes, who is one of the most well-respected bass trombonists in the world. He played in the BBC Scottish Symphony Orchestra, the Scottish National Orchestra under Neemi Jarvi, the Philharmonia Orchestra, and the London Symphony Orchestra.<br/>
						<br/>
						<a href="listen.html">Click here</a> to hear some of the recordings I've made over my career.
					</div>
				</div>
				<div className="row-fluid" id="section-sackbut">
					<div className="row-fluid section-title d-none d-md-block">Bass Sackbut</div>
					<div className="row-fluid section-title section-title-mobile d-md-none" style={{fontSize:'45px'}}>Bass Sackbut</div>
					<img className="img-fluid d-md-none" src={imgRamHistoricBrass}/>
					<div className="p-3 col-md-4 bg-white">
						The Sackbut was the true predecessor of the trombone.<br/>
						<br/>
						It was first used around the beginning of the 15th century, and became one of the biggest solo instruments in sacred (church) music of the Renaissance period. It is still a surprisingly unknown realm amongst even professional trombone players, probably because after around the dawn of the 19th century, the instrument morphed into the louder, more effects-based powerhouse that it is more widely known as today. But in the Renaissance, it was famous for blending with vocalists, imitating them, and bringing a sweet melancholy that other instruments couldn't achieve because of their fixed pitches. It was also known for its ability to become played by incredibly virtuosic soloists.<br/>
						<br/>
						After learning how to play this fascinating instrument at the University of North Texas with the prestigious director of Early Music, Paul Leenhouts, I decided I wanted to get closer to the origin of this type of music, and it was one of the reasons I searched in Europe for graduate school. In London, I played sackbut generously, with people at the top of the world of Renaissance music. My sackbut teacher was Adam Woolf, who is one of the most famous and virtuosic sackbut players of our time.<br/>
						<br/>
						<a href="listen.html">Click here</a> to hear some of the recordings I've made over my career.
					</div>
				</div>
				<div className="row-fluid" id="section-development">
					<div className="row-fluid section-title d-none d-md-block">Web Development</div>
					<div className="row-fluid section-title d-md-none" style={{fontSize:'35px'}}>Web Development</div>
					<img className="img-fluid d-md-none" src={imgVersailles}/>
					<div className="p-3 col-md-4 bg-white">
						Computer Programming has been the unusual hobby of my life, the thing that stuck around long enough for me to actually make money with. I am completely self-taught, never taking a class in my life. I've been programming for about 6 years, since the end of high school. It always interested me because of the constant difficulty and puzzle nature of it. In London, I finally got an opportunity to actually use programming in a professional setting, with the startup company Musitude, which is a music platform. I helped by building a simple NodeJS music transcription software with them.<br/>
						<br/>
						When I moved back to Houston, I started working with a company called <a href="https://sourcewebsolutions.com" target="_blank">SOURCE Web Solutions</a>, a small web development group with a high reputation. With them, I have gained enough professional experience to establish myself as a competent programmer across a number of languages, including PHP, NodeJS, frontend JavaScript, SQL, Git/SVN... I am grateful everyday that I am able to do not just one, but two of my dreams in my life, every single day. I currently work full-time as a web developer, and also play professional concerts as a bass trombonist for-hire.<br/>
						<br/>
						{/* <a href="web-development.html">Click here</a> to learn more about my web development side. */}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default AboutPage;