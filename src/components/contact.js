/* eslint-disable jsx-a11y/iframe-has-title */
import "./contact.css"
import HeadBar from "./header";
import FooterFT from "./Footer";

function Contact() {
	return (
		<div>
			return (
			<div>
				<HeadBar/>
			</div>
			<div className="map-bg">
			
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.9952464574385!2d85.70405991534616!3d20.175923421718263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19aec948fe62ef%3A0xb6c968c7957b6b4f!2sCenturion%20University%20of%20Technology%20%26%20Management%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1672599758995!5m2!1sen!2sin" width="600" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

			</div>
			<div className="App">
				<p>Contact Us</p>
				<div>
					<form >
						<label>First Name</label>
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
						/>
						<label>Last Name</label>
						<input
							type="text"
							id="lname"
							name="lastname"
							placeholder="Your last name.."
						/>

						<label>Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your email"
						/>

						<label>Message</label>
						<textarea
							id="subject"
							name="subject"
							placeholder="Write something.."
						></textarea>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
			);

			<div style={{position:"relative" ,top:"350px"}}>
			<FooterFT/>
			</div>
		</div>
	
	);
}

export default Contact;
