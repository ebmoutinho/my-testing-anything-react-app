import React from "react";

import { ProductsWrapperDiv, P } from "./GoogleAdInGrid.styles";
import ProductCard from "./components/product-card/ProductCard";
import GoogleAd from "../GoogleAds/components/google-ad/GoogleAd";
import { mockAds } from "../../mockAds/mockAds";
import useAdSlot from "../../hooks/useAdSlot/useAdSlot";
import AdCard from "./components/ad-card/AdCard";

const GoogleAdInGrid = () => {
	//tenho que ter o hook nas páginas todas que usam ads
	useAdSlot(mockAds);
	const mockProducts = [
		{
			productBrand: "Versace",
			productDescription: "versace bag with silver lining and zipper",
			productPrice: "£50",
			productLabel: "back in stock",
			productImage: "https://placedog.net/326?id=94",
		},
		{
			productBrand: "Armani",
			productDescription: "Armani trousers with color seams",
			productPrice: "£75",
			productLabel: "new in",
			productImage: "https://placedog.net/326?id=95",
		},
		{
			productBrand: "AD",
			productDescription: "partnership advertisement",
			productPrice: "partnership",
			productLabel: "advertisement",
			productImage: "https://placedog.net/326?id=96",
			//
			isAd: true,
         title: "HARRODS FURNITURE AD - only mobile",
         networkCode: "/22247972615/Home_Furniture_PLP_All_Home_Furniture",
         size: [315, 210],
         adUnitCode: "harrods-furniture-03",
         useSizeMapping: false,
         isResponsive: false,
		},
		{
			productBrand: "Mango",
			productDescription: "Dress with pockets and golden buttons",
			productPrice: "£123",
			productLabel: "out of stock",
			productImage: "https://placedog.net/326?id=97",
		},
	];

	const mockAdHarrodsFurniture = {
		title: "HARRODS FURNITURE AD - only mobile",
		networkCode: "/22247972615/Home_Furniture_PLP_All_Home_Furniture",
		size: [315, 210],
		adUnitCode: "harrods-furniture-03",
		useSizeMapping: false,
		isResponsive: false,
	};

	const mockAdHarrodsHomepage = {
		title: "HARRODS LIVE HOMEPAGE - only mobile",
		networkCode: "/22247972615/HomepagePremiumDeep",
		size: [315, 210],
		adUnitCode: "harrods-home-01-mobile-only",
		useSizeMapping: false,
		isResponsive: false,
	};

	const conjunto = [
		{
			title: "HARRODS FURNITURE AD - only mobile",
			networkCode: "/22247972615/Home_Furniture_PLP_All_Home_Furniture",
			size: [315, 210],
			adUnitCode: "harrods-furniture-03",
			useSizeMapping: false,
			isResponsive: false,
		},
		{
			title: "HARRODS LIVE HOMEPAGE - only mobile",
			networkCode: "/22247972615/HomepagePremiumDeep",
			size: [315, 210],
			adUnitCode: "harrods-home-01-mobile-only",
			useSizeMapping: false,
			isResponsive: false,
		},
	];

	return (
		<div>
			<P>Google Ad Page</P>
			{/* <GoogleAd data={mockAds[0]} /> */}
			{/* <GoogleAd data={mockAdHarrodsFurniture} /> */}
			<ProductsWrapperDiv>
				{mockProducts.map((product) => {
					console.log("product ", product);
					if (product.isAd) {
						console.log("this one is ad! ", product);
						return <AdCard data={product} />;
					}
					return <ProductCard data={product} />;
				})}
			</ProductsWrapperDiv>
			<br />
			<br />
			{/* <AdCard data={mockAds[6]} /> */}
			<AdCard data={mockAdHarrodsHomepage} />

			{/* {conjunto.map((ad) => {
				return <AdCard data={ad} />;
			})} */}
		</div>
	);
};

export default GoogleAdInGrid;
