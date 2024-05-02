import React from "react";
import "./BlogPostsCard.css";
const BlogPostsCard = (props) => {
	return (
		<div class="site__wrapper">
			<div className="titleDiv">
				<h2 className="blogTitle"> Blog Posts </h2>
				<button className="viewMoreButton"> View More </button>
			</div>
			{props.blogPostsData.map((item) => {
				return (
					<div class="grid">
						<div class="card">
							<div class="card__image">
								<img src={item.image} alt="" />

								<div class="card__overlay">
									<div class="card__overlay-content">
										<ul class="card__meta">
											<li>
												<a href="#0">
													<i class="fa fa-tag"></i> {item.tag}
												</a>
											</li>
											<li>
												<a href="#0">
													<i class="fa fa-clock-o"></i> {item.time}
												</a>
											</li>
										</ul>

										<a href="#0" class="card__title">
											{item.title}
										</a>

										<ul class="card__meta card__meta--last"></ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default BlogPostsCard;
