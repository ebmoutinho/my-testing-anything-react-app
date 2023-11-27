import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Home/components/header/Header";
import Home from "./pages/Home/Home";
import Strapi from "./pages/Strapi/Strapi";
import GoogleAds from "./pages/GoogleAds/GoogleAdsPage";
import GoogleAdInGrid from "./pages/GoogleAdInGrid/GoogleAdInGrid";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/googleads" element={<GoogleAds />} />
					<Route path="/googleadingrid" element={<GoogleAdInGrid />} />
					<Route path="/strapi" element={<Strapi />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
