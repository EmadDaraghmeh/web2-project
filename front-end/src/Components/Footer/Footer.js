import React from "react";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
	return (
		<footer className="bg-dark text-white">
			<div className="container bg-dark text-white ">
				<section className="mb-4">
					<div className="row">
						<div className="col-md-4" id="footer-col">
							<h6
								className="text-uppercase mb-4 font-weight-bold"
								id="company-name"
							>
								InfluenBlend
							</h6>
							<p>
								Connect with us at InfluenBlend, we're dedicated to helping
								brands and creators build meaningful connections and achieve
								remarkable success. Let’s create something amazing together!
							</p>
						</div>

						<div className="col-md-2" id="footer-col">
							<h6 className="text-uppercase mb-4 font-weight-bold">company</h6>
							<p>
								<a href="#" className="text-white">
									About Us
								</a>
							</p>
							<p>
								<a href="#" className="text-white">
									Our Services
								</a>
							</p>
							<p>
								<a href="#" className="text-white">
									Privacy Policy
								</a>
							</p>
							<p>
								<a href="#" className="text-white">
									FAQs
								</a>
							</p>
						</div>

						<div className="col-md-2" id="footer-col">
							<h6 className="text-uppercase mb-4 font-weight-bold">Help</h6>
							<p>
								<a href="#" className="text-white">
									Support
								</a>
							</p>
							<p>
								<a href="#" className="text-white">
									Careers
								</a>
							</p>
							<p>
								<a href="#" className="text-white">
									Press Center
								</a>
							</p>
							<p>
								<a href="#" className="text-white">
									Contact Us
								</a>
							</p>
						</div>

						<div className="col-md-3" id="footer-col">
							<h6 className="text-uppercase mb-4 font-weight-bold">contact </h6>

							<p>
								<i className="fas fa-home "></i> Nablus, P400, Palestine
							</p>
							<p>
								<i className="fas fa-envelope "></i> info@gmail.com
							</p>
							<p>
								<i className="fas fa-phone "></i> + 970 594 567 888
							</p>
						</div>
					</div>
				</section>
			</div>

			<hr className="my-4" />

			<section className="p-3 pt-0">
				<div className="row align-items-center">
					<div className="col-md-7">
						<div className="p-2">
							© 2024 Copyright:
							<a href="https://InfluenBlend.com/" className="text-white">
								{" "}
								InfluenBlend.com
							</a>
						</div>
					</div>

					<div className="col-md-5  text-md-end">
						<button
							type="button"
							className="btn btn-outline-secondary"
							id="footer-btn1"
						>
							<i class="bi bi-linkedin" id="linkedin-footer"></i>
						</button>

						<button
							type="button"
							className="btn btn-outline-secondary"
							id="footer-btn2"
						>
							<i class="bi bi-google" id="google-footer"></i>
						</button>

						<button
							type="button"
							className="btn btn-outline-secondary"
							id="footer-btn3"
						>
							<i className="bi bi-facebook" id="facebook-footer"></i>
						</button>

						<button
							type="button"
							className="btn btn-outline-secondary"
							id="footer-btn4"
						>
							<i className="bi bi-instagram" id="instagram-footer"></i>
						</button>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
