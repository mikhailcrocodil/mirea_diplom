import React from "react";
import logo from "../../../shared/utils/images/Logo.svg";
import { AuthLogoStyled } from "./AuthLogo.styled";
export const AuthLogo = () => {
  return (
    <AuthLogoStyled>
      <img src={logo} alt="logo" />
    </AuthLogoStyled>
  );
};
