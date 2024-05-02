import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainPageCarousel.css";

const MainPageCarousel = (props) => {
	return (
		<div>
			<Carousel>
				{props.carouselItemsData.map((item) => {
					return (
						<Carousel.Item>
							<img
								className="d-block w-100 carousel-image"
								src={item.slidePhoto}
								alt="First slide"
							/>
							<Carousel.Caption className="carouselCaption">
								<h3 className="carouselTitle">{item.title}</h3>
								<p>{item.paragraph}</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</div>
	);
};

export default MainPageCarousel;
