import React from "react";
import { StyledNav, StyledLink } from "./Header.styles";

const Header = ({ ...remainingProps }) => {
	return (
		<StyledNav {...remainingProps}>
			<StyledLink to="/">Home</StyledLink>
			<StyledLink to="/googleads">GoogleAds</StyledLink>
			<StyledLink to="/googleadingrid">Google Ad in grid</StyledLink>
			<StyledLink to="/strapi">Strapi content</StyledLink>
		</StyledNav>
	);
};

export default Header;
