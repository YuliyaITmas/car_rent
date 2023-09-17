import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src={logo} alt="logo" />
    </Link>
  );
};

const LogoImg = styled.img`
  display: block;
  margin-right: 15px;
  border-radius: 50%;
  width: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  :hover,
  :focus {
    box-shadow: 0 0 30px rgba(11, 68, 205, 0.7);
  }
`;
