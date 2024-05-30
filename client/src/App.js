import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
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


import { AuthProvider } from "./Contexts/AuthContext";


function App() {
	return (
		<AuthProvider>
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
								<div>
									<InfluencerNavbar />
									<ContactUs />
									<Footer />
								</div>
							}
						/>
						<Route
							path="/ContactUs/Brand"
							element={
								<div>
									<BrandsNavbar />
									<ContactUs />
									<Footer />
								</div>
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
								<div>
									<InfluencerNavbar /> <Blog />
									<Footer />
								</div>
							}
						/>
						<Route
							path="/Blog/Brands"
							element={
								<div>
									<BrandsNavbar /> <Blog />
									<Footer />
								</div>
							}
						/>
						<Route
							path="/brandsHomePage"
							element={
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
						<Route path="/Brand/ProfilePage" element={<BrandP />} />
						<Route
							path="/InfluencerHome"
							element={
								<div>
									<InfluencerNavbar />
									<InfluencerHome />
									<Footer />
								</div>
							}
						/>
						<Route
							path="/AccountSettings"
							element={
								<div>
									<InfluencerNavbar />
									<AccountSettings />
									<Footer />
								</div>
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
								<div>
									<BrandsNavbar />
									<Offers />
									<Footer />

								</div>
							}
						/>
						<Route
							path="/InfluencerOffers"
							element={
								<div>
									<InfluencerNavbar />
									<Offers />
									<Footer />
								</div>
							}
						/>
						<Route
							path="/exploreBrands"
							element={
								<div>
									<InfluencerNavbar />
									<div className="sidebar">
										
										<SearchBrand />
									</div>
									<Footer />
								</div>
							}
						/>
						<Route path="/SignUp" element={<SignUp />} />
						<Route
							path="/AccSettingPass"
							element={
								<div>
									<InfluencerNavbar />
									<AccSettingPass />
									<Footer />
								</div>
							}
						/>
						<Route
							path="/DeleteAccount"
							element={
								<div>
									<InfluencerNavbar />
									<DeleteAccountForm />
									<Footer />
								</div>
							}
						/>
					</Routes>
				</BrowserRouter>
				{/* <SignPopup /> */}
			</div>
		</AuthProvider>
	);
}

export default App;
