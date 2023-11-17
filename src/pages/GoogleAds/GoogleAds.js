import React from "react";
import { mockAds } from "../../mockAds/mockAds";
import useGptSlot from "../../hooks/useGptSlot/useGptSlot";

const GoogleAds = () => {
	useGptSlot(mockAds);

	return (
		<div>
			<p>Google Ads</p>
			{mockAds.map((ad) => {
				return (
					<div
						key={ad.adUnitCode}
						id={ad.adUnitCode}
						style={{
							width: ad.size[0],
							height: ad.size[1],
							marginBottom: 12,
						}}
					></div>
				);
			})}
		</div>
	);
};

export default GoogleAds;
