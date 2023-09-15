import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { StyledLink, NavWrap, LinkWrap, LogoImg } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavWrap>
      <Link to="/">
        <LogoImg src={Logo} alt="logo" />
      </Link>

      <LinkWrap>
        <li>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </li>

        <li>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </li>
      </LinkWrap>
    </NavWrap>
  );
};
