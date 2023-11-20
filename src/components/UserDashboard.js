import React from 'react'
import "./contact.css"

export default function UserDashboard() {
    return (
        <div>
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
        </div>
    )
}
