import React from "react";
import "./App.css";
import useGptSlot from "./hooks/useGptSlot/useGptSlot";
import { mockAds } from "./mockAds/mockAds";

const App = () => {
	// [ {}, {}, {} ]
	//import custom hook & pass the array of ads
	useGptSlot(mockAds);

	return (
		<div>
			<h3>Google Publisher Tags</h3>
			<h4>PubAds</h4>
			<br />
			<br />
			{/* and render each add in a div */}
			{mockAds.map((ad) => {
				return (
					<div
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

export default App;
