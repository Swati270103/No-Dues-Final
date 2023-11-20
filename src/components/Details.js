import BG1 from "./assets/service-icon-01.png";
import BG2 from "./assets/service-icon-02.png";
import BG3 from "./assets/service-icon-03.png";
function DetailsDU() {
	return (
		<div>
			<section className="services" id="services">
				<div className="heading">
					<span>Our Goals</span>
					<h1>Countless expericences</h1>
				</div>

				<div className="box-container">
					<div className="box">
						<img src={BG1} alt="" />
						<h3>SKILL AND KNOWLEDGE EXCHANGE</h3>
						<p>
							We are dedicated to impart different skill sets to students and
							facultys.
						</p>
					</div>

					<div className="box">
						<img src={BG2} alt="service" />
						<h3>RESEARCH AND INNOVATION</h3>
						<p>
							A research is a Fundamental building block of the process of idea
							Development{" "}
						</p>
					</div>
					<div className="box">
						<img src={BG3} alt="service" />
						<h3>RESEARCH AND INNOVATION</h3>
						<p>
							A research is a Fundamental building block of the process of idea
							Development{" "}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default DetailsDU;
