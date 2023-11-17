import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./Header.styles";

const Header = ({ ...remainingProps }) => {
	return (
		<StyledNav {...remainingProps}>
			<Link to="/">Home</Link>
			<Link to="/googleads">GoogleAds</Link>
			<Link to="/strapi">Strapi content</Link>
		</StyledNav>
	);
};

export default Header;
