import React from "react";

import { WrapperDiv } from "./ProductCard.styles";

const ProductCard = ({ data }) => {
	console.log("props ", data);

	if (!data || data.length === 0) {
		return <div>Loading...</div>;
	}

	return data.map(({ id, attributes }) => {
		return (
			<WrapperDiv>
				<p className="text">{attributes.restaurantName}</p>
				<p>{id}</p>
			</WrapperDiv>
		);
	});
};

export default ProductCard;

// const ProductCard = (props) => {
//    console.log('props ', props);
// 	const { data } = props;

// 	if (!data || data.length === 0) {
// 		return <div>Loading...</div>;
// 	}

// 	return data.map(({ id, attributes }) => {
// 		return (
// 			<WrapperDiv>
// 				<p>{attributes.restaurantName}</p>
// 				<p>{id}</p>
// 			</WrapperDiv>
// 		);
// 	});
// };