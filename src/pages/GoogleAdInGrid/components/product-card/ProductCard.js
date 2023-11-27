import React from "react";
import {
	BrandH4,
	DescriptionP,
	ImageWrapperDiv,
	LabelH3,
	PriceH4,
	ProductCardWrapperDiv,
	Image,
	Colors,
	ColorsWrapperDiv,
	InfoWrapperDiv,
	GoogleAdWrapperDiv,
} from "./ProductCard.styles";
import GoogleAd from "../../../GoogleAds/components/google-ad/GoogleAd";

const ProductCard = ({ data }) => {
	const {
		productImage,
		productBrand,
		productDescription,
		productPrice,
		productLabel,
		isAd,
		title,
		networkCode,
		size,
		adUnitCode,
		useSizeMapping,
		isResponsive,
	} = data;

	console.log("data ", data);

	return (
		<>
			<ProductCardWrapperDiv>
				{isAd ? (
					<GoogleAdWrapperDiv>
						<GoogleAd
							data={{
								isAd,
								networkCode,
								size,
								title,
								adUnitCode,
								useSizeMapping,
								isResponsive,
							}}
						/>
					</GoogleAdWrapperDiv>
				) : (
					<ImageWrapperDiv>
						<Image src={productImage} alt={productImage} />
					</ImageWrapperDiv>
				)}

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
			</ProductCardWrapperDiv>
		</>
	);
};

export default ProductCard;
