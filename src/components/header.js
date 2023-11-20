import logo from "./assets/Logo_CUTM_New.png"

function HeadBar() {
	return (
		<div>
		
			<section className="upper" style={{position:"relative",top:"-31px"}}>
				<div className="container ">
					<div className="content">
						<div className="nav">
							<nav className="padding" style={{ height: "40px" }}>
								<div ><img src={logo} style={{ height: "100px", paddingTop: "45px",position:"relative",left:"80px" }} alt="" srcset="" />
									<h1 className="heading" style={{textTransform:'uppercase',color:"white",paddingBottom:"15px",position:"relative",top:"-10px"}}>Online no dues</h1>								</div>
								<ul>
									<button className="btn-login">
										<li>
											<a href="/" style={{ color: "white" }}>
												Home
											</a>
										</li>
									</button>
									<button className="btn-login">
										<li>
											<a href="/login" style={{ color: "white" }}>
												Login
											</a>
										</li>
									</button>

									<button className="btn-login">
										<li>
											<a href="/register" style={{ color: "white" }}>
												Register
											</a>
										</li>
									</button>

									<button className="btn-login">
										<li>
											<a href="/contact" style={{ color: "white" }}>
												Contact
											</a>
										</li>
									</button>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HeadBar;
