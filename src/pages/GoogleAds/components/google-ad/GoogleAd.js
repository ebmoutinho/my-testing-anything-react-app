import React from "react";

const GoogleAd = ({ data }) => {
	// console.log('data ', data);
	console.log("ad inside GoogleAd ", data);
	const { title, isResponsive, adUnitCode, size } = data;

	return (
		<div>
			{/* <p>{title}</p> */}

			{isResponsive ? (
				<div
					key={adUnitCode}
					id={adUnitCode}
					style={{
						// marginBottom: "50px",
						backgroundColor: "gainsboro",
					}}
				></div>
			) : (
				<div
					key={adUnitCode}
					id={adUnitCode}
					// style={{
					// 	width: "100%",
					// 	height: "auto",
					// 	marginBottom: 12,
					// 	backgroundColor: "gainsboro",
					// 	display: 'inline-block',
					// 	// minWidth: "100%",
					// }}
					style={{
						width: size[0],
						height: size[1],
						// marginBottom: "50px",
						backgroundColor: "gainsboro",
						// display: "inline-block",
						// border: "0pt none",
						// minWidth: "100%",
					}}
				></div>
			)}
		</div>
	);
};

export default GoogleAd;
