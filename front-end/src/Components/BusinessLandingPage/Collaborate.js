import React from "react";
import "./Collaborate.css";
import Collaboration from "./Screenshot 2024-05-01 180515.png";

function Collaborate() {
	return (
		<div className="collaborate-section">
			<div className="illustration-team">
				<img src={Collaboration} alt="Collaboration" />
			</div>

			<div className="collaborate-info">
				<h2 className="co">Collaborate with Influencers.</h2>
				<div className="info-block">
					<h3 className="co1">search for influencer</h3>
					<p className="co2">
						you can search for influencers with the help of our filters to find
						the best content creator that suits your needs.
					</p>
				</div>
				<div className="info-block">
					<h3 className="co1">Contact Influencer</h3>
					<p className="co2">
						you can immediately contact influencers through our chat system.
					</p>
				</div>
				<div className="info-block">
					<h3 className="co1">Collaborate!</h3>
					<p className="co2">
						you can choose to collaborate with influencers and send them your
						offer!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Collaborate;
