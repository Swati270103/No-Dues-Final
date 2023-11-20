
import Video from"./assets/WhatsApp Video 2022-10-23 at 9.36.38 PM.mp4";
function MiddleBr() {
	return (
		<div>
			<section className="about" id="about">
				<div className="video-container">
                <video autoPlay loop muted id="bg-video">
					<source src={Video} type="video/mp4"></source>
		</video>
				</div>

				<div className="content">
					<span>We are here to</span>
					<h3>SHAPE THE WORLD</h3>
					<p>With Hands-On Learning Methods And Industry Collaborations</p>
					<p> Shaping Lives.....</p>
					<p>Empowering Communities....</p>
					<a href="https://cutm.ac.in/about-us/" className="btn">
						read more
					</a>
				</div>
			</section>
		</div>
	);
}

export default MiddleBr;
