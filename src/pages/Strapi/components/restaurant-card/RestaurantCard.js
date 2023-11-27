import React from "react";

import { WrapperDiv } from "./RestaurantCard.styles";

const RestaurantCard = ({ data }) => {
	if (!data || data.length === 0) {
		return <div>Loading...</div>;
	}

	return data.map(({ id, attributes }) => {
		return <WrapperDiv>{attributes.restaurantName}</WrapperDiv>;
	});
};

export default RestaurantCard;
