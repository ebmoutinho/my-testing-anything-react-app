import React from "react";
import { AdCardWrapperDiv } from "./AdCard.styles";
import GoogleAd from "../../../GoogleAds/components/google-ad/GoogleAd";
import {
	InfoWrapperDiv,
	BrandH4,
	DescriptionP,
	PriceH4,
	LabelH3,
	ColorsWrapperDiv,
	Colors,
} from "./AdCard.styles";

const AdCard = ({ data, ...remainingProps }) => {
	const {

		productBrand,
		productDescription,
		productPrice,
		productLabel,
		size,
		// width,
	} = data;

	console.log("size[0] ", size[0]);

	console.log("data inside AdCard ", data);
	return (
		// <AdCardWrapperDiv width={size[0]}>
		<AdCardWrapperDiv  {...remainingProps}>
			<GoogleAd data={data} />
			<InfoWrapperDiv>
				<BrandH4>{productBrand}</BrandH4>
				<DescriptionP>{productDescription}</DescriptionP>
				<PriceH4>{productPrice}</PriceH4>
				<LabelH3>{productLabel}</LabelH3>
				<ColorsWrapperDiv>
					<Colors />
					<Colors />
					<Colors />
				</ColorsWrapperDiv>
			</InfoWrapperDiv>
		</AdCardWrapperDiv>
	);
};

export default AdCard;
