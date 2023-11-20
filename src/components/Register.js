import HeadBar from "./header";
import logo from './assets/cutm_white_logo.png'
import './Register.css'


function Register(){
    return(
        <div>
            <HeadBar/>
            <div className="reg-form">
                <div>
                    <img className="cutm-log" src={logo} alt=""></img>
                    <form>
                        <input className="in-pt" type='text' placeholder="Enter Your Mail"></input>
                        <input className="in-pt" type='number' placeholder="Enter Your Registration No"></input>
                        <input className="in-pt" type='Password' placeholder="Enter Your Password"></input>
                        <input className="in-pt" type='password' placeholder="Enter Your Confirm Password"></input>
                        <input style={{width:'400px',position:'relative',left:'10px'}} type='submit' placeholder="Enter Your Password" value='Register'></input>

                   
                    </form>
                    <p>If you have Account Click</p><a className="register-ln" href="/login">  Login</a>
                </div>
            </div>
            <div className="footer-mb">
				<div className="box-container">
					<div className="box">
						<a href="#logo" className="logo">
							No Dues
						</a><br></br>
						<p>
							A globally accredited human resource centre of excellence
							catalyzing sustainable livelihoods in the less developed markets
							across the globe
						</p>
					</div>
					<div className="box">
						<h3>Quick Links</h3>
						<a href="index.php" className="links">
							{" "}
							<i className="fas fa-arrow-right"></i> Home{" "}
						</a>
						<a href="login/login.php" className="links">
							{" "}
							<i className="fas fa-arrow-right"></i> Login
						</a>
						<a href="login/register.php" className="links">
							{" "}
							<i className="fas fa-arrow-right"></i> Members{" "}
						</a>
						<a href="coordinator/index.html" className="links">
							{" "}
							<i className="fas fa-arrow-right"></i>Content{" "}
						</a>
					</div>
					<div className="box">
						<h3>Contact info</h3>
						<p>
							{" "}
							<i className="fas fa-map"></i> Centurion University, odisha{" "}
						</p>
						<p>
							{" "}
							<i className="fas fa-phone"></i> +91 8260077222{" "}
						</p>
					</div>

					<div className="box">
						<h3>Newsletter</h3>
						<p>Stay our app for latest Update</p>
						<form action="">
							<input
								style={{ width: "400px" }}
								type="email"
								name=""
								placeholder="Enter your email"
								className="email"
								id=""
							/>
							<br></br>
							<input type="submit" value="Send" className="btn" />
						</form>
                       
					</div>
				</div>
			</div>

        </div>
    )
}


export default Register;