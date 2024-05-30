import React from "react";
import "./BlogPostsCard.css";
import { Link } from "react-router-dom";
const BlogPostsCard = (props) => {
	return (
		<div className="siteWrapper">
			<div className="titleDiv">
				<h2 className="blogTitle"> Blog Posts </h2>
				<Link to={"/Blog"}>
					<button className="viewMoreButton"> View More </button>
				</Link>
			</div>
			{props.blogPostsData.map((item) => {
				return (
					<div class="grid">
						<div class="card">
							<div class="cardImage">
								<img src={item.image} alt="" />

								<div class="cardOverlay">
									<div class="cardOverlayContent">
										<ul class="cardMeta">
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

										<a href="#0" class="cardTitle">
											{item.title}
										</a>

										<ul class="cardMeta cardMetaLast"></ul>
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
