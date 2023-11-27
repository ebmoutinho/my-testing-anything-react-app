import styled from "@emotion/styled";
import * as media from "../../theme/custom-media";

export const P = styled.p`
	margin: 0;
`;

export const ProductsWrapperDiv = styled.div`
	display: grid;
	//mobile
	grid-template-columns: repeat(2, minmax(0, 1fr));

	//laptop & desktop
	${media.tabletMedia} {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	${media.gteLaptopMedia} {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	gap: 24px;
	align-items: flex-start;

	//até max-width 767px
	${media.mobileMedia} {
		margin-bottom: 10px;
	}
`;
