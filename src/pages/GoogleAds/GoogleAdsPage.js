import React from "react";
import { mockAds } from "../../mockAds/mockAds";
import useAdSlot from "../../hooks/useAdSlot/useAdSlot";
import GoogleAd from "./components/google-ad/GoogleAd";

const GoogleAdsPage = () => {
	useAdSlot(mockAds);

	return (
		<>
		{/* <p>test ad</p>
		<GoogleAd data={mockAds[5]} /> */}
		<p>test ad</p>
			{mockAds.map((ad) => {
				console.log('ad', ad);
				return <GoogleAd data={ad} />;
			})}
		</>
	);
};

export default GoogleAdsPage;
