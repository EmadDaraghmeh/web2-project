import React, { useState } from "react";
import "./CollaborationSteps.css";

const steps = [
	{
		title: "Find an Influencer",
		content:
			"Find the influencer you want to collaborate with and check out their profile.",
	},
	{
		title: "Contact the Influencer",
		content:
			"Contact them through our chat system and discuss the collaboration.",
	},
	{
		title: "Send offer and Collaborate!",
		content:
			"Send them an offer through our website and wait for their response.",
	},
];

const CollaborationSteps = () => {
	const [activeStep, setActiveStep] = useState(0);

	const goNext = () => {
		setActiveStep((prevActiveStep) =>
			Math.min(prevActiveStep + 1, steps.length - 1)
		);
	};

	const goPrev = () => {
		setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
	};

	return (
		<div>
			<h1 className="title" id="TTL">
				How does it work?
			</h1>
			<p className="clpar" id="CLLLL">
				with the help of our website you can easily collaborate with influencers
			</p>
			<div className="steps__container" id="SSSCC">
				<ul className="steps" id="steps">
					{steps.map((step, index) => (
						<li key={index} className={index === activeStep ? "active" : ""}>
							{step.title}
						</li>
					))}
				</ul>
			</div>
			<section id="details">
				{steps.map((step, index) => (
					<div
						key={index}
						className={`detail ${index === activeStep ? "" : "hidden"}`}
					>
						<h3 className="detail__title" id="DDDTTTT">
							{step.title}
						</h3>
						<p className="detail__text" id="DTDTD">
							{step.content}
						</p>
						<div className="actions" id="ACCCCCCC">
							{index > 0 && (
								<button
									onClick={goPrev}
									className="btn prev collaborationStepsButton"
								>
									Prev
								</button>
							)}
							{index < steps.length - 1 && (
								<button
									onClick={goNext}
									className="btn next collaborationStepsButton"
								>
									Next
								</button>
							)}
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default CollaborationSteps;
