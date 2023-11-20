import HeadBar from "./header";
// import FooterFT from "./Footer";
import "./Login.css";
import logo from"./assets/cutm_white_logo.png"

function Login() {
	return (
		<div>
			<HeadBar />
			<div className="cont-log">
				<div className="fn-log">
					<img className="cutm-logo" src={logo} alt=""></img>
					<from>
						<input type="text" placeholder="Enter Your Email"></input>
						<input type="password" placeholder="Enter Your Password"></input>
						<input type="submit" placeholder="Enter Your Password" value='Login'></input>
					</from>
					<p>Don't have account?</p>
					<a className="register-ln" href="/register">
						Register
					</a>
				</div>
			</div>
	
		</div>
	);
}

export default Login;
