function FooterFT() {
	return (
		<div>
<section className="footer">

<div className="box-container">

    <div className="box">
        <a href="#logo" className="logo">No Dues</a><br></br>
        <p>A globally accredited human resource centre of excellence catalyzing
            sustainable livelihoods in the less developed markets across the globe</p>
    
    </div>

    <div className="box">
        <h3>Quick Links</h3>
        <a href="index.php" className="links"> <i className="fas fa-arrow-right"></i> Home </a>
        <a href="login/login.php" className="links"> <i className="fas fa-arrow-right"></i> Login </a>
        <a href="login/register.php" className="links"> <i className="fas fa-arrow-right"></i> Members </a>
        <a href="coordinator/index.html" className="links"> <i className="fas fa-arrow-right"></i>Content </a>
    </div>

    <div className="box">
        <h3>Contact info</h3>
        <p> <i className="fas fa-map"></i> Centurion University, odisha </p><br></br>
        <p> <i className="fas fa-phone"></i> +91 8260077222 </p>
    </div>

    <div className="box">
        <h3>Newsletter</h3>
        <p>Stay our app for latest Update</p>
        <form action="">
            <input type="email" name="" placeholder="Enter your email" className="email" id=""/>
            <input type="submit" value="Send" className="btn"/>
        </form>
    </div>

</div>

</section>
		</div>
	);
}

export default FooterFT;
