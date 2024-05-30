import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import AccSettingPass from "./Components/AccSettingPass/AccSettingPass";
import AccountSettings from "./Components/AccountSettings/AccountSettings";
import "./App.css";
import HomeNavbar from "./Components/Navbars/HomeNavbar";
import MainLandingPage from "./Components/MainLandingPage/MainLandingPage";
import Footer from "./Components/Footer/Footer";
import DeleteAccountForm from "./Components/DeleteAccountSettings/DeleteAccountForm";
import InfluenBlend from "./Components/AboutPage/InfluenBlend";
import SignUpInfluencer from "./Components/SignUpInfluencer/SignUpInfluencer";
import SignUp from "./Components/SignUp2/SignUp";
import InfluencerHome from "./Components/loadingBrandPage/InfluencerHome";
import ContactUs from "./Components/ContactUs/ContactUs";
import Blog from "./Components/BlogPage/Blog";
import Signupbrand from "./Components/signupBrand/Signupbrand";
import Banner from "./Components/BusinessLandingPage/Banner";
import All from "./Components/InfluencerDiscovery/all";
import BrandsNavbar from "./Components/Navbars/BrandsNavbar";
import InfluencerNavbar from "./Components/Navbars/InfluencerNavbar";
import BrandP from "./Components/BrandProfile/BrandP";
import Offers from "./Components/Offers/Offers";
import ChoosePlatform from "./Components/BusinessLandingPage/ChoosePlatform";
import Collaborate from "./Components/BusinessLandingPage/Collaborate";
import CollaborationSteps from "./Components/BusinessLandingPage/CollaborationSteps";
import UpgradeCard from "./Components/BusinessLandingPage/UpgradeCard";
import Finalone from "./Components/BusinessLandingPage/Finalone";
import SearchBrand from "./Components/BrandDiscovery/SearchBrand";

import { AuthProvider, useAuth } from "./Contexts/AuthContext";

function App() {
	const { authUser, isLoggedIn } = useAuth();

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<HomeNavbar /> <MainLandingPage /> <Footer />{" "}
							</div>
						}
					/>
					<Route
						path="/AboutUs"
						element={
							<div>
								<HomeNavbar /> <InfluenBlend />
								<Footer />
							</div>
						}
					/>
					<Route
						path="/AboutUs/Brands"
						element={
							<div>
								<BrandsNavbar /> <InfluenBlend />
								<Footer />
							</div>
						}
					/>
					<Route
						path="/AboutUs/Influencers"
						element={
							<div>
								<InfluencerNavbar /> <InfluenBlend />
								<Footer />
							</div>
						}
					/>

					<Route path="/InfluencerSignUp" element={<SignUpInfluencer />} />
					<Route path="/BrandSignUp" element={<Signupbrand />} />
					<Route
						path="/Home"
						element={
							<div>
								<HomeNavbar /> <MainLandingPage />
								<Footer />
							</div>
						}
					/>
					<Route
						path="/ContactUs"
						element={
							<div>
								<HomeNavbar />
								<ContactUs />
								<Footer />
							</div>
						}
					/>

					<Route
						path="/ContactUs/Influencer"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar />
										<ContactUs />
										<Footer />
									</div>
								) : (
									<Navigate to={"/brandsHomePage"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/ContactUs/Brand"
						element={
							authUser ? (
								authUser.userRole === "brand" ? (
									<div>
										<BrandsNavbar />
										<ContactUs />
										<Footer />
									</div>
								) : (
									<Navigate to={"/InfluencerHome"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/Blog"
						element={
							<div>
								<HomeNavbar /> <Blog />
								<Footer />
							</div>
						}
					/>

					<Route
						path="/Blog/Influencers"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar /> <Blog />
										<Footer />
									</div>
								) : (
									<Navigate to={"/brandsHomePage"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/Blog/Brands"
						element={
							authUser ? (
								authUser.userRole === "brand" ? (
									<div>
										<BrandsNavbar /> <Blog />
										<Footer />
									</div>
								) : (
									<Navigate to={"/InfluencerHome"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/Blog/Brands"
						element={
							authUser ? (
								authUser.userRole === "brand" ? (
									<div>
										<BrandsNavbar />
										<Banner />
										<Collaborate />
										<ChoosePlatform />
										<CollaborationSteps />
										<UpgradeCard />
										<Finalone />
										<Footer />
									</div>
								) : (
									<Navigate to={"/InfluencerHome"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>
					<Route
						path="/all"
						element={
							<div>
								<BrandsNavbar />
								<All />
								<Footer />
							</div>
						}
					/>

					<Route
						path="/Brand/ProfilePage"
						element={
							authUser ? (
								authUser.userRole === "brand" ? (
									<BrandP />
								) : (
									<Navigate to={"/InfluencerHome"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/InfluencerHome"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar />
										<InfluencerHome />
										<Footer />
									</div>
								) : (
									<Navigate to={"/brandsHomePage"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/AccountSettings"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar />
										<AccountSettings />
										<Footer />
									</div>
								) : (
									<Navigate to={"/brandsHomePage"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					{/* <Route
						path="/BrandAccountSettings"
						element={
							<div>
								<BrandsNavbar />
								<AccountSettings />
								<Footer />
							</div>
						}
					/> */}
					<Route
						path="/BrandOffers"
						element={
							authUser ? (
								authUser.userRole === "brand" ? (
									<div>
										<BrandsNavbar />
										<Offers />
										<Footer />
									</div>
								) : (
									<Navigate to={"/InfluencerHome"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/InfluencerOffers"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar />
										<Offers />
										<Footer />
									</div>
								) : (
									<Navigate to={"/InfluencerHome"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>

					<Route
						path="/exploreBrands"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar />
										<div className="sidebar">
											<SearchBrand />
										</div>
										<Footer />
									</div>
								) : (
									<Navigate to={"/brandsHomePage"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>
					<Route path="/SignUp" element={<SignUp />} />

					<Route
						path="/AccSettingPass"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar />
										<AccSettingPass />
										<Footer />
									</div>
								) : (
									<Navigate to={"/brandsHomePage"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>
					<Route
						path="/DeleteAccount"
						element={
							authUser ? (
								authUser.userRole === "influencer" ? (
									<div>
										<InfluencerNavbar />
										<DeleteAccountForm />
										<Footer />
									</div>
								) : (
									<Navigate to={"/brandsHomePage"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>
					<Route
						path="/brandsHomePage"
						element={
							authUser ? (
								authUser.userRole === "brands" ? (
									<div>
										<BrandsNavbar />
										<Banner />
										<Collaborate />
										<ChoosePlatform />
										<CollaborationSteps />
										<UpgradeCard />
										<Finalone />
										<Footer />
									</div>
								) : (
									<Navigate to={"/InfluencerHome"} />
								)
							) : (
								<Navigate to={"/"} />
							)
						}
					/>
				</Routes>
			</BrowserRouter>
			{/* <SignPopup /> */}
		</div>
	);
}

export default App;
