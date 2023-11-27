import styled from "@emotion/styled";

export const AdCardWrapperDiv = styled.div`
	background-color: oldlace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
   overflow: hidden;

	height: 100%;

	/* ${({ width }) =>
		width &&
		`
    width: ${width}px; // Assuming width is in pixels
  `} */
`;

export const InfoWrapperDiv = styled.div`
	background-color: #fad7a0;
`;

export const GoogleAdWrapperDiv = styled.div`
	background-color: purple;
`;

export const BrandH4 = styled.h4`
	text-transform: uppercase;
	font-size: 18px;
`;

export const DescriptionP = styled.p`
	font-size: 14px;
	color: #656565;
	padding-bottom: 37px;
	height: 21px;
`;

export const PriceH4 = styled.h4`
	text-transform: uppercase;
	font-size: 18px;
`;

export const LabelH3 = styled.h3`
	text-transform: uppercase;
	font-size: 16px;
	padding-top: 4px;
	height: 24px;
	font-weight: 100;
`;


export const ColorsWrapperDiv = styled.div`
	display: flex;
	height: 24px;
	gap: 8px;
	align-items: end;
	margin-bottom: 4px;
`;

export const Colors = styled.div`
	border-radius: 50%;
	background-color: orange;
	height: 12px;
	width: 12px;
`;
