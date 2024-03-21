import React from "react";
import { HeaderLogoStyled } from "./HeaderLogo.styled";
import logo from "../../../utils/images/HeaderLogo.svg";
export const HeaderLogo = () => {
  return (
    <HeaderLogoStyled>
      <img src={logo} />
    </HeaderLogoStyled>
  );
};
