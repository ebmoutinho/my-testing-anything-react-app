import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import * as media from "../../../../theme/custom-media";

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	background-color: pink;
	align-items: center;
	padding: 20px 60px;

	//até max-width 767px
	${media.mobileMedia} {
		flex-direction: column;
	}
`;

export const StyledLink = styled(Link)`
	${media.mobileMedia} {
		margin-bottom: 10px;
	}
`;
