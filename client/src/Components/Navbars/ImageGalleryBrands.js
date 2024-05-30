import React from "react";
import jsonData from "../loadingBrandPage/images.json";
import { Link } from "react-router-dom";
const ImageGalleryBrands = ({ imageIndex }) => {
	const toggleMenu = () => {
		const subMenu = document.querySelector(".sub-menu-wrap");
		if (subMenu) {
			subMenu.classList.toggle("open-menu");
		}
	};

	if (imageIndex >= 0 && imageIndex < jsonData.length) {
		const selectedImage = jsonData[imageIndex];
		return (
			<div className="image-display">
				<img
					src={selectedImage.url}
					className="profile-img"
					alt="..."
					onClick={toggleMenu}
				/>
				<div className="sub-menu-wrap">
					<div className="sub-menu">
						<div className="user-info">
							<img src={selectedImage.url} className="profile-img" alt="" />
							<h2 className="user-info-heading">{selectedImage.name}</h2>
						</div>
						<hr />
						<a href="/" alt="" className="sub-menu-link">
							<img src="/images/Vector.png" alt="loading" />
							<p>Profile</p>
							<span>{">"}</span>
						</a>
						<Link to={"/BrandOffers"}>
							<a href="/" alt="" className="sub-menu-link">
								<p>Offers</p>
								<span>{">"}</span>
							</a>
						</Link>
						<a href="/" alt="" className="sub-menu-link">
							<img src="/images/settings.png" alt="loading" />
							<p>Settings & Privacy</p>
							<span>{">"}</span>
						</a>

						<a href="/" alt="" className="sub-menu-link">
							<img src="/images/favorites.png" alt="loading" />
							<p>Favorites</p>
							<span>{">"}</span>
						</a>

						<a href="/" alt="" className="sub-menu-link">
							<img src="/images/log-out.png" alt="loading" />
							<p>Log out</p>
							<span>{">"}</span>
						</a>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<img className="profile-img" src="/images/Vector.png" alt="loading" />
		);
	}
};

export default ImageGalleryBrands;
